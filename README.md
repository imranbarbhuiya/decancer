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
import { decancer, isCancerous } from '@imranbarbhuiya/decancer';

// Check if a string is cancerous

isCancerous('hello world'); // false
isCancerous('vＥⓡ𝔂 𝔽𝕌Ňℕｙ ţ乇𝕏𝓣'); // true

// Decancer a string
const result = decancer('HУPΞЯ_XD');
```

## Buy me some doughnuts

If you want to support me by donating, you can do so by using any of the following methods. Thank you very much in advance!

<a href="https://www.buymeacoffee.com/parbez" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
<a href='https://ko-fi.com/Y8Y1CBIJH' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/imranbarbhuiya"><img src="https://avatars.githubusercontent.com/u/74945038?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Parbez</b></sub></a><br /><a href="https://github.com/imranbarbhuiya/decancer/commits?author=imranbarbhuiya" title="Code">💻</a> <a href="#maintenance-imranbarbhuiya" title="Maintenance">🚧</a> <a href="#ideas-imranbarbhuiya" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://renovate.whitesourcesoftware.com"><img src="https://avatars.githubusercontent.com/u/25180681?v=4?s=100" width="100px;" alt=""/><br /><sub><b>WhiteSource Renovate</b></sub></a><br /><a href="#maintenance-renovate-bot" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
