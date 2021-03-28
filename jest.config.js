module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setup-tests.js"],
  moduleNameMapper: {
    "^.+\\.(s[ac]ss)$": "identity-obj-proxy",
    "^.+\\.png$": "<rootDir>/src/__mocks__/fileMock.js",
  },
};
