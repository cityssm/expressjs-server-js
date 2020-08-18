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


/*
 * Date Functions
 */


// From Date Object

export function dateToInteger(dateObj: Date): number {

  return (dateObj.getFullYear() * 10000) +
    (dateObj.getMonth() * 100) + 100 +
    dateObj.getDate();

}

export function dateToString(dateObj: Date): string {

  return dateObj.getFullYear().toString() + "-" +
    ("0" + (dateObj.getMonth() + 1).toString()).slice(-2) + "-" +
    ("0" + dateObj.getDate().toString()).slice(-2);

}

// From Date Integer
// 20200425

export function dateIntegerToString(dateInteger: number): string {

  if (dateInteger === null || dateInteger === 0) {
    return "";
  }

  const dateString = dateInteger.toString();
  return dateString.substring(0, 4) + "-" + dateString.substring(4, 6) + "-" + dateString.substring(6, 8);

}

// From Date String
// "2020-04-25"

export function dateStringToDate(dateString: string) {

  const datePieces = dateString.split("-");
  return new Date(parseInt(datePieces[0], 10), parseInt(datePieces[1], 10) - 1, parseInt(datePieces[2], 10), 0, 0, 0, 0);
}

export function dateStringToInteger(dateString: string): number {

  return parseInt(("0" + dateString).replace(/-/g, ""), 10);

}


export function dateDifferenceInDays(fromDateObj: Date, toDateObj: Date) {

  return Math.round((toDateObj.getTime() - fromDateObj.getTime()) / (86400 * 1000.0));
}

export function dateStringDifferenceInDays(fromDateString: string, toDateString: string) {

  return dateDifferenceInDays(dateStringToDate(fromDateString), dateStringToDate(toDateString));
}


/*
 * Time Functions
 */

// From Date Object

export function dateToTimeInteger(dateObj: Date): number {
  return (dateObj.getHours() * 100) + dateObj.getMinutes();
}

export function dateToTimeString(dateObj: Date): string {
  return ("00" + dateObj.getHours().toString()).slice(-2) +
    ":" +
    ("00" + dateObj.getMinutes().toString()).slice(-2);
}

// From Time Integer
// 1424

export function timeIntegerToString(timeInteger: number): string {

  const timeString = ("0000" + (timeInteger || 0).toString()).slice(-4);
  return timeString.substring(0, 2) + ":" + timeString.substring(2, 4);

}

// From Time String
// "14:24"

export function timeStringToInteger(timeString: string): number {

  return parseInt(("0" + timeString).replace(/:/g, ""), 10);

}
