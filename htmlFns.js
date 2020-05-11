"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatDollarsAsHTML(dollarAmt) {
    if (dollarAmt < 0) {
        return "<span class=\"has-text-danger\">($" + (dollarAmt * -1).toFixed(2) + ")</span>";
    }
    else {
        return "$" + dollarAmt.toFixed(2);
    }
}
exports.formatDollarsAsHTML = formatDollarsAsHTML;
function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
exports.escapeHTML = escapeHTML;
