var ArrayOperations = /** @class */ (function () {
    function ArrayOperations() {
        this.getSummary = function (a) {
            return a.reduce(function (a, b) { return a + b; }, 0);
        };
        this.getAverage = function (a) {
            return a.reduce(function (a, b) { return a + b; }, 0) / a.length;
        };
    }
    return ArrayOperations;
}());
var lol = new ArrayOperations();
console.log(lol.getAverage([3, 6, 3]));
console.log(lol.getSummary([3, 6, 3]));
