const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  rootDir: "./",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "^@/styles/(.*)$": "<rootDir>/styles/$1",
    "^@/types": "<rootDir>/src/types.d.ts",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
