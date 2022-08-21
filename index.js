// Code your solution in this file!

const returnFirstTwoDrivers = function (arr){
    return arr.slice(0,2)
}

// console.log (returnFirstTwoDrivers());

const returnLastTwoDrivers = function (arr2){
   let len = arr2.length

    return arr2.slice(len-2,len)
    //  return drivers3;
}

// console.log (returnLastTwoDrivers());

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log (selectingDrivers[0]);
console.log (selectingDrivers[1]);


const createFareMultiplier = function (fareMultiplier) {
    return function (value) {
        return fareMultiplier * value;
}
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
  
function selectDifferentDrivers(drivers, func) {
    return func(drivers)

}

// let len = arr.length

//     return arr.slice(len-2,len)






