import unidecode from 'unidecode';

/**
 *
 * Normalizes a string by removing confusing, zalgo characters and accents.
 *
 * @param str - cancerous string
 * @returns normalized string
 */
export const decancer = (str: string) => {
	str = str.normalize('NFKC');
	str = str.normalize('NFD');
	str = unidecode(str);
	str = str.replace(/[^\d\s.A-Za-z]/g, '');

	return str.trim();
};
