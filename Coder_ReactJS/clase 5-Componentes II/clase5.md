## Componentes 2
    Componentes son:
        Funciones que comienzan con mayusculas y retorna jsx
        Pueden tener props (children y comunes) y estados.
        Funcion de eventos en componente (Producen una nueva ejecucion de la funcion donde estan)
        Hace re render (Una nueva ejecucion de la funcion) Un evento, cambio en el estado y cambio en el prop

    Ciclo de vida del componente:
        1ra ejecucion es llamada montaje
        actualizaciones/ re render (Lo dispara cambios de estados, props y eventos)
        desmontaje

    Puedo pasar objetos, funciones y componentes

    Si hago que un componente este dentro de otro contenedor recibe el prop automaticamente.

    En el prop coloco children y a la hora de llamar al componente le coloco {children}.

    Formas de pasar prop:
        Definiendo en caso de enviar cualquier dato.
        Envolviendo el componente dentro de otro para que me renderice el componente. (Children)

    Mas de un componente es una array
    Menos de 2 componentes es un objeto

    Cuando se produce un cambio de estado React ejecuta un nuevo proceso de renderizado

    El llamado a la API se hace con FETCH (Es igual a un promise)

## UseEffect
    Es un hook, recibe una callback
    Nos ayuda a salvar lo que se ve primero (Llama primero al rendering del componente y luego el llamado de la API como efecto secundario.) Permite que no se bloquee el render
    Al agregarle el array de dependencia vacion renderiza el fetch 1 sola vez. Al hacerlo con un evento se renderiza segun vaya cambiando el estado del mismo

## Cleanup
    Le coloco un callback dentro del UseEffect
    Sirve para detectar renders de mi componente y para desregistrarme

## AddEventListener
    Es acumulativo, para eso uso el retorno del CleanUp para que siempre tenga 1 solo registro.

## UseRef
    Se usa para crear una referencia mutable
    Se utiliza para acceder al DOM

    Para acceder al DOM utilizamos useRef (Es parecido al estado pero no produce un re render)
    Sirve para referenciar un elemento del DOM

    En current queda el contenido original

    El evento renderiza pero no pierdo el valor de la variable fija.

    Se puede usar para:
        Almacenar una variable
        Para apuntar a un elemento DOM