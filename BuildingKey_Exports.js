/*
NOTA: de ésta manera, cuando el documento "math.js", en éste caso es requerido en otro archivo a través, de un constante por ejemplo y renderizado por un consolo.lo(math)

_éste se renderizará como un objeto javascript, en su conjunto, ejemplo:
*/

{ add: [Function: add],
    sustract: [Function: sustract],
    multiply: [Function: multiply],
    divide: [Function: divide] }

/*
_de ésta manera, podremos ver que dada función se ha convertido en una propiedad del objeto js, con su nombre respectivo y su definición de función como valor de la propiedad del objeto para cada una de las propiedades respectivamente

_es por ésta razón que la palabra reservada "exports", nos permitirá poder acceder a cada uno de los elementos del objeto de forma independiente y como métodos para su uso esperado
*/


/*
Exports
_______

_la palabra reservada "exports", nos permitirá exportar a través, de un objeto javascript, los métodos js, que tengamos desarrollados los cuáles podrán ser utilizados en otros archivos a requerir éstos
*/

    exports

/*
_para a continuación instanciar la exportación a través, de un nombre que le podremos asignar a nuestro criterio de forma concatenda a la palabra reservada "exports"

_por convención se suele utilizar una nombre referencial al tipo de contenido ha exportar, ejemplo:
*/

    exports.add

/*
__para justo seguido asignarle "=", el nombre de la función ó método ha exportar, ejemplo
*/

    exports.add = add;

/*
_para que así, al hacer referencia al nombre de "add", éste llame al método "add()", respectivamente
*/

