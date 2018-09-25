

/*
NPM Init:
_________

_cuando tenemos instalado una gran cantidad de módulos dentro de nodejs, en nuestro proyecto es preciso tener una hola de ruta de instalación a la hora de migrar nuestro proyecto a otro computador ó servidor remoto

_para que así, en ese otro sistema ó computador se puedan replicar todos los módulos que teníamos instanado en nuestro equipo y proyecto para que así, el proyecto funcione correctamente

_para lo cuál, npm, disponde del comando:


    _npm init + enter


_para que así, inicialize un wizard, de preguntas las cuáles, configurarán el proyecto rsepecto, éstas proguntas son las siguientes:


    _Package Name: nombre del proyecto

    _Version: ej 1.0.0

    _Description: mi aplicacion web

    _Entry Point: se refiere al archivo principal ej, index.html

    _Text Comand: por lo general ésta opción se deja vacia

    _Git Repository: por lo general ésta opción se deja vacia

    _Keysworks: palabras claves son las cuales encontrarán el proyecto, ej: nodejs, vuejs, html, otros

    _Author: tony gomez

    _Lisence: por lo general ésta opción se deja vacia


_de ésta manera, npm, nos lostará las opciones que hemos rellenado y nos preguntará si todo está correcto, y si indicamos que "Yes"

_para que así, npm, a partir de éste punto cree un objeto json, en el cuál, estarán todas las indicaciones que hemos indicado en el wizard, anterior con el nombre de:

    _Package.json

    
_de ésta manera, nodejs, ahora dispone de un archivo de meta información y configuración el cuál, utilizará para descarga y gestión de módulos, paquetes y framewoks, ha instalar posteriormente

_para que así, una vez hayamos subido nuestro proyecto a un servidor remoto, el servidor remoto y ese servicio ejecutarán el comando de npm;

    _npm install


_para que así, ese servidor y servicio lean el archivo "Package.json", en el cuál, encontrará todas las instrucciones y rutas de los módulos, dependencias y frameworks, ha instalar en el servidor remoto para que así, el proyecto funcione correctamente

_
*/

