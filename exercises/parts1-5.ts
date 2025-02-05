// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';
// Part 1: Declare (5) Variables With Type

//let spacecraftName: string = 'Determination';
//let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
//let milesPerKilometer: number = 0.621;


// Part 2: Print Days to Mars
//let milesToMars: number = kilomitersToMars * milesPerKilometer;
//let hoursToMars: number = milesToMars / speedMph;
//let daysToMars: number = hoursToMars / 24;




// Code an output statement here (use a template literal):
//console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);


// Part 3: Create a Function ("getDaysToLocation")

/*function getDaysToLocation(kilometersAway: number): number {

    let milesAway: number = kilomitersToMars * milesPerKilometer;
    let hoursToLocation: number = milesAway / speedMph;
    return hoursToMars / 24;
}*/

//console.log(`${getDaysToLocation(kilometersToTheMoon)} would take ${spacecraftName} days to get to Mars.`);




// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToMars: number = milesAway / this.speedMph;
        return hoursToMars / 24;
    }
}



// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);
let spaceLoc = new SpaceLocation(spaceShuttle.name, spaceShuttle.speedMph, kilometersToMars);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
//console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to go Mars `);
//console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to go Moon `);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
spaceLoc.printDaysToLocation(new SpaceLocation('Mars', spaceShuttle.speedMph, kilometersToMars));
spaceLoc.printDaysToLocation(new SpaceLocation('the Moon', spaceShuttle.speedMph, kilometersToTheMoon));

// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
