export const months = [
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
export const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
export function dateToInteger(dateObj) {
    return (dateObj.getFullYear() * 10000) +
        (dateObj.getMonth() * 100) + 100 +
        dateObj.getDate();
}
export function dateToString(dateObj) {
    return dateObj.getFullYear().toString() + "-" +
        ("0" + (dateObj.getMonth() + 1).toString()).slice(-2) + "-" +
        ("0" + dateObj.getDate().toString()).slice(-2);
}
export function dateIntegerToString(dateInteger) {
    if (dateInteger === null || dateInteger === 0) {
        return "";
    }
    const dateString = dateInteger.toString();
    return dateString.substring(0, 4) + "-" + dateString.substring(4, 6) + "-" + dateString.substring(6, 8);
}
export function dateIntegerToDate(dateInteger) {
    if (dateInteger === null || dateInteger === 0) {
        return null;
    }
    const dateString = dateInteger.toString();
    return new Date(parseInt(dateString.substring(0, 4), 10), parseInt(dateString.substring(4, 6), 10) - 1, parseInt(dateString.substring(6, 8), 10));
}
export function dateStringToDate(dateString) {
    const datePieces = dateString.split("-");
    return new Date(parseInt(datePieces[0], 10), parseInt(datePieces[1], 10) - 1, parseInt(datePieces[2], 10), 0, 0, 0, 0);
}
export function dateStringToInteger(dateString) {
    return parseInt(("0" + dateString).replace(/-/g, ""), 10);
}
export function dateDifferenceInDays(fromDateObj, toDateObj) {
    return Math.round((toDateObj.getTime() - fromDateObj.getTime()) / (86400 * 1000.0));
}
export function dateStringDifferenceInDays(fromDateString, toDateString) {
    return dateDifferenceInDays(dateStringToDate(fromDateString), dateStringToDate(toDateString));
}
export function dateToTimeInteger(dateObj) {
    return (dateObj.getHours() * 100) + dateObj.getMinutes();
}
export function dateToTimeString(dateObj) {
    return ("00" + dateObj.getHours().toString()).slice(-2) +
        ":" +
        ("00" + dateObj.getMinutes().toString()).slice(-2);
}
export function timeIntegerToString(timeInteger) {
    const timeString = ("0000" + (timeInteger || 0).toString()).slice(-4);
    return timeString.substring(0, 2) + ":" + timeString.substring(2, 4);
}
export function timeStringToInteger(timeString) {
    return parseInt(("0" + timeString).replace(/:/g, ""), 10);
}
