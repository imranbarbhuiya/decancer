import { isCancerous } from '../src';

describe('isCancerous', () => {
	test('GIVEN a cancerous string THEN return true', () => {
		expect(isCancerous('My name is Ståle')).toBe(true);
		expect(isCancerous('HУPΞЯ_XD')).toBe(true);
		expect(isCancerous('Привет, мир!')).toBe(true);
		expect(isCancerous('vＥⓡ𝔂 𝔽𝕌Ňℕｙ ţ乇𝕏𝓣')).toBe(true);
		expect(isCancerous('𝓝𝓸𝔀 𝓲𝓼 𝓽𝓱𝓮 𝓽𝓲𝓶𝓮 𝓯𝓸𝓻 𝓪𝓵𝓵 𝓰𝓸𝓸𝓭 𝓶𝓮𝓷.')).toBe(true);
		expect(isCancerous('Mr.R◦O◦T◦I...♡')).toBe(true);
	});

	test('GIVEN an already decancered string THEN return false', () => {
		expect(isCancerous('My name is Stale')).toBe(false);
		expect(isCancerous('HUPKsIaXD')).toBe(false);
		expect(isCancerous('Mr.ROTI...')).toBe(false);
		expect(isCancerous('Now is the time for all good men.')).toBe(false);
	});
});
