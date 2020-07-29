"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUID = exports.generatePassword = exports.escapeHTML = exports.rawToCSV = void 0;
const goodWords = require("fresh-password/lib/words/good.json");
const badWords = require("fresh-password/lib/words/bad.json");
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
const randomInt = (low, high) => {
    return Math.floor(Math.random() * (high - low + 1) + low);
};
exports.generatePassword = () => {
    const r1 = randomInt(0, goodWords.length);
    const r2 = randomInt(0, goodWords.length);
    const r3 = randomInt(0, 9);
    const r4 = randomInt(0, 9);
    const firstWord = goodWords[r1];
    const secondWord = goodWords[r2];
    const password = `${firstWord}${secondWord[0].toUpperCase()}${secondWord.substring(1)}${r3}${r4}`;
    const passwordLowerCase = password.toLowerCase();
    for (const badWord of badWords) {
        if (passwordLowerCase.includes(badWord)) {
            return exports.generatePassword();
        }
    }
    return password;
};
let uid = Date.now();
exports.getUID = () => {
    const toReturn = uid;
    uid += 1;
    return "uid" + toReturn.toString();
};
