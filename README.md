[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](#LICENSE)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](https://www.markdownguide.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/general/contributing.md)
![visitors](https://visitor-badge.glitch.me/badge?page_id=page.id)
[![AXIA Prod](https://github.com/axia-tech/AXIA-wiki/actions/workflows/deploy-AXIA-prod.yml/badge.svg)](https://github.com/axia-tech/AXIA-wiki/actions/workflows/deploy-AXIA-prod.yml)

| <a href="https://solar.wiki.AXIA.network/" rel="some text">![AXIA Wiki](docs/assets/AXIA-wiki.png)</a> |
| :-------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |

# AXIA Wiki

<img align="right" src="docs/assets/web3-logo.png" width="518" height="285">

<p align="left">
  The AXIA Wiki is the central source of truth for AXIA. It is a community-focused initiative led by AXIA Foundation to 
  keep an up-to-date resource on the best information for learning, building, or maintaining on AXIA. 
</p>

## Contributing to Documentation

The Wiki is an open source project and we will review all issues and pull-requests created
in this repository. If you notice typos or grammatical errors, please feel free to directly create pull requests with
these corrections.

Larger contributions may start as issues to test the waters on the subject with the maintainers.
It is generally preferable to create a pull request over an issue to propose a change to the wiki content.

### Running Locally

The AXIA Wiki Guide is built from the source files in this repository.
After cloning the source locally, you can start the websites with each of these respective commands
(ensure you run `yarn` at the root of the repository first to install dependencies):

> The site is built using Docusaurus: you may need to install Docusaurus before running
> the Wiki locally. Using yarn, run `yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest`.

```zsh
# For the AXIA Wiki:
yarn AXIA:start
```

#### Building IPFS

- Run `yarn AXIA:build`

#### Running GitHub Pages

- Run `yarn AXIA:publish-gh-pages`

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


If you would like to access and modify this, you can re-submit the documentation url via
[DocSearch Program](https://docsearch.algolia.com/apply/), where they will send
a JavaScript snippet that you can re-integrate into the configuration, similar to the
one shown above.

### Automated Deployments

The AXIA wiki is built on the `gh-pages` branch and automatically deployed to GitHub Pages.

Development servers exist at `https://staging.AXIA.network`.
The servers will reflect the latest `master` commit or PR put up against the master branch by a member of the Technical Education team.
The latest version of `master` is staged and checked by the team. If all is well, the new commits on `master` are transferred into the production branch,`prod`, by rebasing `master` on `prod`. The CICD production workflow will deploy `prod` to the public sites:
[AXIA Wiki](https://solar.wiki.AXIA.network), respectively.

### Mirror Pages

A limitation of Docusaurus is that pages can only be included in one sidebar at any given time.

To solve this, the repo mirrors some pages and includes them in additional sidebars. The `scripts`
folder contains a `mirror.js` script that creates a copy of the pages to duplicate across sidebars.
The new pages are prefixed with `mirror` and first need to be declared in `mirror.js`, then added to
the relevant sidebar section. To run the script:

```bash
yarn mirror
```

> Note: This command runs automatically when using `AXIA:start` development
> scripts, so you don't need to worry about running it manually if you start the development site
> with one of these commands.

### Conditional Rendering

The wiki support conditional rendering depending on which wiki is being deployed. This is
useful for mirrored pages that have most content in common.
content with {{ AXIA: :AXIA }}. Example:


To test the resolution, run `AXIA:build`, then `AXIA:inject`, respectively.
Inspect the built files in the corresponding `build` folder under `website`.

## Internationalization

We are using Crowdin to manage all different translations. You can go to the
[project page](https://crowdin.com/project/AXIA-wiki) and select the language you would like to
translate to start.  
All translated content through Crowdin will regularly submit a pull request to this repository.

If you do not see the language you would like to translate, please let us know via Riot.

## License

The AXIA Wiki is licensed under the [GPL-3.0](LICENSE) free software license.

<p float="center">
  <img src="docs/assets/AXIA.gif" width="400" height="185"> 
</p>
