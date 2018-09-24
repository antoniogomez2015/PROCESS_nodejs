/*
_nodejs, dispone de métodos ó funciones pre construidas a través, de las cuáles, podremos gestionar todos los procesos en la creación de sistema con nodejs

require()
_________

_éste método nos permitirá requerir ó importar archivos ó módulos de código javascript, de ésta manera, podremos integrar diferentes contenidos dentro un mismo documento

_de ésta manera, como parámetros y entre comillas "", podremos indicar el nombre y ruta del archivo ha importar ó relación a través, del método require(), ejemplo:
*/


    require('./project_basic/math.js');


/*
_de ésta manera, a través, de "./", podremos indicar que nodejs, busque el archivo en la ruta principal del proyecto local ó actual y no en la ubicación por defecto donde se ejecutar nodejs, por defecto en "C:\Program Files\nodejs...."

_más también, podríamos indicar rutas dentro de nuestro propio proyecto y navegar dentro de carptas ó folders, ejemplo:

    _./project_basic/math.js

    _../project/demo/datos.js
*/

/*
_más para poder utilizar éste método para poder importar archivos dentro de otros debemos almacenar éste método dentro de una constante ó variable 

_para que así, éste método quede almacenado en la memoria javascrtip, para poder así, acceder ha éste posteriormente, ej:
*/

    const math = require('./project_basic/math.js');


/*
_para que así, a la hora de llamar ó acceder al método require(), hacerlo a través, de la constante "math", que hemos creado previamente, ejemplo:
*/

    console.log(math.add(5,3));


/*
_y a su vez acceder a función ó método respectivo de forma concatenada ".", con la constante "math", en éste caso

_para por último pasarle los parámetros que requiere el método respectivo en éste caso el método "add()"
*/