let findTheOldest = function(people) {
    const currentYear = (new Date().getFullYear());
    let age = 0;
    let oldest = 0;
    let oldestName = people[0];
    for (let i = 0; i < people.length; i++) {
        if ('yearOfDeath' in people[i] === false) {
            age = currentYear - people[i].yearOfBirth;
            if (age > oldest) oldest = age, oldestName = people[i];
        } else {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
            if (age > oldest) oldest = age, oldestName = people[i];
        }
    }
    return oldestName;
}

module.exports = findTheOldest

//*theodinproject answer 
// const findTheOldest = function(array) {
//     return array.reduce( (oldest, currentPerson) => {
//         const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//         const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//         return oldestAge < currentAge ? currentPerson : oldest;
//     });
// }

// const getAge = function(birth, death) {
//     if (!death) {
//         death = new Date().getFullYear();
//     }
//     return death - birth;
// }