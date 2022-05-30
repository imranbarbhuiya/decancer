import { decancer } from '../src';

describe('Decancer', () => {
	test('GIVEN a cancerous string THEN return decancered string', () => {
		expect(decancer('My name is Ståle')).toBe('My name is Stale');
		expect(decancer('HУPΞЯ_XD')).toBe('HUPKsIaXD');
		expect(decancer('Mr.R◦O◦T◦I...♡')).toBe('Mr.ROTI...');
	});

	test('GIVEN an already decancered string THEN return the same string', () => {
		expect(decancer('My name is Stale')).toBe('My name is Stale');
	});
});
