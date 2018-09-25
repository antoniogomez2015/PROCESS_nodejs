/*
Objects
_______

_para mayor flexibilidad tenemos la posibilidad de crear un objeto personalizado a través, del cuál, podremos exportar posteriormente elementos en memoria como constantes y variables como funciones y objetos y demás estructuras de control

_de ésta manera, podremos crear un objeto vacio, ej:
*/

    const proof = {};

/*
_de ésta manera, hemos cuargado el nuevo objeto vacio en una constante para su utilización posteriormente

_para a continuación enunciar por a parte los elementos que harán de propiedades del objeto respectivo que hemos creado previamente, ejemplo:
*/

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

/*
_para posteriormente agregar función en éste caso como una propiedad del objeto que hemos creado

_para lo cuál, haremos referencia al nombre del objeto para a continuación concatenar un nombre referencial que hará alución al nombre que le estaremos dando a la propiedad del objeto en éste caso "proof"

_para posterior asignarle "=", el nombre de la función respectiva la cuál fungirá como valor de la propiedad del objeto proof, en éste caso
*/

    proof.add = add;
    proof.sustract = sustract;
    proof.multiply = multiply;
    proof.divide = divide;

/*
_para por último exportar el nuevo objeto personalizado que hemos creado para lo cuál, haremos uso de la palabra reservada y pre construida "module", la cuál, concatenaremos con la pala reservada "exports"

_y ala cuál, le asignaremos "=", el elementos en memoria ó estrucutura de control javascript, ha exportar de forma más personalizada, ejemplo:
*/

    module.exports = proof;

/*
_en éste caso estamos exportando el objeto "proof", con todas sus propiedades personalizadas y totalmente accesibles posteriormente

_más también, tenemos la posibilidad a través, de la palabra reservada "module", de exportar elementos en memoria como estructuras de contrl javascript, de forma independiente

_como por ejemplo un función como en el siguiente ejemplo, pero también, podremos exportar constantes, variables, otros:
*/

    function saludar(name){
        console.log('Hola' + name);
    }

    module.exports = saludar;

/*de ésta manera, sólo exportaremos en éste caso la función "saludar"*/


