const React = require("react");

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function HomeSplash() {
  const SplashContainer = (props) => (
    <div className="axialunarHomeContainer">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  );

  return (
    <SplashContainer>
      <div className="inner">
        <img
          src={require("@site/static/img/AXIALunar_header_pink.png").default}
          style={{ width: "100%" }}
        />
      </div>
    </SplashContainer>
  );
}

export default function Index() {
  const { siteConfig } = useDocusaurusContext();

  const { baseUrl } = siteConfig;
  const docsPart = "docs/";
  const docUrl = (doc) => `${baseUrl}${docsPart}${doc}`;
  return (
    <Layout title={siteConfig.tagline}>
      <div>
        <div className="mainpage-row-placeholder" style={{ width: "100%" }} />
        <HomeSplash siteConfig={siteConfig} />
        <div className="mainpage-row-placeholder" />
        <div className="mainContainer" style={{ padding: "0" }}>
          <div className="axialunar-mainpage-row-learn">
            <p className="axialunar-full-width-main homepage-font">
              AXIALunar is an early, unaudited and unrefined release of AXIASolar.
              AXIALunar will serve as a proving ground, allowing teams and
              developers to build and deploy a parachain or try out AXIASolar’s
              governance, staking, nomination and validation functionality in a
              real environment.
            </p>
          </div>
          <div className="mainpage-row-placeholder" />
          <div className="axialunar-mainpage-row">
            <h1 className="axialunar-full-width homepage-font">
              What can you do with AXIALunar?
            </h1>
          </div>
          <div className="axialunar-mainpage-row-validator">
            <div className="mainpage-column">
              <h2 className="homepage-font">Become a Validator</h2>
            </div>
            <div className="mainpage-column">
              <p className="homepage-font">
                The minimum requirement for staking as a validator on AXIALunar is
                much lower than it is expected for AXIASolar. There are also
                programs in place such as{" "}
                <a
                  href="https://axiasolar.network/join-axialunars-thousand-validators-programme/"
                  target="_blank"
                >
                  Thousand Validators
                </a>{" "}
                to help community validators rise the ranks.
              </p>
              <a href={docUrl("mirror-maintain-guides-how-to-validate-axialunar")}>
                <button className="axialunar-mainpage-build-btn homepage-font">
                  Read more on Validators
                </button>
              </a>
            </div>
          </div>
          <div className="axialunar-mainpage-row-more">
            <div className="mainpage-column">
              <h2 className="homepage-font">Deploy Parachains</h2>
              <p className="homepage-font">
                AXIALunar will get the functionality required for parachains before
                AXIASolar. This includes participating in a parachain slot
                auction and composable applications.
              </p>
              <a href={docUrl("mirror-learn-parachains")}>
                <button className="axialunar-mainpage-build-btn homepage-font">
                  Read more on Parachains
                </button>
              </a>
            </div>
            <div className="mainpage-column">
              <h2 className="homepage-font">Explore the politics</h2>
              <p className="homepage-font">
                Campaign as a councillor or vote for new runtime proposals using
                Democracy.
              </p>
              <a href={docUrl("mirror-learn-governance")}>
                <button className="axialunar-mainpage-build-btn homepage-font">
                  Read more on Politics
                </button>
              </a>
            </div>
          </div>
          <div className="axialunar-mainpage-cyber-row">
            <div className="axialunar-mainpage-column">
              <h2 className="homepage-font">Join a cyber secret society</h2>
              <p className="homepage-font">
                The Kappa Sigma Mu fraternity asks you to get a AXIALunar tattoo to
                join.
              </p>
              <a href={docUrl("maintain-guides-society-axialunar")}>
                <button className="axialunar-mainpage-build-btn homepage-font">
                  See Kappa Sigma Mu
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
