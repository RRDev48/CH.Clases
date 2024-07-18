# Project Title

Curso de Javascript
Ejemplo de sistema electoral

## Authors

- ASC/PUC KRUJOSKI, Saúl (Profe en Coderhouse)

## Documentation

El presente contiene una aplicación general de conceptos de objetos, arrays, DOM y Storage que pueden replicar para aplicar en sus proyectos, personalemnte está orientado a un sistema similar al de un carrito de compras, para responder consultas generalizadas al respecto.

## Conceptos abordados

* Control de flujos con la implementación de sentencias IF, IF-ELSE y FOR
* Uso de objetos y clases para definir los datos que se usarán para identificar a un candidato y a un registro del escrutinio.
* Implementación de funciones de orden superior como forEach y find para obtener objetos o recorrerlos dentro de un array
* Uso de Suggar sintax, operador ternario y operador OR para reducir código
* Imlementación de storage para el almacenamiento y recuperación de información en memoria del navegador.
* Implementación de funciones para definir responsabilidades específicas reutilizables en otras partes del proyecto.

## Feedback

Este proyecto es solamente de uso para ejemplo de clase, su estructura no puede ser o debiera ser tomada necesariamente como propuesta para un proyecto real.

## Used By

Este proyecto puede ser usado por los alumnos de la comisión 47060 o quién pueda aprovecharlo, para tener guías básicas de cómo abordar los conceptos que en este se intentan transmitir.

Debiera ser acompañado junto al video de la clase en cuestión y el materíal teórico complementario.

## ¿Cómo usarlo?

El proyecto como se menciona arriba, es usado como una muestra de implementación para manipular objetos y sus cantidades (similar a un carrito de compras).

Para comprender el proceso propuesto, el proyecto cuenta con dos páginas html, en el index, te encontraras con candidatos presidenciales, y en la segunda opción, los resultados de un simulador de escrutinio electoral. Ambas páginas cuentan con un menú de navegación para permitir el fácil acceso a ambas.

En el index podrás ver una lista de candidatos y sus partidos, generados con DOM y una colección mockeada, proceso que se desarrolla de forma dinámica. Cada tarjeta de cada candidato cuenta con un botón para indicar que votas por él o ella. Al accionarlo se ejecuta una serie de procesos que te llevaran como resultado a una lista de candidatos y sus votos en el local storage.

La página de resultados, tiene un controlador que recuperará los datos almacenados en el local storage y los presentará en pantalla, listando a cada candidato, su partido y los votos obtenidos.

## ¿Qué relación tiene esto con un carrito de compras?

Te preguntaras, ¿qué relación tiene esto con un carrito de compras?; pues bien; veras, aquí tenemos que plantearnos el escenario del carrito: Un carrito de compras contiene una lista de productos sin repetirse, con sus respectivos precios unitarios, cantidades añadidas y subtotales.

Además, un carrito, no contiene productos, contiene detalles de una factura (o ticket, como prefieras llamarlo), la cual está compuesta por el producto en sí, la cantidad, el precio unitario y quizás otros datos. Y el producto, por sí solo, representa a ese concepto, aislado, nombre, categoría, marca, precio unitario, cantidad en stock, etc.

Entonces, para entender este ejemplo, sin haber realizado el trabajo por ti, este escenario plantea un proceso muy similar. Un candidato es algo parecido a un producto, tiene nombre, partido, URL de su imagen publicitaria, el color de su partido, entre otros, y escrutinio, viene a ser similar a un detalle de factura, está relacionado un candidato, pero tiene información complementaria, como la cantidad de votos.

El código te proporcionará información complementaria para entender el proceso paso a paso, comienza por el index.html

## Quieres más

Si quieres sumar en la página del index.html un opción para ver detalles del candidatos (como por ejemplo la cantidad de votos que obtuvo hasta el momento), puedes seguir el ejemplo del proyecto que compartí en el chat general el lunes luego de clase.
