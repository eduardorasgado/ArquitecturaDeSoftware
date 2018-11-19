## DISEÑO DE UNA ARQUITECTURA

Pararse en hombros de gigantes

Aprovechar el conocimiento existente para nuestra solución.

- Productos ya hechos
- Frameworks
- Arquitecturas específicas del dominio
- Patrones de arquitectura

Diseñar una arquitectura a medida de nuestras necesidades.

Herramientas  partes de un deiseño: Tipos de conectores

## Review:

- Requerimientos | restricciones -> Entradas del proceso de diseño de la solución.
- Atributos de calidad | Estilo -> Como va a ser diseñada la sol.
- Escenarios y Tácticas | Patrones de arquitectura -> Como solucionar ciertos problemas

La arquitectura está separada en dos grandes partes:

## Tipos de componentes

Partes de nuestro sistema que cumplen funciones específicas, dentro de cada componentes hay objetos o capas que actúan como subcomponentes.

## Tipos de conectores
• Llamado a procedimiento
Invocan de un componentes a otro componente y esperan una respuesta.
• Enlace
Vinculan fuertemente a un componente con otro.
• Evento
Permiten a un componente notificar que algo sucedió, y a otro componente escuchar y reaccionar.
• Adaptador
Ayudan a compatibilizar la interfaz de un componente con la de otra.
• Acceso a datos
Ayudan a acceder a recursos compartidos de datos.
• Flujo
La información está continuamente pasando y otro componente está interesado en conocer ese flujo de datos y obtener algunos o todos los estos datos.
• Arbitraje
Tiene que ver como un componente y otro se coordinan para saber quién tiene acceso a un recurso o quien hace el trabajo para distribuir los comportamientos.
• Distribuidor
Ayuda a distribuir un mensaje a muchos componentes a través de un solo conector.

El conector de evento es la comunicación entre un componente a otro, el de distribuidor es similar pero se encarga de recibir el mensaje de un componente y enviarlo a muchos componentes.

