export const formatDollarsAsHTML = (dollarAmt) => {
    if (dollarAmt < 0) {
        return "<span class=\"has-text-danger\">($" + (dollarAmt * -1).toFixed(2) + ")</span>";
    }
    else {
        return "$" + dollarAmt.toFixed(2);
    }
};
export const escapeHTML = (str) => {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
};
