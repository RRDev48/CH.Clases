## Promise
    Como se crea?:
        Then
        Catch
        Finally

    El promise lleva una callback (Resolve (Aceptada), reject (Rechazada))
    Se utiliza como Custom Fetch

    Estados de mi promise:
        Aceptada
        Rechazada
    
    Capturamos los resultados de la promise con: 
        ACEPTADO .then(resultado => console.log(resultado)) //Then es como un esperar y luego ejecutar
        RECHAZADO  con una segunda callback como argumento .then(resultado => console.log(resultado), (error) => console.log(error))
        RECHAZADO  con un catch (captura TODOS los errores) .catch(error => console.log(error))

## Then
    Puedo concatenar hasta 2, en el primero puedo parsear el JSON y en el segundo pasarle algun parametro

## Finally
    Este se ejecuta siempre al ULTIMO (espera a que se ejecuta los Then)
 
## SetTimeOut
    Recibe una callback, es una funcion asincronica
    Como segundo argumento expresados en minisegundos (3000 ms)

## API
    Van en componentes contenedor
