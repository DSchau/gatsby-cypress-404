if (!process.env.GATSBY_SUPPORTED_LOCALES) {
  const dotenv = require("dotenv");
  dotenv.config();
  dotenv.config({ path: `${__dirname}/.env.development` });
}

const { NODE_ENV } = process.env;

const proxy = require("http-proxy-middleware");

const polyfillFeatures = [
  "default",
  "fetch",
  "Array.prototype.find",
  "Array.prototype.includes",
  "String.prototype.includes",
  "Object.prototype.entries",
  "WeakMap"
];

module.exports = {
  siteMetadata: {
    siteUrl: "https://localhost"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-polyfill-io",
      options: {
        features: polyfillFeatures
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/netlify-sitemap.xml",
        exclude: ["/preview", "/*/preview", "/*/*/preview"]
      }
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: { displayName: NODE_ENV !== "production" }
    }
  ]
};
