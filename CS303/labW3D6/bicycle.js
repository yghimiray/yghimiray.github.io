"use strict";



const bicycle = {
    gear: 1,
    speed: 0,
    applyBrake: function (decrement) { this.speed -= decrement; },
    speedUp: function (increment) { this.speed += increment; },
};


const mountainBike = {
    gear: 3,
    speed: 2,
    seatHeight: 1,
    __proto__: bicycle,
};


// mountainBike.speedUp(100)
// console.log(mountainBike.speed);
// mountainBike.applyBrake(10);
// console.log(mountainBike.speed);

// module.expotrs = {bicycle, mountainBike };