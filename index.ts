import * as log from "fancy-log";
import * as dateTimeFns from "./dateTimeFns";
import * as stringFns from "./stringFns";


const currentDate = new Date();

log.info("Current Date: " + currentDate.toString());
log.info("\n");
log.info("dateToInteger() -> " + dateTimeFns.dateToInteger(currentDate).toString());
log.info("dateToString()  -> " + dateTimeFns.dateToString(currentDate));
log.info("dateStringToDate(dateToString())  -> " + dateTimeFns.dateStringToDate(dateTimeFns.dateToString(currentDate)).toString());
log.info("\n");
log.info("dateToTimeInteger() -> " + dateTimeFns.dateToTimeInteger(currentDate).toString());
log.info("dateToTimeString()  -> " + dateTimeFns.dateToTimeString(currentDate));
log.info("\n");


log.info("stringFns.generatePassword()  -> " + stringFns.generatePassword());

log.info("stringFns.escapeHTML(\"1 < 2\") -> " + stringFns.escapeHTML("1 < 2"));
