import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const authors = [
  {
    title: "Tanay Pratap",
    imageUrl: "img/tanay_pratap_dp.jpg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam.
      </>
    ),
  },
  {
    title: "Dr. Satyendra N Rai",
    imageUrl: "img/satyam_sir_dp.jpg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam.
      </>
    ),
  },
  {
    title: "Tanvi Priya",
    imageUrl: "img/tanvi_priya_dp.jpg",
    subtitle: "editor",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam.
      </>
    ),
  },
];

const features = [
  {
    title: "Complete what you start",
    imageUrl: "img/undraw_project_completed.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam.
      </>
    ),
  },
  {
    title: "Unlock the keys to productivity",
    imageUrl: "img/undraw_road_to_knowledge.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam.
      </>
    ),
  },
  {
    title: "Win in Life",
    imageUrl: "img/undraw_winners.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx(styles.feature, "text--center", "col col--4")}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={clsx(styles.featureImage)}
            src={imgUrl}
            alt={title}
            style={{}}
          />
        </div>
      )}
      <h3 style={{ paddingTop: "1.5rem" }}> {title} </h3>
      <p style={{ textAlign: "justify" }}> {description} </p>
    </div>
  );
}

function TeamMate({ imageUrl, title, description, subtitle }) {
  return (
    <div className="col col--4 " style={{ padding: "3rem" }}>
      <div className="card shadow--lw">
        <div className={clsx("card__image")}>
          <img src={imageUrl} alt={title} title={title} />
        </div>
        <div className="card__body">
          <h4>{title}</h4>
          <h5>{subtitle || "author"}</h5>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Read ${siteConfig.title}`}
      description="the free ebook on productivity :)"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title"> {siteConfig.title} </h1>
          <p className="hero__subtitle"> {siteConfig.tagline} </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("book/")}
            >
              Start Reading
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <hr />
        <section className={styles.features}>
          <div className="container">
            <div
              className="row"
              style={{ justifyContent: "center", padding: "1rem" }}
            >
              <h2 className="hero__title"> the team </h2>
            </div>
            <div className="row">
              <TeamMate {...authors[0]} />
              <TeamMate {...authors[1]} />
              <TeamMate {...authors[2]} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
