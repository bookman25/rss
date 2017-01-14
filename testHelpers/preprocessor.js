const createCacheKeyFunction = require("fbjs-scripts/jest/createCacheKeyFunction");
const tsc = require("typescript");

module.exports = {
    process(src, path) {
        const transpiled = tsc.transpileModule(
            src,
            {
                compilerOptions: {
                    module: tsc.ModuleKind.CommonJS,
                    jsx: tsc.JsxEmit.React,
                    noEmitHelpers: true,
                    importHelpers: true
                },
                fileName: path
            }
        );
        return `require('ts-jest').install({environment: 'node', emptyCacheBetweenOperations: true});${transpiled.outputText}`;
    },
    getCacheKey: createCacheKeyFunction([__filename])
};
