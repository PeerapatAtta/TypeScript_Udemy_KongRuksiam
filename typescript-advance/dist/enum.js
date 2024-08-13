"use strict";
var GameMode;
(function (GameMode) {
    GameMode[GameMode["easy"] = 10] = "easy";
    GameMode[GameMode["medium"] = 20] = "medium";
    GameMode[GameMode["hard"] = 30] = "hard";
})(GameMode || (GameMode = {}));
const select = GameMode.easy;
console.log(select);
