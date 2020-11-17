const leapYears = function(year) {
    //*create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules: 
    /* leap years are divisible by 4 (like 1984 and 2004). However, years divisible by 100 are NOT leap years (such as 1800 and 1900) UNLESS they are divisible by 400 (like 1600 and 2000) */
    //*HINTS: use an if statement and && to make sure all the conditions are met properly 
    if (year % 4 === 0) {
        if (year % 100 === true && year % 400 === true) {
            return true;
        } else {
            return false;
        }
        return true; // for the case where its only divisible by 4 
    }

}

module.exports = leapYears
