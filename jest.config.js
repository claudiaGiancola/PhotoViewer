export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },

    globals: {
        "ts-jest": {
            "tsconfig": "tsconfig.node.json"
        }
    },

    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
    },

    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};