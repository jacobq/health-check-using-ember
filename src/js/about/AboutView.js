HealthCheck.AboutView = Ember.View.extend(Ember.ViewTargetActionSupport, {
    didInsertElement: function() {
        this.triggerAction({
            action: 'showModal'
        });
    }
});