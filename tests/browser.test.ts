/**
 * @vitest-environment jsdom
 */

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { type DOMWindow, JSDOM } from 'jsdom';

describe('browser-bundle-test', () => {
	let window: DOMWindow;

	beforeAll(async () => {
		window = new JSDOM(
			`
				 <!DOCTYPE html>
				 <html lang="en">
				 <head>
					 <meta charset="UTF-8">
					 <meta http-equiv="X-UA-Compatible" content="IE=edge">
					 <meta name="viewport" content="width=device-width, initial-scale=1.0">
					 <title>BrowserBundleTest</title>
					 <script>${await readFile(join(__dirname, '../dist/index.global.js'), 'utf8')}</script>
				 </head>
				 <body></body>
				 </html>
		 `,
			{
				runScripts: 'dangerously',
			},
		).window;
	});

	test('GIVEN an unique array THEN return the given value', () => {
		expect(window.decancer.decancer('Ḣ͚͇͎̰̙̗̹́͟e̞̪̫̣͖̱͍̻̲ͧ̌̀̚̚͘͜w̸̡͕̽̈̾ͬw̥̪͈̖̻ͭ̈́̽ͫ̈͘ơ̢̞ͭͣ̅̑ͭ͗̒̃ ̸͔̝̟̟̳̝͋̄ͥ̈͞W̸͍̬̎̊̎̑͆̐̀̕ò̰̙̺̋ͭ͗́̄̚͝r̪͈̹͈ͧ̅ͨ͛͋͛̃͒̌́l̴̡̰̰͇̪̘̱ͯ̈̓ͨ̕d͎͙̥̩̔̾ͦ̀͞')).toBe('Hewwo World');
		expect(window.decancer.cancerPercentage('vＥⓡ𝔂 𝔽𝕌Ňℕｙ ţ乇𝕏𝓣', true)).toBe(67);
		expect(window.decancer.isCancerous('Mr.R◦O◦T◦I...♡')).toBe(true);
	});
});

declare global {
	interface Window {
		decancer: typeof import('../src');
	}
}
