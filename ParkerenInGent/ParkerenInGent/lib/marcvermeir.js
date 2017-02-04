// description.beginsWith
// description.contains

String.prototype.beginsWith = function (c, isCaseSensitive) {
    if (c && typeof (c) === "string") {
        isCaseSensitive = isCaseSensitive == undefined ? false : isCaseSensitive;
        var stringToCompare = isCaseSensitive ? this : this.toLowerCase();
        var ch = isCaseSensitive ? c : c.toLowerCase();
        return stringToCompare.indexOf(ch) === 0;
    }
    else {
        return false;
    }
};
String.prototype.contains = function (c, isCaseSensitive) {
    if (c && typeof (c) === "string") {
        isCaseSensitive = isCaseSensitive == undefined ? false : isCaseSensitive;
        var stringToCompare = isCaseSensitive ? this : this.toLowerCase();
        var ch = isCaseSensitive ? c : c.toLowerCase();
        return stringToCompare.indexOf(ch) >= 0;
    }
    else {
        return false;
    }
};
