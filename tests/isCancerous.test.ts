import { isCancerous } from '../src';

describe('isCancerous', () => {
	test('GIVEN a cancerous string THEN return true', () => {
		expect(isCancerous('My name is Ståle')).toBe(true);
		expect(isCancerous('HУPΞЯ_XD')).toBe(true);
	});

	test('GIVEN an already decancered string THEN return false', () => {
		expect(isCancerous('My name is Stale')).toBe(false);
	});
});
