## Diseño modular 
Un componente es una funcion constructora (Comienza con MAYUSCULA) y retorna jsx

Componentes funcionales -> muestran interfáz 
Componentes Contenedores -> agrupar otros contenedores o componentes funcionales

Se puede retornar un solo elemento por funcion, en caso de querer retornar mas (Supongamos que quiero retornar un h2 y h3) deberia crear un div (En caso de ser necesario o colocar un fragment "<> </>") para que encapsule ambas etiquetas.

## Elementos
Lo mas recomendable es crear los elementos funcionales en diferentes archivos .jsx (src/components) en carpeta junto a los css

atajo para crear un componente constructor "rafce"

Los componentes pueden recibir props (propiedades) que puede pasar datos de un componente padre a un componente hijo. No siempre voy a tener que usar una props

Puedo usar destructuring con props, es una buena practica!!
const Home = ( { saludo } ) => {}

## Estados
Los componentes pueden tener estados

onClick = {handleCounter}
    const handleCounter = () => {
        counter = counter + 1
    }

Cada vez que aprite el boton, se va a ejecutar (La variable se va a reiniciar ya que permanece en el tiempo de ejecucion de la funcion) para ello se utiliza useState 
useState ( hook - react ) -> función use reutrn array

const [counter, cambiarValorDeCounter] = useState(0) //El valor que le paso como argumento se guarda en la posicion inicial del array

    const handleCounter = () => {
        cambiarValorDeCounter(counter+1)
    }