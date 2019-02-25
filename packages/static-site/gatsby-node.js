const supportedLocales = process.env.GATSBY_SUPPORTED_LOCALES.split(",");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.includes("404")) return;

  for (const locale of supportedLocales) {
    createPage({
      ...page,
      path: "/" + locale.toLowerCase() + page.path,
      context: { locale }
    });
  }
  deletePage(page);
};

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        "process.env.ENVIRONMENT": JSON.stringify(
          process.env.ENVIRONMENT || "development"
        )
      })
    ]
  });
};
