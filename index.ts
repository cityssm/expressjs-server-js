import dateTimeFns = require("./dateTimeFns");

const currentDate = new Date();

console.log("Current Date: " + currentDate);
console.log("\n");
console.log("dateToInteger() -> " + dateTimeFns.dateToInteger(currentDate));
console.log("dateToString()  -> " + dateTimeFns.dateToString(currentDate));
console.log("\n");
console.log("dateToTimeInteger() -> " + dateTimeFns.dateToTimeInteger(currentDate));
console.log("dateToTimeString()  -> " + dateTimeFns.dateToTimeString(currentDate));
