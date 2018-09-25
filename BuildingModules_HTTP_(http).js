/*
_nodejs, dispone de diferentes módulos pre construidos para la construcciones de aplicaciones, servidores y diferentes procesos posibles dentro de nodejs

_de ésta manera, dispondremos de la documentación oficial para la creación y manejo de los diferentes módulos, métodos y propiedades disponibles yendo ha:

    //documentación general
        _https://nodejs.org/en/docs/

    //API de la última version v10.10.0.API
        _https://nodejs.org/api/os.html#os_os_platform
*/

/*
HTTP
____

_éste modulo nos permitirá crear un servidor web, para gestionar peticiones del cliente y respuesta hacia el cliente 

_de ésta manera, guardamos igualmente en una constante el requerimiento del módulo interno de js, en éste caso en las constante "http"

_para a continuación requerir el móduo a través, del método "require('')", con la diferencia que a los métodos pre construidos ó métodos internos de nodejs, no los llamaremos indicando la ruta de ubicación como por ejemplo "./", sino que directamente haremos sólo referencia a su nombre ya que éstos módulos se encuentran en el mismo core, de nodejs

_para a continuación concatenarle ".", a la constante "http", el método "createServer()", del módulo "http", nativo de nodejs

_de ésta manera, el método "createServer()", requiere como parámetro una función anónima en la cuál, se gestionará la creación, conexión y respuesta del nuevo servidor ha generar y ejecutar

_de ésta manera, la función anónima que hemos creado en el paso anterior requiere dos parámetros los cuáles, son los siguientes:

_el primer parámetro es "request", simplificado normalmente como "req", el cuál, tomará la petición del cliente ó navegador web, del usuario

_y el segundo parámetro será "response", simplificado ha "res", el cuál, gestionará la respuesta de parte del servidor hacia el navegador de vuelta

_de ésta manera, ahora podremos gestionar la respuesta al usuario, para lo cuál, tomaremos el parámetro "res", y le concatenaremos ".", el método "writeHead()", a través, del cuál, podremos indicar el tipo de información suministrada a través, de un objeto javascript, anidado dentro del método  writeHead()

_así, por ejemplo "200", le indicará al navegador que la información es correcta y que está bien

_como también, indicamos el tipo de contenido a través, de "content-type", el cuál, hemos definido como "text/plain"

_y para definir el mensaje devuelto para ser renderizado en pantalla ante el cliente ó navegador, concatenamos ".", al parámetro "res", el método "write()", en el cuál, a trvés, de un string, indicaremos el mensaje ha mostrar, en éste ejemplo, "Eto es un plsime texto"

_para por último finalizar la respuesta de parte del servidor al usuario, para lo cuál, al parámetro "res", le concatenamos ".", el método "end()"

_más finalmente y por último concatenamos ".", al final de constante "http", el método "listen()", el cuál, preparará un puerto del servidor para la escucha de las peticiones del cliente ó navegador, en éste caso, habilitará el puerto "3000"

_de ésta manera, primeramente debemos de correr ó inicializar el servidor para lo cuál, en la consola:

    _node BuildingModules_HTTP_(http).js

_para que así, desaparezca el prompt, de la consola de comandos lo cuál, indicará que el servidor está corriendo y a la escucha de peticiones del cliente

_para que así, podamos ir al navegador y buscar en la ruta de url:

    _localhost:3000

_para que así, podamos acceder a la respuesta del servidor  renderizada en cliente ó navegador
*/

   const http = require('http');

    /*http.createServer(function(req, res){
        res.writeHead(404, {'content-type': 'text/plain'});
        res.write('Eto es un plsime texto');
        res.end();
    }).listen(3000);*/

/*
NOTA: ejecutar éste método no funciona con el terminal de git bash, agregado dentro de visual studio code, más si funciona correctamente en la consola de comandos externa de Wondows, vís "CMD"

_para detener el servidor para realizar nuevos cambios, otros, debeos aplicar el shortcut, "Control + C", dos veces en la consola de comandos de windows
*/


/*
_una forma más ordenada de gestionar las respuestasde el servidor es guardar la definición de respuesta del servidor constante, en éste caso a través, de la constante "handleServer", ej:
*/

    const handleServer = function(req, res){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('<h1>Servidor Activado y Renderizando</h1>');
        res.end();
    }

/*
_para que así, al crear al servidor sólo tengamos que pasarle la respuesta respectiva
*/

    //http.createServer(handleServer).listen(3000);


/*
_más todabía podríamos optimizar más el código, al almacenar en una nueva constante llamada en éste caso "server", la creación del servidor a través, del método "createServer()", el cuál, a su ves tiene como parámetro a la constante "handleServer"

_para que así, luego ha la constante "server", podamos concatenarle ".", el método "listen()", más un callback, a través, de un función anónima con "console.log()"", para que así, éste nos renderize por consola la activación del servivor de forma adicional, ej;
*/

    const server = http.createServer(handleServer);

    server.listen(3000, function(){
        console.log('El servidor está corriendo en el Puerto: 3000');
    });

/*
_de ésta manera, de cualquiera de las formas lograremos el mismo resultado
*/
