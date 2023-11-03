

const returnFirstTwoDrivers = function(drivers=[]){
    let newArray=drivers.slice(0, 2)
    return newArray;
}
const returnLastTwoDrivers = function(drivers=[]){
    let newArray=drivers.slice(-2);
    return newArray;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3)

  function selectDifferentDrivers(drivers, driverSelectionFunction) {
    return driverSelectionFunction(drivers);
  }
  
  

  







// function returnFirstTwoDrivers(drivers) {

    // return drivers.slice(0, 2);
//   }
  
//   function returnLastTwoDrivers(drivers) {
    // return drivers.slice(-2);
//   }
  
//   let selectingDrivers=[returnFirstTwoDrivers(drivers),returnLastTwoDrivers(drivers)]
  



  