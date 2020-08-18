import * as assert from "assert";
import * as stringFns from "../stringFns";
import type { RawRowsColumnsReturn } from "../types";


describe("stringFns", () => {

  describe("#rawToCSV()", () => {
    it("Converts raw output from better-sqlite3 to CSV", () => {

      const rawData: RawRowsColumnsReturn = {
        rows: [
          ["col1a", "col2a", "col3a"],
          ["col1b", "col2b", "col3b"]
        ],
        columns: [
          {
            name: "col1",
            column: null,
            table: null,
            database: null,
            type: null
          }, {
            name: "col2",
            column: null,
            table: null,
            database: null,
            type: null
          }, {
            name: "col3",
            column: null,
            table: null,
            database: null,
            type: null
          }
        ]
      };

      assert.equal(stringFns.rawToCSV(rawData),
        "col1,col2,col3\n" +
        "col1a,col2a,col3a\n" +
        "col1b,col2b,col3b\n"
      );
    });
  });

  describe("#generatePassword()", () => {
    it("Generates a password in the format \"wWnn\"", () => {
      assert.match(stringFns.generatePassword(), /^[a-z]+[A-Z]+\d\d$/);
    });
  });

  describe("#getUID()", () => {
    it("Two consecutive calls return different values", () => {
      assert.notEqual(stringFns.getUID(), stringFns.getUID());
    });
  });
});
