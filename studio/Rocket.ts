import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    sum: number = 0;
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }


    sumMass(items: Payload[]): number {
        for (let i = 0; i < items.length; i++) {
            this.sum += items[i].massKg;
        }
        return this.sum;
    }

    currentMassKg(): number {
        for (let i = 0; i < this.astronauts.length; i++) {
            this.sum += this.astronauts[i].massKg;
        }
        for (let i = 0; i < this.cargoItems.length; i++) {
            this.sum += this.cargoItems[i].massKg;
        }
        return this.sum;

    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else
            return false;


    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else
            return false;

    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else
            return false;

    }

}