import unidecode from 'unidecode';

export const decancer = (str: string) => {
	str = str.normalize('NFKC');
	str = str.normalize('NFD');
	str = unidecode(str);
	str = str.replace(/[^\d\n .A-Za-z]/g, '');

	return str.trim();
};
