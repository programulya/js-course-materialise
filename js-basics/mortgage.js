(function() {
    "use strict";

    // Calculate mortgage
    var mortgage = function(s, p, n) {
        var a = (s * p) / (1 - Math.pow(1 + p, -n));
        return a;
    };

    // Check
    console.log("----------------Calculate mortgage----------------");
    var a = mortgage(10, 0.015, 36);
    console.log(a.toFixed(4));
    console.assert(0.3615 === parseFloat(a.toFixed(4)));
})();