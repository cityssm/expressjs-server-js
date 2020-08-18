import * as assert from "assert";
import * as dateTimeFns from "../dateTimeFns";


describe("dateTimeFns", () => {

  describe("#dateToInteger()", () => {
    it("Converts new Date(1970, 1 - 1, 1) to 19700101", () => {
      assert.equal(dateTimeFns.dateToInteger(new Date(1970, 1 - 1, 1)), 19700101);
    });
  });

  describe("#dateToString()", () => {
    it("Converts Date(1970, 1 - 1, 1) to \"1970-01-01\"", () => {
      assert.equal(dateTimeFns.dateToString(new Date(1970, 1 - 1, 1)), "1970-01-01");
    });
  });

  describe("#dateIntegerToString()", () => {
    it("Converts 19700101 to \"1970-01-01\"", () => {
      assert.equal(dateTimeFns.dateIntegerToString(19700101), "1970-01-01");
    });

    it("Converts null to \"\"", () => {
      assert.equal(dateTimeFns.dateIntegerToString(null), "");
    });
  });

  describe("#dateStringToDate()", () => {
    it("Converts \"1970-01-01\" to Date(1970, 1 - 1, 1)", () => {
      assert.equal(dateTimeFns.dateStringToDate("1970-01-01").getTime(), new Date(1970, 1 - 1, 1).getTime());
    });
  });

  describe("#dateStringToInteger()", () => {
    it("Converts \"1970-01-01\" to 19700101", () => {
      assert.equal(dateTimeFns.dateStringToInteger("1970-01-01"), 19700101);
    });
  });

  describe("#dateDifferenceInDays()", () => {
    it("Difference between Date(1970, 1 - 1, 1) and Date(1970, 2 - 1, 1) is 31", () => {
      assert.equal(dateTimeFns.dateDifferenceInDays(new Date(1970, 1 - 1, 1), new Date(1970, 2 - 1, 1)), 31);
    });
  });

  describe("#dateStringDifferenceInDays()", () => {
    it("Difference between \"1970-01-01\" and \"1970-02-01\" is 31", () => {
      assert.equal(dateTimeFns.dateStringDifferenceInDays("1970-01-01", "1970-02-01"), 31);
    });
  });

  describe("#dateToTimeInteger()", () => {
    it("Converts new Date(1970, 1 - 1, 1, 1, 23) to 123", () => {
      assert.equal(dateTimeFns.dateToTimeInteger(new Date(1970, 1 - 1, 1, 1, 23)), 123);
    });
  });

  describe("#dateToTimeString()", () => {
    it("Converts new Date(1970, 1 - 1, 1, 1, 23) to \"01:23\"", () => {
      assert.equal(dateTimeFns.dateToTimeString(new Date(1970, 1 - 1, 1, 1, 23)), "01:23");
    });
  });

  describe("#timeIntegerToString()", () => {
    it("Converts 123 to \"01:23\"", () => {
      assert.equal(dateTimeFns.timeIntegerToString(123), "01:23");
    });
  });

  describe("#timeStringToInteger()", () => {
    it("Converts \"01:23\" to 123", () => {
      assert.equal(dateTimeFns.timeStringToInteger("01:23"), 123);
    });
  });

});
