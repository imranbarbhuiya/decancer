export const cancerPercentage = (str: string, ignoreSpace = false) => {
	if (ignoreSpace) str = str.replace(/\s/g, '');
	const cancerousChars = str.match(/[^\p{ASCII}]/gu);
	if (!cancerousChars) return 0;
	return Math.round((cancerousChars.length / str.length) * 100);
};
