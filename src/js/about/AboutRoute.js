HealthCheck.AboutRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('about', 1);
    }
});
