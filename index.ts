import * as dateTimeFns from "./dateTimeFns";

const currentDate = new Date();

console.log("Current Date: " + currentDate);
console.log("\n");
console.log("dateToInteger() -> " + dateTimeFns.dateToInteger(currentDate));
console.log("dateToString()  -> " + dateTimeFns.dateToString(currentDate));
console.log("dateStringToDate(dateToString())  -> " + dateTimeFns.dateStringToDate(dateTimeFns.dateToString(currentDate)));
console.log("\n");
console.log("dateToTimeInteger() -> " + dateTimeFns.dateToTimeInteger(currentDate));
console.log("dateToTimeString()  -> " + dateTimeFns.dateToTimeString(currentDate));
console.log("\n");


import * as stringFns from "./stringFns";

console.log("stringFns.generatePassword()  -> " + stringFns.generatePassword());
