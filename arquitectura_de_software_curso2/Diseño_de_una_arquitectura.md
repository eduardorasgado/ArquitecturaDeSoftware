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
Herramientas para poder llegar a un diseño específico de una arquitectura:

- Requerimientos | restricciones -> Entradas del proceso de diseño de la solución.
- Atributos de calidad | Estilo -> Como va a ser diseñada la sol.
- Escenarios y Tácticas | Patrones de arquitectura -> Como solucionar ciertos problemas

La arquitectura está separada en dos grandes partes:

## Tipos de componentes

Partes de nuestro sistema que cumplen funciones específicas, dentro de cada componentes hay objetos o capas que actúan como subcomponentes.

## Tipos de conectores

La forma de comunicación entre componentes.

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

----------------------------------

## Conectores: Llamado asincrónico / sincrónico. Modelo Cliente servidor.

Llamado asíncrono, un componente llama a otro y luego evalúan la respuesta cuándo la necesitan, no espera respuesta para poder continuar.

Llamado sincrónico, el emisor espera y no sigue ejecutando hasta que recibe resultado por parte del receptor.

Cliente / servidor: La comunicación va a ser siempre del cliente hacia el servidor, la diferencia en este caso con respecto a los llamados síncronos, es que el cliente no sabe exactamente quien es el servidor. Trata de la forma en que están distribuidos los componentes.

- Cliente: es  el  proceso  que  permite  al  usuario  formular  los  requerimientos  y  pasarlos  al  servidor, se le conoce con el término front-end

- Servidor: Es  el  proceso  encargado  de  atender  a  múltiples  clientes  que  hacen  peticiones  de  algún  recurso administrado por él. Al proceso servidor se le conoce con el término back-end


Las  funciones  que  lleva  a  cabo  el  proceso  servidor  se  resumen  en  los  siguientes  puntos: 

•Aceptar los requerimientos de bases de datos que hacen los clientes.  

•Procesar requerimientos de bases de datos.  

•Formatear datos para trasmitirlos a los clientes. 

•Procesar la lógica de la aplicación y realizar validaciones a nivel de bases de datos. 

--------------------------------

Conectores:

## Enrutador:
Facilita la conexión entre un componente que emite un mensaje y un set de componentes que les interesa el mensaje.
El enrutador entiende el mensaje y sabe a quien le tiene que llegar.

## Difusión:
Dado un mensaje de un emisor lo difunde a muchos otros de componentes interesados.
----------------------------------
Conectores: Pizarra, repositorio, colas, modelo PUBSUB

## Colas: 
Sirve cuando tenemos un productor tiene mas velocidad que un consumidor, para eso se agenda el procesamiento de cada mensaje, por lo que el consumidor va leyendo los mensajes a la velocidad que él se lo permite.

## Pizarra/repositorio:
Está orientado a escribir o leer datos de un componente que funciona como base de datos.

## Modelo PUBSUB (Publicar-Suscribir):
Permite mandar mensaje de un componente que publica eventos a otro que se suscriba a esos eventos, sin que estos componentes se conozcan entre sí.

