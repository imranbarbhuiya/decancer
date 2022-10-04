export const cancerPercentage = (str: string, ignoreSpace = false) => {
	if (ignoreSpace) str = str.replace(/\s/g, '');
	const cancerousChars = str.match(/[^\p{ASCII}]/gu);
	const cancerousCharsCount = cancerousChars ? cancerousChars.length : 0;
	return Math.round((cancerousCharsCount / str.length) * 100);
};
