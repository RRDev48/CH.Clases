dD## Sugar Syntax

    // equivalente a un IF ELSE (Ternarie)
    console.log(`La condición es: ${ condition ? 'Verdadera' : 'Falsa'}. ESto es una afirmación`)

## Spread operator -> [] array -> {}
    const cuatro = 4
    const arrayNumber = [ 0,1,2,3 ]

    // insertar el cuatro como elemento con spread operator
    const newArrayNumnber = [...arrayNumber, cuatro ] //Con los puntos copia el contenido y despliega el contenido del Array. Sin "..." quedaria como resultado [ [1,2,3] 4 ] 
    
## Propiedades dinámicas: 
    const campo = 'id_persona'
    const objPersona = {
        first_name: 'Fede',
        last_name: 'Osandón',
        [campo]: 'este1es.el.id', //Puedo hacer que un campo sea dinamico 
        email: 'f@gmail.com'
    }

    objPersona.first_name = 'Juan' //Puedo cambiar el valor ya que es dinamico

## Deep matching -> destructiring (se puede hacer con array, objetos)
    const { first_name=first_name, last_name=last_name } = objPersona //Le digo que me saque lo del objeto en esos campos y lo almacene en esas variables

    o

    const { first_name, last_name } en caso de que tengan el mismo nombre

    //Quiero cambiar el nombre de la variable, redefino con el ":"
    const { first_name: nombre, last_name: apellido }

## Asignación en destructuración 
    //Si email no esta definido, le coloca como valor predeterminado 'example@email.com'
    const { first_name: nombre, last_name: apellido, email='example@email.com' } = objPersona

## WebPack
    Archivos dinamicos = multiples archivos del programa
    Convierte todos los archivos dinamicos (js,jsx,css,sass,scss,hbn,etc) a archivos estaticos

    npm run build //Convierte todos los archivos a estatico.

## Transpiling
    Mismo concepto del polify.
    Convierte el codigo JavaScript

## JSX
    Es javascript escrito de otra manera

    NO ES HTML, es javascript que se transpila

    Utilizando las {} puedo escribir JavaScript, se tienen que usar camelCase
    Todas las etiquetas tienen que tener un cierre como en HTML.

    SALVEDADES: Si son contenedoras van a tener que tener el cierre "</>", en caso de no serlo "/>"

    Eventos: Con camelCase 

## Imports y clases
    En lugar de Class se usa ClassName
    Class = Se usa para objetos
    ClassName = Para estilo

    Para importar el css es import './css'

    Para el main import App from '/app.jsx'
    