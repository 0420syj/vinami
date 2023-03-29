import type { Config } from "@jest/types";

import mariagePackage from "./apps/mariage/package.json";
import adminPackage from "./apps/admin/package.json";

const config: Config.InitialOptions = {
    verbose: true,
    projects: [
        {
            displayName: mariagePackage.name + " (unit)",
            preset: "ts-jest/presets/js-with-ts",
            testEnvironment: "node",
            testMatch: ["<rootDir>/apps/mariage/src/test/**/*.[jt]s?(x)"],
        },
        {
            displayName: adminPackage.name + " (unit)",
            preset: "ts-jest/presets/js-with-ts",
            testEnvironment: "node",
            testMatch: ["<rootDir>/apps/admin/test/**/*.[jt]s?(x)"],
        },
    ],
};

export default config;
