
///////////////////////////////////////////////////////////////////////////////
//objeto inicialmente vacío para exportar las funciones ha utilizar en nodejs
const proof = {};


///////////////////////////////////////////////////////////////////////////////
//funciones utilizar en nodejs, posteriormente
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

///////////////////////////////////////////////////////////////////////////////
//configuración del objeto para exportar las funciones ha utilizar en nodejs

/*
_de ésta manera, tanto si utilizamos la palabra reservada "exports", ó el nombre del objeto propiamente dicho en éste caso "proof"

_debemos de concatenarle ".", un nombre referencial al cuál, nos referiremos a través, de nodejs, a la hora de llamar a las respectivas funciones como métodos posteriormente

_para seguidamente asignarles "=", la función respectiva que será llamada en cada caso respectivamente

_y en el caso de utilizar la palabra reservada "export", tendremos que al final utilizar las palabras claves "module", y "exports", de la siguiente manera, para exportar el objeto personalizado una vez declarado y configurado correctamente, ej;

    _modele.exports = proof;
*/

//version para objeto personalizado
proof.add = add;
proof.sustract = sustract;
proof.multiply = multiply;
proof.divide = divide;

//ésta opción nos permitirá exportar todo un objeto
//_ésta es la opción más recomendada por que nos pemritirá no sólo exportar un objeto si no que también, podremos exportar funciones, variables, otros
module.exports = proof;



//version estandar bajo el "exports", sólo
//ésta opción nos permitirá exportar propiedades de un objeto por separado
/*
exports.add = add;
exports.sustract = sustract;
exports.multiply = multiply;
exports.divide = divide;
*/
