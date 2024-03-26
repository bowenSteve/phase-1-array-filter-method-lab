const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(arr, name) {
    const match = arr.filter((driver)=>driver.toLowerCase() === name.toLowerCase());
    return match;
}
function fuzzyMatch(drivers,firstLetters){
    let nameLength=firstLetters.length;
    const result = drivers.filter((driver)=>driver.slice(0,nameLength)===firstLetters)
    return result;
}
function matchName(drivers,driverName){
    const findDriver = drivers.filter((driver)=>driver.name===driverName);
    return findDriver;
}