

/*
NPM Package:
____________

_una vez hemos ejecutado el comando "npm init", y hemos seguido el wizard, y hemos así, creado el archivo "Package.json"

_podremos ahora abrir éste ya que en el cuál, dispondremos de las opciones de "scrtipts", dentro del objeto json, creado

    _"Scripts":{
        "test": "echo\"Error: no text specified\" && exit "

    }

_y en el cuál, podremos eliminar "test", y en vez de éste hacer uso de un comando de npm, llamado "start", ej;

    _"Scripts":{
        "start": "node index.js"

    }

_de ésta manera, ahora a través, del comando "start", podremos ejecutar acciones y sentencias de forma personalizado a través, de npm

_de ésta manera, si ejecutamos en la consola 


    _npm start + enter

_se enecutarán las sentencias e instrucciones dentro de "start", como en éste caso, se ejecutará nuestro servidor "index.js", de ésta manera, podremos automatizar tareas en vez de hacerlas manuales

_más también, podremos agregar nuevas propiedas instruccione personalizadas, ej:

     _"Scripts":{
        "start": "node index.js",
        "desarrollo": "node nTarea.js"

    }


_más para ejecutar comando diferentes ha "start", que npm, no conoce es preciso hacer uso de la palabra reservada "run", precediendo al nombre de la sentencia ha ejecutar


_de ésta manera, ahora podremos llamar a la tarea personalizada que hemos creado con el nombre de "desarrollo", de la misma forma;


    _npm run desarrollo + enter


*/

