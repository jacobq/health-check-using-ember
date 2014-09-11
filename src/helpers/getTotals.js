/**
 * @name getTotals
 *
 * It just so happens that right now these names are the same,
 * so this doesn't do a whole lot.
 */
Handlebars.registerHelper('getTotals', function(testGroups) {
    var results = {};
    $.each(testGroups, function() {
        $.each(this.testResults, function() {
            var testResult = this.testResult;
            if (results[testResult] === undefined)
                results[testResult] = 0;
            results[testResult]++;
        });
    });

    var getCount = function(number, singular, plural, doNotColor) {
        var result = "";
        number = number || 0;
        if (number > 0 && !doNotColor)
            result = "<span style=\"color: red; !important\">" + number + "</span>";
        else
            result = number;
        result += " " + (number === 1 ? singular : plural);
        return result;
    };

    return new Handlebars.SafeString(
        getCount(results.fail, "test", "tests")+ " failed, " +
        getCount(results.skip, "test", "tests") + " skipped, " +
        getCount(results.pass, "test", "tests", true) + " passed, " +
        getCount(results.pending, "test", "tests", true) + " pending");
});
