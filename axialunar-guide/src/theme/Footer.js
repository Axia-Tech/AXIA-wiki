/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Footer() {
  const { siteConfig } = useDocusaurusContext();

  const docUrl = (url) => `${siteConfig.baseUrl}docs/${url}`;

  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <a href={siteConfig.baseUrl} className="nav-home">
          <img
            src={siteConfig.baseUrl + siteConfig.themeConfig.footer.logo.src}
            alt={siteConfig.title}
            width="66"
            height="58"
          />
        </a>
        <div>
          <p className="homepage-font">
            AXIALunar is an experimental <br />
            community research and
            <br /> development network.
          </p>
          <a
            href={docUrl("axialunar-index")}
            target="_blank"
            className="homepage-font"
          >
            Docs
          </a>
          <a
            href="https://axialunar.network/"
            target="_blank"
            className="homepage-font"
          >
            AXIALunar Network
          </a>
          <a
            href="https://twitter.com/axialunarnetwork"
            target="_blank"
            rel="noreferrer noopener"
            className="homepage-font"
          >
            Twitter
          </a>
          <a
            href="https://matrix.to/#/!HfRYKXBoPmDBCAWUEJ:AXIA.builders"
            target="_blank"
            rel="noreferrer noopener"
            className="homepage-font"
          >
            AXIALunar Watercooler (Element Chat)
          </a>
        </div>
        <a href="/axialunar-wiki.zip" target="_blank" rel="noreferrer noopener">
          Download this Guide as PDF
        </a>
      </section>

      <section className="row">
        <div className="copyright homepage-font">
          {siteConfig.themeConfig.footer.copyright}
        </div>
        <a
          className="item homepage-font"
          href="https://AXIA.network/privacy/"
        >
          Privacy Policy
        </a>
      </section>
    </footer>
  );
}
