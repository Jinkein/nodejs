const {readFileSync,writeFileSync} = require("fs");
// This is another way to declare readFileSync
    // const fs = require("fs");
    // fs.readFileSync
const first = readFileSync("./content/first.txt","utf8");
const second = readFileSync("./content/second.txt","utf8");

writeFileSync("./content/result-sync.txt",`Hello world. This is new file.
Content of first file: ${first}.
Content of second file: ${second}`,{flag: "a"});
// console.log(first, second);