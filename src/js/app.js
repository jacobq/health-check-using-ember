window.HealthCheck = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_ACTIVE_GENERATION: true
    //LOG_TRANSITIONS_INTERNAL: true
});

HealthCheck.ApplicationController = Ember.Controller.extend({
    title: "System Health Check"
});

HealthCheck.ApplicationAdapter = DS.FixtureAdapter;
