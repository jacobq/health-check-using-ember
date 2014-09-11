HealthCheck.NavigationController = Ember.Controller.extend({
    actions: {
        "showAbout": function() {
            console.log("showAbout", this, arguments);
            this.transitionToRoute("about");
        }
    }
});
