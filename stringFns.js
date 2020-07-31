"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUID = exports.generatePassword = exports.escapeHTML = exports.rawToCSV = void 0;
const simple_password_generator_1 = require("@cityssm/simple-password-generator");
const convert_array_to_csv_1 = require("convert-array-to-csv");
exports.rawToCSV = (rowsColumnsObj) => {
    const columnNames = [];
    for (const columnDefinition of rowsColumnsObj.columns) {
        columnNames.push(columnDefinition.name);
    }
    const csv = convert_array_to_csv_1.convertArrayToCSV(rowsColumnsObj.rows, {
        header: columnNames,
        separator: ","
    });
    return csv;
};
exports.escapeHTML = (str) => {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
};
exports.generatePassword = () => {
    return simple_password_generator_1.generatePassword({
        pattern: "wWnn"
    });
};
let uid = Date.now();
exports.getUID = () => {
    const toReturn = uid;
    uid += 1;
    return "uid" + toReturn.toString();
};
