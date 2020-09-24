/// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

const ts = require("typescript");

ts.createProgram({
  rootNames: ["schema.ts"],
  options: {
    target: ts.ScriptTarget.ES2019,
    module: ts.ModuleKind.CommonJS,
    lib: ["ES2020", "DOM"],
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    newLine: ts.NewLineKind.LineFeed,
    outDir: "schemaJs",
    strict: true,
  },
}).emit();

require("./schemaJs/schema.js");
