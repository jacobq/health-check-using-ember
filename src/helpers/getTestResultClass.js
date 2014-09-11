/**
 * @name getTestResultClass
 *
 * It just so happens that right now these names are the same,
 * so this doesn't do a whole lot.
 */
Handlebars.registerHelper('getTestResultClass', function(result) {
    var testResultMap = {
        "pass": "pass",
        "fail": "fail",
        "pending": "pending",
        "skip": "skip"
    };
    return testResultMap[result] || testResultMap.pending;
});
