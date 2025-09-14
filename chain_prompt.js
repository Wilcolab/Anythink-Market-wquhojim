function toKebabCase(text) {
    if (typeof text !== 'string') {
        throw new Error(
            `Error: input '${text}' of type '${typeof text.charAt === 'function' ? 'String' : typeof text}' is invalid; toKebabCase() requires an input of type 'String'`
        );
    }
    // Trim leading/trailing spaces
    const trimmed = text.trim();
    // Replace all spaces (including consecutive) with hyphens
    const kebab = trimmed.replace(/\s+/g, '-');
    return kebab;
}

// Example usage:
// console.log(toKebabCase("convert to kebab")); // "convert-to-kebab"
// console.log(toKebabCase(8)); // Throws error