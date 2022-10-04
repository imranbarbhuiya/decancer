import { decancer } from '../src';

describe('Decancer', () => {
	test('GIVEN a cancerous string THEN return decancered string', () => {
		expect(decancer('My name is Ståle')).toBe('My name is Stale');
		expect(decancer('HУPΞЯ_XD')).toBe('HUPKsIaXD');
		expect(decancer('Mr.R◦O◦T◦I...♡')).toBe('Mr.ROTI...');
		expect(decancer('𝓝𝓸𝔀 𝓲𝓼 𝓽𝓱𝓮 𝓽𝓲𝓶𝓮 𝓯𝓸𝓻 𝓪𝓵𝓵 𝓰𝓸𝓸𝓭 𝓶𝓮𝓷.')).toBe('Now is the time for all good men.');
		expect(decancer('𝐍𝐨𝐰 𝐢𝐬 𝐭𝐡𝐞 𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐚𝐥𝐥 𝐠𝐨𝐨𝐝 𝐦𝐞𝐧.')).toBe('Now is the time for all good men.');
		expect(decancer('ℕ𝕠𝕨 𝕚𝕤 𝕥𝕙𝕖 𝕥𝕚𝕞𝕖 𝕗𝕠𝕣 𝕒𝕝𝕝 𝕘𝕠𝕠𝕕 𝕞𝕖𝕟.')).toBe('Now is the time for all good men.');
		expect(decancer('𝐍𝐨𝐰 𝐢𝐬 𝐭𝐡𝐞 𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐚𝐥𝐥 𝐠𝐨𝐨𝐝 𝐦𝐞𝐧.')).toBe('Now is the time for all good men.');
		expect(decancer('𝙽𝚘𝚠 𝚒𝚜 𝚝𝚑𝚎 𝚝𝚒𝚖𝚎 𝚏𝚘𝚛 𝚊𝚕𝚕 𝚐𝚘𝚘𝚍 𝚖𝚎𝚗.')).toBe('Now is the time for all good men.');
		expect(decancer('vＥⓡ𝔂 𝔽𝕌Ňℕｙ ţ乇𝕏𝓣')).toBe('vEry FUNNy tZhe XT');
		expect(decancer('Ḣ͚͇͎̰̙̗̹́͟e̞̪̫̣͖̱͍̻̲ͧ̌̀̚̚͘͜w̸̡͕̽̈̾ͬw̥̪͈̖̻ͭ̈́̽ͫ̈͘ơ̢̞ͭͣ̅̑ͭ͗̒̃ ̸͔̝̟̟̳̝͋̄ͥ̈͞W̸͍̬̎̊̎̑͆̐̀̕ò̰̙̺̋ͭ͗́̄̚͝r̪͈̹͈ͧ̅ͨ͛͋͛̃͒̌́l̴̡̰̰͇̪̘̱ͯ̈̓ͨ̕d͎͙̥̩̔̾ͦ̀͞')).toBe('Hewwo World');
	});

	test('GIVEN an already decancered string THEN return the same string', () => {
		expect(decancer('My name is Stale')).toBe('My name is Stale');
	});
});
