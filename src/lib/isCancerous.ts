import { isAlnum, isAscii } from './utils';

export const isCancerous = (str: string) => {
	for (const segment of str.split(/\s+/)) {
		for (const char of segment) {
			if (!(isAscii(char) && isAlnum(char))) {
				return true;
			}
		}
	}
	return false;
};
