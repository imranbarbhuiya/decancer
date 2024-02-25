/**
 * Checks if a given string contains any zalgo characters.
 *
 * @param str - string to check
 * @returns true if the string contains zalgo characters
 */
export const isCancerous = (str: string) => /[^\p{ASCII}]/u.test(str);
