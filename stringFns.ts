import { RawRowsColumnsReturn } from "./types";

import { generatePassword as spgGeneratePassword } from "@cityssm/simple-password-generator";

import { convertArrayToCSV } from "convert-array-to-csv";

import phoneNumberJS from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";


export const rawToCSV = (rowsColumnsObject: RawRowsColumnsReturn): string => {

  const columnNames = [];

  for (const columnDefinition of rowsColumnsObject.columns) {
    columnNames.push(columnDefinition.name);
  }

  const csv = convertArrayToCSV(rowsColumnsObject.rows, {
    header: columnNames,
    separator: ","
  });

  return csv;
};


/*
 * PASSWORD GENERATION
 */

export const generatePassword = (): string => {
  return spgGeneratePassword({
    pattern: "wWnn"
  });
};

/*
 * UID GENERATOR
 */

let uid = Date.now();

export const getUID = (): string => {
  const toReturn = uid;
  uid += 1;
  return "uid" + toReturn.toString();
};

/*
 * PHONE NUMBER FORMATTING
 */

let phoneNumberCountryCode: CountryCode = "CA";

export const setPhoneNumberCountryCode = (countryCode: CountryCode): void => {
  phoneNumberCountryCode = countryCode;
};

export const formatPhoneNumber = (unformattedPhoneNumber: string, countryCode = phoneNumberCountryCode): string => {
  return phoneNumberJS(unformattedPhoneNumber, countryCode).formatNational();
};
