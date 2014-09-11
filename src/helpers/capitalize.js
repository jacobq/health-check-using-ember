/**
 * @name capitalize
 *
 * Returns a version of the input string where the
 * the first character of the first word is in upper case.
 */
Handlebars.registerHelper('capitalize', function(result) {
    var firstCharacter = result.substr(0, 1);
    var remainingString = result.substr(1);
    return firstCharacter.toUpperCase() + remainingString;
});