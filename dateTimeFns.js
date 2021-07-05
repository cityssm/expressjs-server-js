import { dateDiff } from "@cityssm/date-diff";
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
export const dateToInteger = (dateObject) => {
    return (dateObject.getFullYear() * 10000) +
        (dateObject.getMonth() * 100) + 100 +
        dateObject.getDate();
};
export const dateToString = (dateObject) => {
    return dateObject.getFullYear().toString() + "-" +
        ("0" + (dateObject.getMonth() + 1).toString()).slice(-2) + "-" +
        ("0" + dateObject.getDate().toString()).slice(-2);
};
export function dateIntegerToString(dateInteger) {
    if (dateInteger === null || dateInteger === 0) {
        return "";
    }
    const dateString = dateInteger.toString();
    return dateString.slice(0, 4) + "-" + dateString.slice(4, 6) + "-" + dateString.slice(6, 8);
}
export function dateIntegerToDate(dateInteger) {
    if (dateInteger === null || dateInteger === 0) {
        return undefined;
    }
    const dateString = dateInteger.toString();
    return new Date(Number.parseInt(dateString.slice(0, 4), 10), Number.parseInt(dateString.slice(4, 6), 10) - 1, Number.parseInt(dateString.slice(6, 8), 10));
}
export const dateStringToDate = (dateString) => {
    const datePieces = dateString.split("-");
    return new Date(Number.parseInt(datePieces[0], 10), Number.parseInt(datePieces[1], 10) - 1, Number.parseInt(datePieces[2], 10), 0, 0, 0, 0);
};
export const dateStringToInteger = (dateString) => {
    return Number.parseInt(("0" + dateString).replace(/-/g, ""), 10);
};
export const dateDifferenceInDays = (fromDateObject, toDateObject) => {
    return Math.round(dateDiff(fromDateObject, toDateObject).inDays);
};
export const dateStringDifferenceInDays = (fromDateString, toDateString) => {
    return dateDifferenceInDays(dateStringToDate(fromDateString), dateStringToDate(toDateString));
};
export const dateToTimeInteger = (dateObject) => {
    return (dateObject.getHours() * 100) + dateObject.getMinutes();
};
export const dateToTimeString = (dateObject) => {
    return ("00" + dateObject.getHours().toString()).slice(-2) +
        ":" +
        ("00" + dateObject.getMinutes().toString()).slice(-2);
};
export const timeIntegerToString = (timeInteger) => {
    const timeString = ("0000" + (timeInteger || 0).toString()).slice(-4);
    return timeString.slice(0, 2) + ":" + timeString.slice(2, 4);
};
export const timeStringToInteger = (timeString) => {
    return Number.parseInt(("0" + timeString).replace(/:/g, ""), 10);
};
