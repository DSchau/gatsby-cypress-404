// this file configures some globals and polyfills for unit tests

global.___loader = {
  enqueue: jest.fn()
};

window.matchMedia =
  window.matchMedia ||
  (() => {
    return { matches: false, addListener: () => {}, removeListener: () => {} };
  });

process.env.GATSBY_DEFAULT_LOCALE = "en-JP";
process.env.GATSBY_SUPPORTED_LOCALES = "en-JP";
