"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.sum = 0;
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        for (var i = 0; i < items.length; i++) {
            this.sum += items[i].massKg;
        }
        return this.sum;
    };
    Rocket.prototype.currentMassKg = function () {
        for (var i = 0; i < this.astronauts.length; i++) {
            this.sum += this.astronauts[i].massKg;
        }
        for (var i = 0; i < this.cargoItems.length; i++) {
            this.sum += this.cargoItems[i].massKg;
        }
        return this.sum;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else
            return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
