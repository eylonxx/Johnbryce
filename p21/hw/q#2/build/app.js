var Color;
(function (Color) {
    Color["Black"] = "despite";
    Color["White"] = "Snow";
    Color["Blue"] = "Sea";
    Color["Red"] = "blood";
    Color["Green"] = "leaf";
})(Color || (Color = {}));
var getColorItem = function (a) {
    return a;
};
console.log(getColorItem(Color.Black));
