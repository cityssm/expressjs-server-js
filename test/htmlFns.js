"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const htmlFns = require("../htmlFns");
describe("htmlFns", () => {
    describe("#formatDollarsAsHTML()", () => {
        it("Converts 1.23 to $1.23", () => {
            assert.equal(htmlFns.formatDollarsAsHTML(1.23), "$1.23");
        });
        it("Converts -5 to <span class=\"has-text-danger\">($5.00)</span>", () => {
            assert.equal(htmlFns.formatDollarsAsHTML(-5), "<span class=\"has-text-danger\">($5.00)</span>");
        });
    });
    describe("#formatDollarsAsHTML()", () => {
        it("Converts \"<br />\" to \"&lt;br /&gt;\"", () => {
            assert.equal(htmlFns.escapeHTML("<br />"), "&lt;br /&gt;");
        });
    });
});
