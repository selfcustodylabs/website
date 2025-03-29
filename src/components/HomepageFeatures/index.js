import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Grid from "@mui/material/Grid";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Be Your Own Bank",
    //link: "",
    Svg: require("@site/static/img/home-bitcoin.svg").default,
    description: (
      <>
        Take full control of your Bitcoin with self custody secure, independent, and censorship-resistant.
      </>
    ),
  },
  {
    title: "Create Your Own Seed",
    link: "/docs/seed",
    Svg: require("@site/static/img/home-dice.svg")
      .default,
    description: (
      <>
        Generate your own entropy securely to derive your 24-word seed before setting up Bitcoin self-custody.
      </>
    ),
  },
  {
    title: "Run Your Own Node",
    //link: "",
    Svg: require("@site/static/img/home-node.svg").default,
    description: (
      <>
        Secure your sovereignty by verifying your own transactions, enhancing privacy, and taking full control of your Bitcoin custody.
      </>
    ),
  },
  {
    title: "Secure Your Laptop",
    Svg: require("@site/static/img/home-laptop.svg")
      .default,
    description: (
      <>
        Protect your data, enhance privacy, and defend against threats with strong security practices.
      </>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {FeatureList.map((props, idx) => (
        <Grid key={idx} xs={12} sm={10} md={6}>
          <Feature key={idx} {...props} />
        </Grid>
      ))}
    </>
  );
}
