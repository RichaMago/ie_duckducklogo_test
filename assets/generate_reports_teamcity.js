//more info on `metadata` is available in `options` section below.
//to generate consolidated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.

const api = require("cucumber-json-to-teamcity");

const lines = api("./reports/report.json");
for (let i = 0; i < lines.length; ++i) {
 console.log(lines[i]);
}