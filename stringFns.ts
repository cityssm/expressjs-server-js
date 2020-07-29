import { RawRowsColumnsReturn } from "./types";

import * as goodWords from "fresh-password/lib/words/good.json";
import * as badWords from "fresh-password/lib/words/bad.json";

import { convertArrayToCSV } from "convert-array-to-csv";


export const rawToCSV = (rowsColumnsObj: RawRowsColumnsReturn): string => {

  const columnNames = [];

  for (const columnDefinition of rowsColumnsObj.columns) {
    columnNames.push(columnDefinition.name);
  }

  const csv = convertArrayToCSV(rowsColumnsObj.rows, {
    header: columnNames,
    separator: ","
  });

  return csv;

};


export const escapeHTML = (str: string) => {

  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};


/*
 * PASSWORD GENERATION
 */

const randomInt = (low: number, high: number) => {
  return Math.floor(Math.random() * (high - low + 1) + low);
};

export const generatePassword = () => {

  // Generate 4 random numbers
  const r1 = randomInt(0, goodWords.length);
  const r2 = randomInt(0, goodWords.length);
  const r3 = randomInt(0, 9);
  const r4 = randomInt(0, 9);

  // Pick first and second words
  const firstWord = goodWords[r1];
  const secondWord = goodWords[r2];

  // Generate combined password
  const password = `${firstWord}${secondWord[0].toUpperCase()}${secondWord.substring(1)}${r3}${r4}`;

  const passwordLowerCase = password.toLowerCase();

  // Check to see if the combination creates any "offensive" words
  for (const badWord of badWords) {
    if (passwordLowerCase.includes(badWord)) {
      // If so, recursively regenerate
      return generatePassword();
    }
  }

  // Return the final password
  return password;
};

/*
 * UID GENERATOR
 */

let uid = Date.now();

export const getUID = () => {
  const toReturn = uid;
  uid += 1;
  return "uid" + toReturn.toString();
};
