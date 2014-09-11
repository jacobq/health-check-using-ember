HealthCheck.AboutController = Ember.Controller.extend({
    title: "aboutModal",
    actions: {
        showModal: function() {
            return Bootstrap.ModalManager.show(this.get('title'));
        },
        hideModal: function() {
            return Bootstrap.ModalManager.hide(this.get('title'));
        }
    }
});
