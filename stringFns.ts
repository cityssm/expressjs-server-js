import { RawRowsColumnsReturn } from "./types";

import { generatePassword as spgGeneratePassword } from "@cityssm/simple-password-generator";

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

export const generatePassword = () => {
  return spgGeneratePassword({
    pattern: "wWnn"
  });
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
