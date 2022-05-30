export const isCancerous = (str: string) => {
	return /[^\p{ASCII}]/u.test(str);
};
