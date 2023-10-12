const fs = require("fs");
const path = require("path");
const chai = require("chai");
const CSSOM = require("cssom");
chai.use(require("chai-dom"));
const { expect } = chai;

// const cssFile = fs.readFileSync(
//   path.resolve(__dirname, "../css/style.css"),
//   "utf-8"
// );
