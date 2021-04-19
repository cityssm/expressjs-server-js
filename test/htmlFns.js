import * as assert from "assert";
import * as htmlFns from "../htmlFns.js";
describe("htmlFns", () => {
    describe("#formatDollarsAsHTML()", () => {
        it("Converts 1.23 to $1.23", () => {
            assert.strictEqual(htmlFns.formatDollarsAsHTML(1.23), "$1.23");
        });
        it("Converts -5 to <span class=\"has-text-danger\">($5.00)</span>", () => {
            assert.strictEqual(htmlFns.formatDollarsAsHTML(-5), "<span class=\"has-text-danger\">($5.00)</span>");
        });
    });
    describe("#escapeHTML()", () => {
        it("Converts \"<br />\" to \"&lt;br /&gt;\"", () => {
            assert.strictEqual(htmlFns.escapeHTML("<br />"), "&lt;br /&gt;");
        });
    });
});
