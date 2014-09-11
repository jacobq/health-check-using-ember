HealthCheck.IndexRoute = Ember.Route.extend({
    viewName: "environments",
    controllerName: "environments",
    model: function() {
        console.log("IndexRoute setup model");
        return this.store.findAll('environments');
    },
    setupController: function(controller, model) {
        console.log("IndexRoute setupController");
        controller.set("model", model);
    }
});