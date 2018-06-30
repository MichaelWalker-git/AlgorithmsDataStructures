/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10){
        return num;
    } else {
        let strArr = num.toString().split('').reduce((a,b) => {
            let newB = Number(b);
            let newC = a += Number(b);
            return newC;
        }, 0);
        return addDigits(strArr);
    }
};
