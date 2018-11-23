# Modelado y documentación de arquitectura

## Cómo comunicar la arquitectura: Vistas y Puntos de vista

## Arquitectura restrictiva
Restringe las decisiones que quedan por tomar (por ejemplo cuándo se le da a un equipo de desarrollo)
## Arquitectura descriptiva
Documenta las decisiones tomadas y describe el estado actual del sistema, restricciones del pasado más las actuales

El arquitecto va a trabajar con diferentes personas para garantizar que la arquitectura se ejecute correctamente:

Analista: Negociación de requerimientos
Operaciones: Cálculo de recursos
Desarrolladores: Restricciones y libertades para desarrollar
Diseñadores de productos dependientes (Product Managers): Definición de interoperabilidad. Comunicación entre productos. Requerimientos de comunicación como una API. Sincronizar equipos
Gestores de proyecto (Project Manager): Gestión de equipos y recursos
Equipo de calidad (QA): Métricas y conformidad

## Documentación vs Implementación

## Modelo de Arquitectura:
Se compone de elementos tales como módulos, componentes, conetores, restricciones, estilo, patrones, atributos de calidad.

## Código fuente:
Hace referencia a paquetes, clases, interfaces, métodos, funciones, parámetros, tipos.

La “fuente de la verdad” va a ser el código y no el documento de arquitectura. Se deben buscar estrategias para sincronizar el estado actual del código con el documento de arquitectura.

Las posibles estrategias son las siguientes:

- Ignorar la divergencia:
Aplica cuando el equipo de trabajo es pequeño y mientras todos conozcan la difernecia entre el modelo de la arquitecura y la implementación consiste en mantener el documento de arquitectura tal y como se encuentra concebido, sabiendo que es lo que hace falta completar y que está en el código fuente.

- Modelado Ad-hoc:
Se tiene una idea de la diferencia entre el modelado y el código fuente, de tal forma que se puede enunciar el modelo de arquitectura a pesar de que no se encuentra en el documento.

- Modelos de alto nivel:
Se puede seguir modelando la arquitectura con modelos de alto nivel que tienden a cambiar menos y por ende, son más baratos.

- Sincronización en hitos del ciclo de vida:
Consiste en actualizar el modelo de arquitectura en algún punto del ciclo de vida de la aplicación. Permite versionar el modelo de arquitectura y saber en cada momento del proyecto cual era el estado del modelo de arquitectura.

- Sincronizar en una crisis:
Actualizar el modelo de arquitectura cuando dentro del desarrollo, el codigo fuente riñe contra alguna definición plasmada en el modelo arquitectónico.

- Sincronización constante:
Es la estrategia mas obvia, pero la menos eficiente de todas porque es la mas costosa y mas complicada de ejecutar porque es bastante complicado tener el modelo actualizado contra el código fuente.
