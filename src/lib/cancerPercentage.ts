/**
 * Gives the percentage of cancerous characters in a string.
 *
 * @param str - string to check
 * @param ignoreSpace whether to ignore spaces
 * @returns percentage of cancerous characters in the string
 */
export const cancerPercentage = (str: string, ignoreSpace = false) => {
	if (ignoreSpace) str = str.replaceAll(/\s/g, '');
	const cancerousChars = str.match(/[^\p{ASCII}]/gu);
	if (!cancerousChars) return 0;
	return Math.round((cancerousChars.length / str.length) * 100);
};
