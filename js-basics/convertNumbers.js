(function() {
    "use strict";

    // Convert numbers into words
    Number.prototype.convertNumbers = function() {
        var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

        var convertTens = function(num) {
            var result;
            if (num < 10) {
                result = ones[num];
            }
            else if (num >= 10 && num < 20) {
                result = teens[num - 10];
            }
            else {
                var delimiter = " ";
                if (ones[num % 10] !== "") {
                    delimiter = "-";
                }
                result = tens[Math.floor(num / 10)] + delimiter + ones[num % 10];
            }

            return result;
        };

        var result;
        if (this.valueOf() == 0) {
            result = "zero";
        }
        else {
            result = convertTens(this.valueOf());
        }

        return result;
    };

    // Check
    console.log("----------------Convert numbers to words----------------");
    var cases = [0, 1, 2, 7, 10, 11, 12, 13, 15, 19, 20, 21, 25, 29, 30, 35, 50, 55, 69, 70, 99];
    for (var i = 0; i < cases.length; ++i) {
        console.log(cases[i] + ": " + cases[i].convertNumbers());
    }
})();