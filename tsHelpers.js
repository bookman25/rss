global.__extends = function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

global.__assign = Object.assign || function(t) {
     for (var s, i = 1, n = arguments.length; i < n; i++) {
         s = arguments[i];
         for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
             t[p] = s[p];
     }
     return t;
 };