export const formatDollarsAsHTML = (dollarAmt) => {
    return dollarAmt < 0
        ? "<span class=\"has-text-danger\">($" + (dollarAmt * -1).toFixed(2) + ")</span>"
        : "$" + dollarAmt.toFixed(2);
};
export const escapeHTML = (string) => {
    return String(string)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
};
