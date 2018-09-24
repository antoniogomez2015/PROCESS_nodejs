function add(x1,x2){
    return x1 + x2
};

function sustract(x1,x2){
    return x1 - x2
};

function multiply(x1,x2){
    return x1 . x2
};

function divide(x1,x2){

    if(x2 == 0){

        console.log('El número no es divisible por (0)');

    }else{
        return x1 / x2
    }
}

exports.add = add;
exports.sustract = sustract;
exports.multiply = multiply;
exports.divide = divide;

