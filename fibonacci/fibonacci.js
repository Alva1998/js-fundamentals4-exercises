const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if (num == 0) return 0;
    let total = 1
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;
    if (num == 1 || num == 2) return 1;
    for (let i = 3; i <= num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[num];
}

module.exports = fibonacci


//*the odin project answer
// if (count < 0) return 'OOPS'
// if (count == 0) return 0
// let a = 0
// let b = 1 
// for (let i = 1; i < count; i++) {
//     const temp = b
//     b = a + b
//     a = temp
// }
// return b 
