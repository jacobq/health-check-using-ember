/**
 * @name getTestResultIcon
 *
 * Returns corresponding HTML for bootstrap's glyphicons.
 *
 */
Handlebars.registerHelper('getTestResultIcon', function(result) {
    var testResultMap = {
        "pass": '<span class="glyphicon glyphicon-ok-circle"></span>',
        "fail": '<span class="glyphicon glyphicon-remove-circle"></span>',
        "pending": '',
        "skip": '<span class="glyphicon glyphicon-remove-circle"></span>'
    };
    return new Handlebars.SafeString(testResultMap[result] || testResultMap.pending);
});
