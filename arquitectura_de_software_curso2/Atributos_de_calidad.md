##	ATRIBUTOS DE CALIDAD
-----------------------------------------------------
La Idoneidad Funcional tiene que ver con la conexión del usuario (tareas u objetivos a resolver con el sistema) y como están implementadas funcionalmente en dicho sistema. Se puede dividir en 3 partes:

    Completitud funcional: cuan completa esta la implementación con respecto a lo que se espera del sistema. Requerimientos Funcionales vs Funcionalidades implementadas
    Exactitud funcional: cuan preciso es el sistema para implementar lo requerido. Resultados Esperados vs Resultados Obtenidos
    Pertinencia funcional: cuan alineado esta lo que se implemento con lo requerido. Objetivos Cumplidos vs Objetivos Esperados

-----------------------------------------------------
Eficiencia de Ejecución:
Trata de que tan eficiente es el sistema a la hora de responder y del propio sistema, como aprovecha o desaprovecha los recursos.

Se divide en 3 partes cada una con atributos que deben ser comparados entre si:

    Tiempo de comportamiento: Tiempo transcurrido entre: Pedido vs Respuesta y Tiempo esperado vs Tiempo máximo tolerado.

    Uso de recursos: Consumo de recursos vs Consumo esperado.

    Capacidad: Límite de tolerancia detectado vs Límite de tolerancia esperado

-----------------------------------------------------
Compatibilidad:
Grado en el cual un producto, sistema o componente puede intercambiar información con otros productos, sistemas o componentes, y / o realizar las funciones requeridas, 
mientras comparte el mismo entorno de hardware o software.

Esta característica se compone de las siguientes subcaracterísticas

- Interoperabilidad: Grado en el cual dos o más sistemas, productos o componentes pueden intercambiar información y usar la información que se ha intercambiado.

- Coexistencia: Grado en el cual un producto puede realizar sus funciones requeridas de manera eficiente mientras comparte un entorno y recursos comunes con otros
		 productos, sin impacto perjudicial en ningún otro producto.

-----------------------------------------------------
Usabilidad:
Grado en el cual un producto o sistema puede ser utilizado por usuarios específicos para alcanzar objetivos específicos con efectividad, 
eficiencia y satisfacción en un contexto de uso específico. Esta característica se compone de las siguientes subcaracterísticas:

• Reconocimiento de idoneidad. Grado en el cual los usuarios pueden reconocer si un producto o sistema es apropiado para sus necesidades.
Ej: Appro. recog: Wordpress usado para cualquier cosa que no sea blog.

• Curva de aprendizaje. Grado en que un producto o sistema puede ser utilizado por usuarios específicos para lograr objetivos específicos de aprender 
a utilizar el producto o sistema con efectividad, eficiencia, ausencia de riesgo y satisfacción en un contexto de uso específico.

• Protección de errores. de usuario Grado en el que un sistema protege a los usuarios contra errores.
EJ: Sistemas de pago, incertidumbre en el estado del pago.

• Estética de la interfaz de usuario. Grado en el cual una interfaz de usuario permite una interacción agradable y satisfactoria para el usuario.
Ej: UI vs UX.

• Accesibilidad. Grado al cual un producto o sistema puede ser utilizado por personas con la más amplia gama de características y capacidades para alcanzar un objetivo específico en un contexto de uso específico.
Ej: imágenes con texto, sin alt. Contenido redundante o mal marku.
Ej: Lenguaje de gestos en aplicaciones móviles.

• Operabilidad. Grado en el cual un producto o sistema tiene atributos que hacen que sea fácil de operar y controlar.
Ej: Formularios largos o de múltiples pasos. Sistemas gubernamentales.
-----------------------------------------------------
Confiabilidad
Atributos que tienen que tienen que ver con el uso normal del sistema a través del tiempo:
• Madurez, El grado en que un sistema, producto o componente satisface necesidades de confiabilidad bajo operación normal.
Ej: Sistemas de compras. Sistemas bancarios.

• Disponibilidad, Grado en el cual un sistema, producto o componente es operacional y accesible cuando se requiere su uso.
Ej: SLAs, contratos de servicio. Sistemas con eventos de carga pico puntuales.

• Tolerancia a fallos, Grado en el que un sistema, producto o componente funciona según lo previsto a pesar de la presencia de fallas de hardware o software.
Ej Aplicaciones móviles.

• Capacidad de recuperación, Grado en el que, en caso de interrupción o falla, un producto o sistema puede recuperar los datos directamente afectados y restablecer el estado deseado del sistema.
Ej Sistemas distribuidos, configuraciones auto-escalables en la nube. Puede estar conectado a la mantenibilidad.
-----------------------------------------------------
Seguridad:
Es grado en que un producto o sistema protege la información y los datos para que las personas u otros productos o sistemas tengan el grado
de acceso a los datos apropiado para sus tipos y niveles de autorización. Esta característica se compone de las siguientes subcaracterísticas:

• Confidencialidad, Grado en el cual un producto o sistema asegura que los datos solo sean accesibles para aquellos autorizados a tener acceso.
Ej: Redes sociales.

• Integridad, Grado en el que un sistema, producto o componente impide el acceso no autorizado o la modificación de programas o datos de computadora.
Ej: Sistemas bancarios.

• Comprobación de hecho, Grado en que se puede demostrar que las acciones o eventos tuvieron lugar, para que los eventos o acciones no puedan ser repudiados más tarde.
Ej: Firmas digitales. Logs de auditoría.

Autenticidad, Grado en el cual se puede probar que la identidad de un sujeto o recurso es la reclamada.
Ej: Autenticación de 2 factores. Correo electrónico, número de teléfono. Datos biométricos.

• Traza de responsabilidad, Grado en el que las acciones de una entidad se pueden rastrear de manera única a la entidad.
Ej: Logs de auditoría.
-----------------------------------------------------
Mantenibilidad
Esta característica representa el grado de efectividad y eficiencia con la que un producto o sistema puede ser modificado para mejorarlo,
corregirlo o adaptarlo a los cambios en el entorno y en los requisitos. Esta característica se compone de las siguientes subcaracterísticas:

• Modularidad, Grado en el cual un sistema o programa de computadora se compone de componentes discretos tales que un cambio en un
componente tiene un impacto mínimo en otros componentes.
Ej: Patrones de arquitectura. Sistemas distribuídos.

• Reusabilidad, Grado en el cual un activo puede ser utilizado en más de un sistema, o en la construcción de otros activos.
Ej: Código de código abierto.

• Analizabilidad, Grado de efectividad y eficiencia con el cual es posible evaluar el impacto en un producto o sistema de un cambio intencional
a una o más de sus partes, o diagnosticar un producto por deficiencias o causas de fallas, o identificar partes a ser modificadas .
Ej: Conexión entre código y requerimiento (pepinillo)

• Modificabilidad, Grado en que un producto o sistema puede ser modificado de manera efectiva y eficiente sin introducir defectos o degradar la calidad del producto existente.
Ej: Cobertura de código en tests.

• Testabilidad, Grado de eficacia y eficiencia con el que se pueden establecer los criterios de prueba para un sistema, producto o componente 
y se pueden realizar pruebas para determinar si se han cumplido esos criterios.
Ej: Funciones puras: ayuda efectos secundarios. Principio de responsabilidad única. Buenas prácticas de diseño.

Portabilidad:
Grado de eficacia y eficiencia con el que un sistema, producto o componente puede transferirse de un hardware, software u otro entorno operacional o de uso a otro. 
Esta característica se compone de las siguientes subcaracterísticas:

• Adaptabilidad, Grado en el cual un producto o sistema puede ser adaptado efectiva y eficientemente para hardware, software u otros entornos operacionales 
o de uso diferentes o en evolución.
Ej: Arquitecturas específicas de dominio. Abstracción y separación.

• Instalabilidad, Grado de eficacia y eficiencia con el que un producto o sistema puede instalarse y / o desinstalarse con éxito en un entorno específico.
Ej: Tiendas de aplicaciones.

• Reemplazabilidad, Grado en el cual un producto puede reemplazar otro producto de software especificado para el mismo propósito en el mismo entorno.
Ej: Sistemas distribuidos. Microservicios.
----------------------------------
Tensión entre atributos
En síntesis, es imposible dar una solución que aproveche el 100% de las capacidades de todos los atributos de calidad. Cuando se prioriza un atributo de calidad pierde 
capacidades de otros. Está dentro las labores del arquitecto definir qué atributo se le dará prioridad y asumir cuales otros van a perder su capacidad. 
Ese ejercicio es conocido como trade off.
------------------------------
Atributos de calidad

Confiabilidad:

    Madurez.
    Disponibilidad.

Seguridad:

    Autenticidad.
    Confidencialidad.

Compatibilidad:

    Interoperabilidad.

Atributos de calidad en crecimiento

Eficiencia de ejecución:

    Uso de recursos.
    Capacidad.

Compatibilidad:

    Interoperabilidad

Seguridad:

    Comprobación de hechos.
    Traza de responsabilidad.
    Confidencialidad.

Atributos de calidad Gran escala

Usabilidad:

    Accesibilidad.
    Reconocimiento de idoneidad.
    Operabilidad.

Mantenibilidad:

    Modularidad.
    Capacidad de prueba.
    Capacidad de modificación.

Confiabilidad:

    Tolerancia a fallos.
    Capacidad de recuperación.
-------------------------------------
