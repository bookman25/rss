const createCacheKeyFunction = require("fbjs-scripts/jest/createCacheKeyFunction");
const fs = require("fs");
const nodepath = require("path");
const tsc = require("typescript");

module.exports = {
    process(src, path) {
        src = src.replace(/((import.*)|(.*require\()|(unmock\()|(mock\())["'](.*)["']/g,
            (fullPattern, leftSide, importSide, requireSide, unmockSide, mockSide, rightSide) => leftSide + "\"" + updatePath(path, rightSide) + "\"");
        const transpiled = tsc.transpileModule(
            src,
            {
                compilerOptions: {
                    module: tsc.ModuleKind.CommonJS,
                    jsx: tsc.JsxEmit.React,
                    noEmitHelpers: true
                },
                fileName: path
            }
        );
        return `require('ts-jest').install({environment: 'node', emptyCacheBetweenOperations: true});${transpiled.outputText}`;
    },
    getCacheKey: createCacheKeyFunction([__filename])
};

function updatePath(currentFile, pathToUpdate) {
    if (pathToUpdate.indexOf("./") === 0 || pathToUpdate.indexOf("../") === 0) {
        return pathToUpdate;
    }
    try {
        require.resolve(pathToUpdate);
        return pathToUpdate;
    } catch (e) {
        pathToUpdate = nodepath.join(process.cwd(), pathToUpdate);
        return nodepath.relative(currentFile, pathToUpdate).replace(/\\/g, "\\\\");
    }
}