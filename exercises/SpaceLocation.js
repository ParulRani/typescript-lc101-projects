"use strict";
// Paste in the provided code here:
exports.__esModule = true;
exports.SpaceLocation = void 0;
var SpaceLocation = /** @class */ (function () {
    function SpaceLocation(name, speedMph, kilometersAway) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
        this.kilometersAway = kilometersAway;
    }
    SpaceLocation.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    SpaceLocation.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return SpaceLocation;
}());
exports.SpaceLocation = SpaceLocation;
