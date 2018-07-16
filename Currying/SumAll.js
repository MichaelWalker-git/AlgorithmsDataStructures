function sum(a) {
    var result = a || 0;
    if (a == undefined) return 0;
    return  function calculate(b)  {
        if(!Number.isInteger(b) || b === undefined) return result;
        result +=b;
        return calculate;
    };
}