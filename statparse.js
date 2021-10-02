#!/usr/bin/env node

if (process.argv.length === 2) {
  console.log("please provide a stat string to parse");
  process.exit();
}

const inString = process.argv[2];

console.log(inString);

/*
priority list for parsing:
repeating Nof() times
separating categories into individual formulae
running individual formulae
*/

if (inString.includes("of")) {
  const [multiplier, parseString] = inString.split("of");
  const parsedClean = parseString.slice(1, -1);
  parses = parsedClean.split(",");
  for (let i = 0; i < multiplier; i++) {
    let ret = "";
    parses.map((parse) => {
      let parsed = parseSingle(parse);
      let stackableParsed = parsed + " ";
      ret += stackableParsed;
    });
    console.log(ret);
  }
} else {
  console.log(parseSingle(inString.trim()));
}

function parseSingle(parse) {
  let parseString = parse.trim();
  let operator;
  let top;
  let output;

  if (!parseString.includes("d")) {
    return parseString;
  }

  if (parseString.includes("t")) {
    [parseString, top] = parseString.split("t");
  }

  if (parseString.includes("+")) {
    [parseString, operator] = parseString.split("+");
  }

  let [numberOf, sides] = parseString.split("d");

  return !operator
    ? dieRoll(numberOf, sides, top)
    : dieRoll(numberOf, sides, top) + Number(operator);
}

function dieRoll(numberOf, sides, top = 0) {
  let rolls = [];
  for (let i = 0; i < numberOf; i++) {
    rolls.push(Math.floor(Math.random() * sides + 1));
  }
  // console.log(`allRolls: ${rolls}`);
  rolls = rolls.sort((a, b) => {
    return b - a;
  });
  if (top > 0) {
    rolls = rolls.slice(0, top);
  }
  // console.log(`rolls: ${rolls}`);
  return rolls.reduce((prev, cur) => {
    return prev + cur;
  });
}
