/**
 * @name getTestResultText
 *
 * Supply nicely formatted/capitalized messages corresponding to a given test result.
 */
Handlebars.registerHelper('getTestResultText', function(result) {
    var testResultMap = {
        "pass": "Passed",
        "fail": "Failed",
        "pending": "Pending",
        "skip": "Skipped (errors)"
    };
    return testResultMap[result] || testResultMap.unknown;
});
