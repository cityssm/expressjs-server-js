import { generatePassword as spgGeneratePassword } from "@cityssm/simple-password-generator";
import { convertArrayToCSV } from "convert-array-to-csv";
import phoneNumberJS from "libphonenumber-js";
export const rawToCSV = (rowsColumnsObject) => {
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
export const generatePassword = () => {
    return spgGeneratePassword({
        pattern: "wWnn"
    });
};
let uid = Date.now();
export const getUID = () => {
    const toReturn = uid;
    uid += 1;
    return "uid" + toReturn.toString();
};
let phoneNumberCountryCode = "CA";
export const setPhoneNumberCountryCode = (countryCode) => {
    phoneNumberCountryCode = countryCode;
};
export const formatPhoneNumber = (unformattedPhoneNumber, countryCode = phoneNumberCountryCode) => {
    return phoneNumberJS(unformattedPhoneNumber, countryCode).formatNational();
};
