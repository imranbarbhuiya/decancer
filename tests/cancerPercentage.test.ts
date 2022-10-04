import { cancerPercentage } from '../src';

describe('cancerPercentage', () => {
	test('GIVEN a cancerous string THEN returns the percentage of cancerous characters', () => {
		expect(cancerPercentage('My name is Ståle')).toBe(6);
		expect(cancerPercentage('HУPΞЯ_XD')).toBe(38);
		expect(cancerPercentage('Mr.R◦O◦T◦I...♡')).toBe(29);
		expect(cancerPercentage('𝓝𝓸𝔀 𝓲𝓼 𝓽𝓱𝓮 𝓽𝓲𝓶𝓮 𝓯𝓸𝓻 𝓪𝓵𝓵 𝓰𝓸𝓸𝓭 𝓶𝓮𝓷.')).toBe(43);
		expect(cancerPercentage('𝐍𝐨𝐰 𝐢𝐬 𝐭𝐡𝐞 𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐚𝐥𝐥 𝐠𝐨𝐨𝐝 𝐦𝐞𝐧.')).toBe(43);
		expect(cancerPercentage('ℕ𝕠𝕨 𝕚𝕤 𝕥𝕙𝕖 𝕥𝕚𝕞𝕖 𝕗𝕠𝕣 𝕒𝕝𝕝 𝕘𝕠𝕠𝕕 𝕞𝕖𝕟.')).toBe(44);
		expect(cancerPercentage('𝐍𝐨𝐰 𝐢𝐬 𝐭𝐡𝐞 𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐚𝐥𝐥 𝐠𝐨𝐨𝐝 𝐦𝐞𝐧.')).toBe(43);
		expect(cancerPercentage('𝙽𝚘𝚠 𝚒𝚜 𝚝𝚑𝚎 𝚝𝚒𝚖𝚎 𝚏𝚘𝚛 𝚊𝚕𝚕 𝚐𝚘𝚘𝚍 𝚖𝚎𝚗.')).toBe(43);
		expect(cancerPercentage('vＥⓡ𝔂 𝔽𝕌Ňℕｙ ţ乇𝕏𝓣', true)).toBe(67);
	});

	test('GIVEN a non-cancerous string THEN returns 0', () => {
		expect(cancerPercentage('My name is Stale')).toBe(0);
		expect(cancerPercentage('HYPER XD')).toBe(0);
	});
});
