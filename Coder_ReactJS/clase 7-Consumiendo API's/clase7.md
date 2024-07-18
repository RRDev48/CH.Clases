## API
    Request (req)
    response (res)

## Push
    Lo hace para que los usuarios esten mas tiempo en nuestra aplicacion.

## Polling
    Similar al Push 

## HTTPS
    Sin HTTPS no puedo generar una pasarela de pago por el tema de seguridad
    
    TODA URL TIENE UN VERBO (Ninguno tiene una responsabilidad)

    Parametros o EndPoints (Representan acciones):
        Get: Va en la URL ya que solicita informacion (Lo ve todo el mundo)
        Post: Para enviar informacion 
        Push 
        Delete: Borra
        Put: Si no existe lo crea

## Configurar el https
    method: 'POST' (Puede ir el verbo que quiera)
    headers:{
        "content-type": "application/json"
    }
    body: JSON.stringify([{Parametros}])

## CRUD
    Create Read Update Delete

## Query Params
    En la URL todo lo que se encuentre despues del "?" son parametros
    Es una forma comun para buscar recursos que no tengo la seguridad de que exitan

## Params / Segments
    Incluye el identificador dentro de la misma URL (EndPoint), ya se conoce el recurso que busco.
    
## Headers
    Dan informacion de los verbos.

## Cors
    Es una politica de seguridad
    
## Filter 
    Devuelve un array (no se usa xq vamos a tener que mapear)