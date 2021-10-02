if (process.argv.length === 2) {
  console.log("please provide a stat string to parse");
  process.exit();
}

const inString = string(process.argv[2]);
const otherStuff = string(process.argv[3]);

console.log(`instring: ${inString}`);
console.log(`otherstuff: ${otherStuff}`);
