function compareTime (timeStringOne, timeStringTwo) {
    let dateTimeOne = new Date(timeStringOne);
    let dateTimeTwo = new Date(timeStringTwo);

    return dateTimeOne.getTime() > dateTimeTwo.getTime();
}

module.exports = {
    compareTime
}