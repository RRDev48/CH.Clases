## Custom Hook
    Es una funcion que voy a crear con el prefijo USE
    Tienen que ser llamados sin ninguna condicional, ni dentro de una estructura
    Devuelve un objeto 

    HACERLO EN UN ARCHIVO JS
    

    ##Hook
    export const useCounter = (min, max) => { //Le paso mi initial y mi stock
    const [count, setCount] = useState(min)
    const handleSuma = () => {
        if (count < max) {
            setCount(count+1)            
        }
    }
    
    const handleResta = () => {
        if (count > min) {
            setCount(count-1)            
        }
    }
    
    return {
        count,
        handleResta,
        handleSuma
    }
}

## Patrones
    Nos ayuda a reutilizar y mantener codigo
    Ya sea HOC (Hig Order Components): Es una FUNCION que toma un COMPONENTE como ARGUMENTO y devuelve un NUEVO componente con una NUEVA funcionalidad
    o Render props:

## HOC


## Componente controlado    
    setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
    })