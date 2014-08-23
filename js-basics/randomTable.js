(function() {
    "use strict";

    // Create table with random letter and background
    (function createTable(n, m) {
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
            "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var body = document.body,
            table = document.createElement("table");

        for (var i = 0; i < n; ++i) {
            var tr = table.insertRow();

            for (var j = 0; j < m; ++j) {
                var td = tr.insertCell(-1);
                td.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)];
                td.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
            }
        }
        body.appendChild(table);
    })(10, 30);
})();
