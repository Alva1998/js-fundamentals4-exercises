const reverseString = function(ogString) {
    let arrayString = ''
    for (let i = ogString.length - 1; i >= 0; i--) {
        arrayString += ogString[i]
    }
    return arrayString

    //*another way of doing it (utilizing js functions)
    let splitString = ogString.split('')
    let reverseArray = splitString.reverse()
    let joinString = reverseArray.join()

}

module.exports = reverseString
