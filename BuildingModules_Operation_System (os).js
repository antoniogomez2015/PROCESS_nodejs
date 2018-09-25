/*
_nodejs, dispone de diferentes módulos pre construidos para la construcciones de aplicaciones, servidores y diferentes procesos posibles dentro de nodejs

_de ésta manera, dispondremos de la documentación oficial para la creación y manejo de los diferentes módulos, métodos y propiedades disponibles yendo ha:

    //documentación general
        _https://nodejs.org/en/docs/

    //API de la última version v10.10.0.API
        _https://nodejs.org/api/os.html#os_os_platform
*/

/*
Operation System
________________

_éste modulo nos permitirá obtener información del sistema operactivo para que así, podamos interactuar entre el sistema y el usuario en diferentes aplicaciones, éste módulo tiene un alias "os"

_de ésta manera, guardamos igualmente en una constante el requerimiento del módulo interno de js, en éste caso en las constante "OS"

_para a continuación requerir el móduo a través, del método "require('')", con la diferencia que a los métodos pre construidos ó métodos internos de nodejs, no los llamaremos indicando la ruta de ubicación como por ejemplo "./", sino que directamente haremos sólo referencia a su nombre ya que éstos módulos se encuentran en el mismo core, de nodejs

_para a través, de console.log(), por ejemplo poder acceder a los métodos de forma concatenada ".", del módulo respectivo en éste caso del módulo "os"

_como en éste caso a través, del método "arch()", podremos que tipo de sistema operativo tiene nuestro sistema

_para que así, la consola en éste caso no arroje que nuestro sistema es "x64"
*/

    const os = require('os');

    console.log(os.arch());