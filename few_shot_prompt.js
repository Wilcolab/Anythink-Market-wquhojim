function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+/g, ' ') // Replace separators with space
        .replace(/([A-Z]+)/g, ' $1') // Separate consecutive uppercase letters
        .trim()
        .toLowerCase()
        .split(' ')
        .map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

// Examples:
// toCamelCase('first name') => 'firstName'
// toCamelCase('user_id') => 'userId'
// toCamelCase('SCREEN_NAME') => 'screenName'
// toCamelCase('mobile-number') => 'mobileNumber'