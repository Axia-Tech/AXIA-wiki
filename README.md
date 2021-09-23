[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](#LICENSE)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](https://www.markdownguide.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/general/contributing.md)
![visitors](https://visitor-badge.glitch.me/badge?page_id=page.id)
[![AXIASolar Prod](https://github.com/axia-tech/axiasolar-wiki/actions/workflows/deploy-axiasolar-prod.yml/badge.svg)](https://github.com/axia-tech/axiasolar-wiki/actions/workflows/deploy-axiasolar-prod.yml)
[![AXIALunar Prod](https://github.com/axia-tech/axiasolar-wiki/actions/workflows/deploy-axialunar-prod.yml/badge.svg)](https://github.com/axia-tech/axiasolar-wiki/actions/workflows/deploy-axialunar-prod.yml)

| <a href="https://solar.wiki.axiacoin.network/" rel="some text">![AXIASolar Wiki](docs/assets/axiasolar-wiki.png)</a> | <a href="https://lunar.wiki.axiacoin.network/" rel="some text">![AXIALunar Guide](docs/assets/axialunar-guide.png)</a> |
| :-------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |

# AXIASolar Wiki

<img align="right" src="docs/assets/web3-logo.png" width="518" height="285">

<p align="left">
  The AXIASolar Wiki is the central source of truth for AXIASolar. It is a community-focused initiative led by AXIACoin Foundation to 
  keep an up-to-date resource on the best information for learning, building, or maintaining on AXIASolar. 
</p>

## Contributing to Documentation

The Wiki is an open source project and we will review all issues and pull-requests created
in this repository. If you notice typos or grammatical errors, please feel free to directly create pull requests with
these corrections.

Larger contributions may start as issues to test the waters on the subject with the maintainers.
It is generally preferable to create a pull request over an issue to propose a change to the wiki content.

### Running Locally

Both the AXIASolar Wiki and the AXIALunar Guide are built from the source files in this repository.
After cloning the source locally, you can start the websites with each of these respective commands
(ensure you run `yarn` at the root of the repository first to install dependencies):

> The site is built using Docusaurus: you may need to install Docusaurus before running
> the Wiki locally. Using yarn, run `yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest`.

```zsh
# For the AXIASolar Wiki:
yarn axiasolar:start
# For the AXIALunar Guide:
yarn axialunar:start
```

#### Building IPFS

- Run `yarn axialunar:build`
- Run `yarn axiasolar:build`

#### Running GitHub Pages

- Run `yarn axialunar:publish-gh-pages`
- Run `yarn axiasolar:publish-gh-pages`

### Style Guide

Use the style guide from the
[Substrate Knowledge Base](https://github.com/substrate-developer-hub/knowledgebase/blob/master/CONTRIBUTING.md#documentation-style)

#### Formatting

Use [pretty-quick](https://prettier.io/docs/en/precommit.html#option-2-pretty-quickhttpsgithubcomazzpretty-quick)
as a pre-commit formatting tool.

There is an automatic `pretty-quick` check that occurs pre-commit to format
your changed/staged files.

To format markdown pages, run the following in the `docs` folder:

```bash
npx pretty-quick --staged
```

To run pretty on the whole project, `npx pretty-quick`.

### Static Site Generator

The Wiki's latest version uses the [Docusaurus](https://docusaurus.io/) static website
generator to convert the Markdown docs into a documentation website.

### Search Engine

[Algolia DocSearch](https://docsearch.algolia.com/) is the search engine that is used, which
is built into Docusaurus. Indexing via Algolia provides faster lookup; the actual configuration
for lookup is located in another repository that's maintained by Algolia DocSearch.

We have enabled searching on the Wiki by declaring the `algolia` section in the `siteConfig.js`
file in `scripts`, and defining an API key and index name that are provided by DocSearch.

```js
  algolia: {
    apiKey: "53c6a4ab0d77c0755375a971c9b7cc3d",
    indexName: "axialunar_guide",
    algoliaOptions: {
      facetFilters: ["language:LANGUAGE"],
    }, // Optional, if provided by Algolia
  }
```

If you would like to access and modify this, you can re-submit the documentation url via
[DocSearch Program](https://docsearch.algolia.com/apply/), where they will send
a JavaScript snippet that you can re-integrate into the configuration, similar to the
one shown above.

### Automated Deployments

The AXIASolar wiki is built on the `gh-pages` branch and automatically deployed to GitHub Pages.
The AXIALunar wiki is also deployed to GitHub Pages (via a separate repository).

Development servers exist at `https://staging.axiacoin.network` and `https://staging.axialunar.network`.
The servers will reflect the latest `master` commit or PR put up against the master branch by a member of the Technical Education team.
The latest version of `master` is staged and checked by the team. If all is well, the new commits on `master` are transferred into the production branch,`prod`, by rebasing `master` on `prod`. The CICD production workflow will deploy `prod` to the public sites:
[AXIASolar Wiki](https://solar.wiki.axiacoin.network) and [AXIALunar Guide](https://lunar.wiki.axiacoin.network), respectively.

### Mirror Pages

A limitation of Docusaurus is that pages can only be included in one sidebar at any given time.
Thus, our AXIALunar section will either hijack some content it shares with the rest of the wiki, or
lack that content.

To solve this, the repo mirrors some pages and includes them in additional sidebars. The `scripts`
folder contains a `mirror.js` script that creates a copy of the pages to duplicate across sidebars.
The new pages are prefixed with `mirror` and first need to be declared in `mirror.js`, then added to
the relevant sidebar section. To run the script:

```bash
yarn mirror
```

> Note: This command runs automatically when using `axiasolar:start` or `axialunar:start` development
> scripts, so you don't need to worry about running it manually if you start the development site
> with one of these commands.

### Conditional Rendering

The two wikis support conditional rendering depending on which wiki is being deployed. This is
useful for mirrored pages that have most content in common, but some minor differences. To use this
functionality, surround AXIALunar specific content with {{ axialunar: :axialunar }}, and axiasolar specific
content with {{ axiasolar: :axiasolar }}. Example:

```md
If the treasury ends a budget period without spending all of its funds, it suffers a burn of a
percentage of its funds -- thereby causing deflationary pressure.
{{ axiasolar: This percentage is currently at 1%
on AXIASolar. :axiasolar }} {{ axialunar: This percentage is currently 0.2% on AXIALunar, with the amount currently going to
[Society](https://lunar.wiki.axiacoin.network/docs/en/maintain-guides-society-axialunar) rather than being
burned. :axialunar }}
```

To test the resolution, run `axiasolar:build` and `axialunar:build`, then `axiasolar:inject` and
`axialunar:inject`, respectively.
Inspect the built files in the corresponding `build` folder under `website` or
`axialunar-guide`.

## Internationalization

We are using Crowdin to manage all different translations. You can go to the
[project page](https://crowdin.com/project/axiasolar-wiki) and select the language you would like to
translate to start.  
All translated content through Crowdin will regularly submit a pull request to this repository.

If you do not see the language you would like to translate, please let us know via Riot.

## License

The AXIASolar Wiki is licensed under the [GPL-3.0](LICENSE) free software license.

<p float="center">
  <img src="docs/assets/axiasolar.gif" width="400" height="185"> 
  <img src="docs/assets/axialunar.gif" width="400" height="185"> 
</p>
