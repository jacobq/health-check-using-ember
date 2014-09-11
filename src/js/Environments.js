HealthCheck.Environments = DS.Model.extend({
    name: DS.attr('string'),
    host: DS.attr('string')
});

HealthCheck.Environments.FIXTURES = [{
    "id": "dev",
    "name": "Development",
    "host": "dev.localhost"
}, {
    "id": "qa",
    "name": "QA",
    "host": "qa.localhost"
}, {
    "id": "prod",
    "name": "Production",
    "host": "prod.localhost"
}];