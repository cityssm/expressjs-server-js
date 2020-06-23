import * as log from "fancy-log";
import * as dateTimeFns from "./dateTimeFns";

const currentDate = new Date();

log.info("Current Date: " + currentDate);
log.info("\n");
log.info("dateToInteger() -> " + dateTimeFns.dateToInteger(currentDate));
log.info("dateToString()  -> " + dateTimeFns.dateToString(currentDate));
log.info("dateStringToDate(dateToString())  -> " + dateTimeFns.dateStringToDate(dateTimeFns.dateToString(currentDate)));
log.info("\n");
log.info("dateToTimeInteger() -> " + dateTimeFns.dateToTimeInteger(currentDate));
log.info("dateToTimeString()  -> " + dateTimeFns.dateToTimeString(currentDate));
log.info("\n");


import * as stringFns from "./stringFns";

log.info("stringFns.generatePassword()  -> " + stringFns.generatePassword());
