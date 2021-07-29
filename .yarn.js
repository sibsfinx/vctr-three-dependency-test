// .yarn config for node packages (apis) to enable esm

"use strict";
require("./.yarn/releases/yarn-2.4.2.cjs");

const REQUIRE_ESM = "--require esm";

if ((typeof process.env.NODE_OPTIONS === "string") && !process.env.NODE_OPTIONS.includes(REQUIRE_ESM)) {
  process.env.NODE_OPTIONS = process.env.NODE_OPTIONS + REQUIRE_ESM;
} else {
  process.env.NODE_OPTIONS = REQUIRE_ESM;
}

// console.log("Running .yarn.js in monorepo root with process.env.NODE_OPTIONS=\"" + process.env.NODE_OPTIONS + "\"");
