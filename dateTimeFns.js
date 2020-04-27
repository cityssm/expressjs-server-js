"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function dateToInteger(dateObj) {
    return (dateObj.getFullYear() * 10000) +
        (dateObj.getMonth() * 100) + 100 +
        dateObj.getDate();
}
exports.dateToInteger = dateToInteger;
function dateToString(dateObj) {
    return dateObj.getFullYear() + "-" +
        ("0" + (dateObj.getMonth() + 1)).slice(-2) + "-" +
        ("0" + (dateObj.getDate())).slice(-2);
}
exports.dateToString = dateToString;
function dateIntegerToString(dateInteger) {
    if (dateInteger === null || dateInteger === 0) {
        return "";
    }
    const dateString = dateInteger.toString();
    return dateString.substring(0, 4) + "-" + dateString.substring(4, 6) + "-" + dateString.substring(6, 8);
}
exports.dateIntegerToString = dateIntegerToString;
function dateStringToDate(dateString) {
    const datePieces = dateString.split("-");
    return new Date(parseInt(datePieces[0]), parseInt(datePieces[1]) - 1, parseInt(datePieces[2]), 0, 0, 0, 0);
}
exports.dateStringToDate = dateStringToDate;
function dateStringToInteger(dateString) {
    return parseInt(("0" + dateString).replace(/-/g, ""));
}
exports.dateStringToInteger = dateStringToInteger;
function dateDifferenceInDays(fromDateObj, toDateObj) {
    return Math.round((toDateObj.getTime() - fromDateObj.getTime()) / (86400 * 1000.0));
}
exports.dateDifferenceInDays = dateDifferenceInDays;
function dateStringDifferenceInDays(fromDateString, toDateString) {
    return dateDifferenceInDays(dateStringToDate(fromDateString), dateStringToDate(toDateString));
}
exports.dateStringDifferenceInDays = dateStringDifferenceInDays;
function dateToTimeInteger(dateObj) {
    return (dateObj.getHours() * 100) + dateObj.getMinutes();
}
exports.dateToTimeInteger = dateToTimeInteger;
function dateToTimeString(dateObj) {
    return ("00" + dateObj.getHours().toString()).slice(-2) +
        ":" +
        ("00" + dateObj.getMinutes().toString()).slice(-2);
}
exports.dateToTimeString = dateToTimeString;
function timeIntegerToString(timeInteger) {
    const timeString = ("0000" + (timeInteger || 0).toString()).slice(-4);
    return timeString.substring(0, 2) + ":" + timeString.substring(2, 4);
}
exports.timeIntegerToString = timeIntegerToString;
function timeStringToInteger(timeString) {
    return parseInt(("0" + timeString).replace(/:/g, ""));
}
exports.timeStringToInteger = timeStringToInteger;
