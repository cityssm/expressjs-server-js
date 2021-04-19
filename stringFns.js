import { generatePassword as spgGeneratePassword } from "@cityssm/simple-password-generator";
import { convertArrayToCSV } from "convert-array-to-csv";
export const rawToCSV = (rowsColumnsObj) => {
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
