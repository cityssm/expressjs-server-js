"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const goodWords = require("fresh-password/lib/words/good.json");
const badWords = require("fresh-password/lib/words/bad.json");
const convert_array_to_csv_1 = require("convert-array-to-csv");
function rawToCSV(rowsColumnsObj) {
    const columnNames = new Array(rowsColumnsObj.columns.length);
    for (let columnIndex = 0; columnIndex < rowsColumnsObj.columns.length; columnIndex += 1) {
        columnNames[columnIndex] = rowsColumnsObj.columns[columnIndex].name;
    }
    const csv = convert_array_to_csv_1.convertArrayToCSV(rowsColumnsObj.rows, {
        header: columnNames,
        separator: ","
    });
    return csv;
}
exports.rawToCSV = rawToCSV;
function generatePassword() {
    let r1 = randomInt(0, goodWords.length);
    let r2 = randomInt(0, goodWords.length);
    let r3 = randomInt(0, 9);
    let r4 = randomInt(0, 9);
    let firstWord = goodWords[r1];
    let secondWord = goodWords[r2];
    let password = `${firstWord}${secondWord[0].toUpperCase()}${secondWord.substring(1)}${r3}${r4}`;
    let passwordLowerCase = password.toLowerCase();
    for (let i = 0; i < badWords.length; i++) {
        if (passwordLowerCase.indexOf(badWords[i]) > -1) {
            password = generatePassword();
        }
    }
    return password;
}
exports.generatePassword = generatePassword;
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let uid = Date.now();
function getUID() {
    const toReturn = uid;
    uid += 1;
    return "uid" + toReturn.toString();
}
exports.getUID = getUID;
