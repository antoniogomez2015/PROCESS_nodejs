/*
_nodejs, dispone de diferentes módulos pre construidos para la construcciones de aplicaciones, servidores y diferentes procesos posibles dentro de nodejs

_de ésta manera, dispondremos de la documentación oficial para la creación y manejo de los diferentes módulos, métodos y propiedades disponibles yendo ha:

    //documentación general
        _https://nodejs.org/en/docs/

    //API de la última version v10.10.0.API
        _https://nodejs.org/api/os.html#os_os_platform
*/

/*
File System
___________

_éste modulo nos permitirá crear y editar archivos del sistema operactivo como carptas y documentos, otros para que así, podamos interactuar entre el sistema y el usuario en diferentes aplicaciones, éste módulo tiene un alias "fs"

_de ésta manera, guardamos igualmente en una constante el requerimiento del módulo interno de js, en éste caso en las constante "fs"

_para a continuación requerir el móduo a través, del método "require('')", con la diferencia que a los métodos pre construidos ó métodos internos de nodejs, no los llamaremos indicando la ruta de ubicación como por ejemplo "./", sino que directamente haremos sólo referencia a su nombre ya que éstos módulos se encuentran en el mismo core, de nodejs

_para a continuación concatenarle a la constante "fs", el método en éste caso "writeFile()"

_el cuál, requerirá tres parámetros; donde el primer parámetro será la ruta, nombre, y extensión del archivo; ruta: "./", es decir, que en éste caso lo cree en la misma ubicación del proyecto donde se corre éste script, y como nombre en éste caso "proof", y extensión ".txt"

_y como segundo parámetro requerirá el contenido de ese archivo, en éste caso indicaremos un string, de texto plano como ejemplo; "Hola mundo"

_y como tercer parámetro opcional requerirá un callback, ó función anónima de respuesta en caso de errores, para que así, ésta función con el parámetro de "err", pase el error que le indique el sistema operativo en caso de hacer error y en éste caso lo envío como un mensaje a la consola a través, del console.log(err);

_de lo contrario, si el archivo es creado correctamente entonces se ejecutará el console.log('Archivo creado correctamente');
*/

    const fs = require('fs');

    fs.writeFile('./proof.txt', 'Hola mundo', function(err){
        if(err){
            console.log(err);
        }
        console.log('Archivo creado correctamente');

    });

/*
NOTA: ejecutar éste método no funciona con el terminal de git bash, agregado dentro de visual studio code, más si funciona correctamente en la consola de comandos externa de Wondows, vís "CMD"
*/
