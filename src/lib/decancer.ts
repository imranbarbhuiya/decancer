import unidecode from 'unidecode';

export const decancer = (str: string) => {
	str = str.normalize('NFKC');
	str = str.normalize('NFD');
	str = unidecode(str);
	str = str.replace(/[^a-zA-Z0-9 \n.]/g, '');

	return str.trim();
};
