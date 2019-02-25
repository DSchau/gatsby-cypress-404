module.exports = {
  transform: { "^.+\\.js$": "<rootDir>/jest-preprocess.js" },
  moduleNameMapper: {
    ".+\\.css$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|svg|ico)$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: ["node_modules", ".cache"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  setupFiles: ["<rootDir>/loadershim.js"]
};
