import * as assert from "assert";
import * as stringFns from "../stringFns.js";
describe("stringFns", () => {
    describe("#rawToCSV()", () => {
        it("Converts raw output from better-sqlite3 to CSV", () => {
            const rawData = {
                rows: [
                    ["col1a", "col2a", "col3a"],
                    ["col1b", "col2b", "col3b"]
                ],
                columns: [
                    {
                        name: "col1",
                        column: undefined,
                        table: undefined,
                        database: undefined,
                        type: undefined
                    }, {
                        name: "col2",
                        column: undefined,
                        table: undefined,
                        database: undefined,
                        type: undefined
                    }, {
                        name: "col3",
                        column: undefined,
                        table: undefined,
                        database: undefined,
                        type: undefined
                    }
                ]
            };
            assert.strictEqual(stringFns.rawToCSV(rawData), "col1,col2,col3\n" +
                "col1a,col2a,col3a\n" +
                "col1b,col2b,col3b\n");
        });
    });
    describe("#generatePassword()", () => {
        it("Generates a password in the format \"wWnn\"", () => {
            assert.match(stringFns.generatePassword(), /^[a-z]+[A-Z]+\d\d$/);
        });
    });
    describe("#getUID()", () => {
        it("Two consecutive calls return different values", () => {
            assert.notStrictEqual(stringFns.getUID(), stringFns.getUID());
        });
    });
    describe("#formatPhoneNumber()", () => {
        it("Formats 7055555555", () => {
            assert.notStrictEqual(stringFns.formatPhoneNumber("7055555555"), "7055555555");
        });
        it("Formats 7055555555 x222", () => {
            assert.notStrictEqual(stringFns.formatPhoneNumber("7055555555 x222"), "7055555555 x222");
        });
    });
});
