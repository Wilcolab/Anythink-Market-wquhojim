/**
 * Converts a given string to camelCase format.
 *
 * The function trims the input string, splits it by spaces, underscores, or hyphens,
 * then converts the first word to lowercase and capitalizes the first letter of each subsequent word.
 * Example: "hello world" -> "helloWorld", "foo_bar-baz" -> "fooBarBaz"
 *
 * @param {string} text - The input string to convert.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The camelCase formatted string.
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * The function trims the input string, inserts dots between lowercase and uppercase letters,
 * replaces spaces, underscores, and hyphens with dots, and converts the result to lowercase.
 * Example: "helloWorld" -> "hello.world", "foo_bar-baz" -> "foo.bar.baz"
 *
 * @param {string} text - The input string to convert.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The dot.case formatted string.
 */
function toCamelCase(text) {
    if (typeof text !== 'string') {
        throw new Error(
            `Error: input '${text}' is of type '${typeof text.charAt === 'function' ? 'String' : typeof text}' not of type 'String' which is required by method toCamelCase()`
        );
    }
    return text
        .trim()
        .split(/[\s_\-]+/)
        .map((word, idx) =>
            idx === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

function toDotCase(text) {
    if (typeof text !== 'string') {
        throw new Error(
            `Error: input '${text}' is of type '${typeof text.charAt === 'function' ? 'String' : typeof text}' not of type 'String' which is required by method toDotCase()`
        );
    }
    return text
        .trim()
        .replace(/([a-z0-9])([A-Z])/g, '$1.$2')
        .replace(/[\s_\-]+/g, '.')
        .toLowerCase();
}

