# PruebaTécnicaJMGR

Documentación correspondiente a prueba técnica con base a consumo de API, despliegue de información y funcionalidades correspondientes a su visualización.

## Datos Generales

El proposito de este proyecto tiene como objetivo el mostrar distintas funcionalidades relacionadas con el despliegue de datos. En especifico con enfasis en Listar, Filtrar y Ordenar datos. 

## Instrucciones generales
  1. Acción de filtrado accesible mediante el ingreso de caracteres de número correspondiente a id o letras del nombre del elemento o elementos que se buscan.
  2. Visualización de detalle de elemento mediante el click de la línea del elemento deseado dentro de la tabla.
  3. Ordenamiento de datos desplegados en tabla controlado mediante el click sobre el nombre del campo a ordenar (opciones de orden ascendente y descendente)
  4. Cambio de página de elementos mostrados controlado por las flechas en las parte inferior derecha de la tabla.
  5. Cambio de número de elementos desplegados controlado por la lista desplegable con la leyenda "Items per page" en la parte inferior de la tabla.
  6. Regreso de vista de detalle a página principal disponible dando click sobre el ícono en la parte superior izquierda de la aplicación.

### Versiones utilizadas

* Angular: 15.2.7
* Angular Material: 15.2.9

### API seleccionada
Se decide utilizar la API "PokeApi" siendo que esta cuenta con suficiente información dentro de los elementos individuales, con lo cual se puede demostrar el uso de las diferentes funcionalidades solicitadas. 
Link de referencia: https://pokeapi.co/

### Libreria utilizada
Se utiliza la libreria de Angular material para crear base de formato de tabla de despliegue. https://material.angular.io/components/table/examples
Se habilitan opciones de filtrado paginacion y ordenado de los datos desplegados.

## Estructura de Archivos
Se decide realizar la siguiente separacion de elementos por carpeta:
* Componentes:
  * content-table (tabla de contenidos): 
      Diseño y funcionalidad de tabla desplegando datos.
  * detail-card (Unidad de detalle):
      Diseño y funcionalidad de vista mostrando el detalle del elemento seleccionado
  * header / footer (Encabezado y pie de página):
      Diseño y funcionalidad de espacios fijos, siempre mostrados en la pantalla.

* Services:
  * pokemon-data:
      Archivo en donde se resguarda el servcicio o lógica de llamada de recopilación de datos atraves del API.
      Disponibilidad de llamada en cualquiera de los Componentes

* Assets:
  * images:
      Archivo de disposición global de imagenes utilizadas en la apicación
  * styles:
      Referencia de estilos utilizados en la aplicación. Habilita opción de cambio de colores o estilos generales o repetitivos dentro de un mismo archivo.

## Elementos costumizables
Dentro de los elementos que pueden ser modificados destaco los siguientes. Divididos por componentes:
  * content-table: (Archivo de referencia: Componentes/content-table-component.ts)
      Base principal o dashboard de aplicación. Componente con más elementos que pueden cambiar. Dentro de los que destaco:
      * Número de columnas y contenido de las mismas: Opción a agregar nuevas columnas e información que contengan. Estructura base creada y lista para reutilizarse y mostrar más datos.
      * Opción de función ordenado: Definición de habilidad de poder ordenar por un campo específico. (Se agrega propiedad mat-sort-header dentro de tag "th" correspondiente).
      * Número de opciones de elementos a desplegar: Actualmente definido en intervalos 5, 10, 25 y 50. Opción de agregar o remover opciones.
  * detail-card: (Archivo de referencia: Componentes/detail-card.component.ts)
      Vista de detalle de elemento seleccionado.
      * Número y tipo de datos desplegados como información: Plantilla preparada para ser reutilizada o removida en cuestion al número y tipo de elementos mostrados. (Información completa ya incluida en variable "pokemon", sintaxis para añadir elemento {{pokemon.propiedad}})
  * footer / header: (Dentro de carpetas Componentes/footer y Componentes/header)
      Abierto a utilizar seción en depliegue de mayor información o nuevos modulos a agregar.

## Elemetos abiertos a cambio en acciones futuras
  * Definición de todos los elementos necesarios en el despliegue de la tabla.
  * Definición de datos desplegados dentro de página de detalle.
  * Agregado de funciones o información dentro de página principal.
