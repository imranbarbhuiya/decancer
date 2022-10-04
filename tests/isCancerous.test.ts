import { isCancerous } from '../src';

describe('isCancerous', () => {
	test('GIVEN a cancerous string THEN return true', () => {
		expect(isCancerous('My name is Ståle')).toBe(true);
		expect(isCancerous('HУPΞЯ_XD')).toBe(true);
		expect(isCancerous('Привет, мир!')).toBe(true);
		expect(isCancerous('vＥⓡ𝔂 𝔽𝕌Ňℕｙ ţ乇𝕏𝓣')).toBe(true);
		expect(isCancerous('𝓝𝓸𝔀 𝓲𝓼 𝓽𝓱𝓮 𝓽𝓲𝓶𝓮 𝓯𝓸𝓻 𝓪𝓵𝓵 𝓰𝓸𝓸𝓭 𝓶𝓮𝓷.')).toBe(true);
		expect(isCancerous('Mr.R◦O◦T◦I...♡')).toBe(true);
		expect(isCancerous('Ḣ͚͇͎̰̙̗̹́͟e̞̪̫̣͖̱͍̻̲ͧ̌̀̚̚͘͜w̸̡͕̽̈̾ͬw̥̪͈̖̻ͭ̈́̽ͫ̈͘ơ̢̞ͭͣ̅̑ͭ͗̒̃ ̸͔̝̟̟̳̝͋̄ͥ̈͞W̸͍̬̎̊̎̑͆̐̀̕ò̰̙̺̋ͭ͗́̄̚͝r̪͈̹͈ͧ̅ͨ͛͋͛̃͒̌́l̴̡̰̰͇̪̘̱ͯ̈̓ͨ̕d͎͙̥̩̣̣̟̮̔̾ͦ̀͞')).toBe(true);
	});

	test('GIVEN an already decancered string THEN return false', () => {
		expect(isCancerous('My name is Stale')).toBe(false);
		expect(isCancerous('HUPKsIaXD')).toBe(false);
		expect(isCancerous('Mr.ROTI...')).toBe(false);
		expect(isCancerous('Now is the time for all good men.')).toBe(false);
	});
});
