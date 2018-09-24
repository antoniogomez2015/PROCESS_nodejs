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