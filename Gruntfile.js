module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        directories: {
            source: "src",
            templates: "<%= directories.source %>/templates/",
            build: "build",
            bower: "bower_components",
            node: "node_modules",
            dist: "dist"
        },
        files: {
            helpersJs: "<%= directories.build %>/helpers.js",
            templatesJs: "<%= directories.build %>/templates.js",
            appJs: "<%= directories.build %>/app.js"
        },
        bower: {
            install: {
                options: {
                    copy: false
                }
            }
        },
        clean: {
            build: [
                "<%= directories.build %>/*",
                "!<%= directories.build %>/.gitignore",
                "!<%= directories.build %>/nw"
            ],
            dist: [
                "<%= directories.dist %>/*",
                "!<%= directories.dist %>/.gitignore"
            ]
        },
        jshint: {
            all: [
                "Gruntfile.js",
                "<%= directories.source %>/**/*.js"
            ]
        },
        emberTemplates: {
            compile: {
                options: {
                    amd: false,
                    templateBasePath: /src\/templates\//    // FIXME: How to eliminate this duplication / dependency??
                },
                files: [{
                    src: ["<%= directories.templates %>/**/*.handlebars"],
                    dest: "<%= files.templatesJs %>"
                }]
            }
        },
        concat: {
            options: {
                separator: ";"
            },
            helpers: {
                src: ["<%= directories.source %>/helpers/**/*"],
                dest: "<%= files.helpersJs %>"
            },
            app: {
                src: ["<%= directories.source %>/js/app.js", "<%= directories.source %>/**/*.js"],
                dest: "<%= files.appJs %>"
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: "<%= directories.source %>",
                        src: ["**/*",
                            "!helpers/**",
                            "!js/**",
                            "!templates/**"
                        ],
                        dest: "<%= directories.dist %>"
                    }, {
                        expand: true,
                        flatten: true,
                        src: ["<%= files.helpersJs %>", "<%= files.templatesJs %>"],
                        dest: "<%= directories.dist %>/js"
                    }, {
                        expand: true,
                        flatten: true,
                        src: ["<%= files.appJs %>"],
                        dest: "<%= directories.dist %>/js/"
                    }, {
                        expand: true,
                        flatten: true,
                        src: ["./package.json"],
                        dest: "<%= directories.dist %>"
                    }, {
                        expand: true,
                        src: ["<%= directories.bower %>/**"],
                        dest: "<%= directories.dist %>"
                    }
                ]
            },
            nodewebkit: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ["<%= nodewebkit.options.buildDir %>/<%= pkg.name %>/win/*"],
                        dest: "<%= directories.dist %>/win/"
                    }
                ]
            }
        },
        nodewebkit: {
            options: {
                buildDir: "<%= directories.build %>/nw/build",
                cacheDir: "<%= directories.build %>/nw/cache",
                force_download: false,
                linux32: false,
                linux64: false,
                mac: false,
                win: true,
                version: "0.10.4"
            },
            src: ["<%= directories.dist %>/**/*"]
        },
        connect: {
            server: {
                options: {
                    keepalive: true,    // FIXME: watch task seems to bog down node (100% CPU)
                    port: 8001,
                    hostname: '*',
                    base: 'dist'
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['emberTemplates', 'jshint', 'concat:helpers', 'copy:main'],
                options: {
                    spawn: false
                }
            }
        }
    });
	
	
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-ember-templates");
    grunt.loadNpmTasks("grunt-node-webkit-builder");

    grunt.registerTask("default", [
        "clean",
        "bower:install",
        "emberTemplates",
        "jshint",
        "concat",
        "copy:main"
        ]);
    grunt.registerTask("nodewebkit", [
        "default",
        "nodewebkit",
        "copy:nodewebkit"
    ]);

    grunt.registerTask("serve", ["default", "connect", "watch"]);
};
