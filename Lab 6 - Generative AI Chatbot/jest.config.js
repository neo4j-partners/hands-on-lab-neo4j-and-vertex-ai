// jest.config.js
module.exports = {
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transformIgnorePatterns: ["/node_modules/"],
};