// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){

    return drivers.slice(0,2);
};

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const firstTwoDrivers = returnFirstTwoDrivers(drivers);

console.log(firstTwoDrivers);


const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

const lastTwoDrivers = returnLastTwoDrivers(drivers);

console.log(lastTwoDrivers);

const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers];

console.log(selectingDrivers);

function createFareMultiplier(integer) {

    return function(fare) {
        return fare * integer;
    };
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


// - `selectDifferentDrivers()` — This function takes two arguments, an array of
//   the names of Scuber's `drivers` and either the `returnFirstTwoDrivers()` or
//   `returnLastTwoDrivers()` function. Based on these two arguments,
//   `selectDifferentDrivers()` will return either the first two drivers or the
//   last two drivers.

// Test case 1: returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    returnFirstTwoDrivers // Output: ['Antonia', 'Nuru']
}


// Test case 2: returns the last two drivers when passed returnLastTwoDrivers() as the second argument
function selectDifferentDrivers(drivers, returnLastTwoDrivers){

    return returnLastTwoDrivers; // Output: ['Amari', 'Mo']
  
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    // Call the provided function (func) with arrayOfDrivers and return its result
    return func(arrayOfDrivers);
}