(function () {
    "use strict";

    var circle = {
        radius: 3,

        getArea: function () {
            var area = Math.PI * Math.pow(circle.radius, 2);
            return area;
        },

        logInfo: function (doRounding) {
            var result = this.getArea()
            if (doRounding) {
                result = Math.round(this.getArea())
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + result);
        }
    };

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    circle.radius = 5
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
