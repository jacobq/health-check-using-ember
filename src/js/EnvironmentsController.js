HealthCheck.EnvironmentsController = Ember.ArrayController.extend({
    selectedEnvironmentName: "qa",
    selectedEnvironment: function() {
        console.log("computing selectedEnvironment");
        return this.store.find("environments", this.get("selectedEnvironmentName"));
    }.property("selectedEnvironmentName")
});