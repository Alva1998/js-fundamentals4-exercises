const repeatString = function(string, numberRepeat) {
    if (string === '' || numberRepeat === 0) return ''
    if (numberRepeat < 0) return 'ERROR' 
    let addString = string
    for (let i = 0; i < numberRepeat - 1; i++) {
        addString += string
    }
    return addString
}

module.exports = repeatString
