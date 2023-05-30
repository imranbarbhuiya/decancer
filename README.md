<div align="center">

# @imranbarbhuiya/decancer

[![GitHub](https://img.shields.io/github/license/imranbarbhuiya/decancer)](https://github.com/imranbarbhuiya/decancer/blob/main/LICENSE)
[![codecov](https://codecov.io/gh/imranbarbhuiya/decancer/branch/main/graph/badge.svg?token=token)](https://codecov.io/gh/imranbarbhuiya/decancer)
[![npm](https://img.shields.io/npm/v/@imranbarbhuiya/decancer?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@imranbarbhuiya/decancer)

</div>

## Description

A package to remove zalgo and common confusable characters from strings.

Read Full Documentation [here](https://imranbarbhuiya.github.io/decancer).

## Features

-   Written In Typescript
-   Offers CJS, ESM and UMD builds
-   Full TypeScript & JavaScript support

> **Note**
> This project is not perfect, false-positives may happen.

## Installation

You can use the following command to install this package, or replace npm install with your package manager of choice.

```bash
npm i @imranbarbhuiya/decancer
```

## Usage

```ts
import { decancer, isCancerous, cancerPercentage } from '@imranbarbhuiya/decancer';

// Check if a string is cancerous

isCancerous('hello world'); // false
isCancerous('vＥⓡ𝔂 𝔽𝕌Ňℕｙ ţ乇𝕏𝓣'); // true

cancerPercentage('vＥⓡ𝔂 𝔽𝕌Ňℕｙ ţ乇𝕏𝓣', true); // 67
cancerPercentage('My name is Stale'); // 0

// Decancer a string
const result = decancer('Ḣ͚͇͎̰̙̗̹́͟e̞̪̫̣͖̱͍̻̲ͧ̌̀̚̚͘͜w̸̡͕̽̈̾ͬw̥̪͈̖̻ͭ̈́̽ͫ̈͘ơ̢̞ͭͣ̅̑ͭ͗̒̃ ̸͔̝̟̟̳̝͋̄ͥ̈͞W̸͍̬̎̊̎̑͆̐̀̕ò̰̙̺̋ͭ͗́̄̚͝r̪͈̹͈ͧ̅ͨ͛͋͛̃͒̌́l̴̡̰̰͇̪̘̱ͯ̈̓ͨ̕d͎͙̥̩̔̾ͦ̀͞'); // 'Hewwo World'
```

## Buy me some doughnuts

If you want to support me by donating, you can do so by using any of the following methods. Thank you very much in advance!

<a href="https://www.buymeacoffee.com/parbez" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
<a href='https://ko-fi.com/Y8Y1CBIJH' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Contributors ✨

Thanks goes to these wonderful people:

<a href="https://github.com/imranbarbhuiya/TagScript/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=imranbarbhuiya/TagScript" />
</a>
