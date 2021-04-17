// Paste in the provided code here:


export class SpaceLocation {
    kilometersAway: number;
    name: string;
    milesPerKilometer: number = 0.621;
    speedMph: number;

    constructor(name: string, speedMph: number, kilometersAway: number) {
        this.name = name;
        this.speedMph = speedMph
        this.kilometersAway = kilometersAway;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hours: number = milesAway / this.speedMph;
        return hours / 24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
