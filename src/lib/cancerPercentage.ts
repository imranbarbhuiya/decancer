export const cancerPercentage = (str: string) => {
	const cancerousChars = str.match(/[^\p{ASCII}]/gu);
	const cancerousCharsCount = cancerousChars ? cancerousChars.length : 0;
	return Math.round((cancerousCharsCount / str.length) * 100);
};
