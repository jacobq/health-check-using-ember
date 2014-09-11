HealthCheck.About = DS.Model.extend({
    name: DS.attr('string'),
    version: DS.attr('string'),
    description: DS.attr('string'),
    author: DS.attr('string')
});

// FIXME: Read package.json instead of just copying / hard-coding it here
// Also try to find a more natural / Ember-ish solution
HealthCheck.About.FIXTURES = [{
    "id": 1,
    "name": "ember-health-check",
    "version": "0.0.1-SNAPSHOT",
    "description": "Tool for performing system tests and viewing results",
    "author": "Jacob Quant <jacobq@gmail.com>"
}];