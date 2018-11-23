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
# CONECTORES

## Llamado asíncrono:
Un componente llama a otro y luego evalúan la respuesta cuándo la necesitan, no espera respuesta para poder continuar.

## Llamado sincrónico: 
El emisor espera y no sigue ejecutando hasta que recibe resultado por parte del receptor.

## Modelo Cliente / servidor: 
La comunicación va a ser siempre del cliente hacia el servidor, la diferencia en este caso con respecto a los llamados síncronos, es que el cliente no sabe exactamente quien es el servidor. Trata de la forma en que están distribuidos los componentes.

- Cliente: es  el  proceso  que  permite  al  usuario  formular  los  requerimientos  y  pasarlos  al  servidor, se le conoce con el término front-end

- Servidor: Es  el  proceso  encargado  de  atender  a  múltiples  clientes  que  hacen  peticiones  de  algún  recurso administrado por él. Al proceso servidor se le conoce con el término back-end


Las  funciones  que  lleva  a  cabo  el  proceso  servidor  se  resumen  en  los  siguientes  puntos: 

•Aceptar los requerimientos de bases de datos que hacen los clientes.  

•Procesar requerimientos de bases de datos.  

•Formatear datos para trasmitirlos a los clientes. 

•Procesar la lógica de la aplicación y realizar validaciones a nivel de bases de datos. 

## Enrutador:
Facilita la conexión entre un componente que emite un mensaje y un set de componentes que les interesa el mensaje.
El enrutador entiende el mensaje y sabe a quien le tiene que llegar.

## Difusión:
Dado un mensaje de un emisor lo difunde a muchos otros de componentes interesados.

## Colas: 
Sirve cuando tenemos un productor tiene mas velocidad que un consumidor, para eso se agenda el procesamiento de cada mensaje, por lo que el consumidor va leyendo los mensajes a la velocidad que él se lo permite.

## Pizarra/repositorio:
Está orientado a escribir o leer datos de un componente que funciona como base de datos.

## Modelo PUBSUB (Publicar-Subscribir):
Permite mandar mensaje de un componente que publica eventos a otro que se suscriba a esos eventos, sin que estos componentes se conozcan entre sí.
Se conectan a través de un bus de eventos. Importante en arquitecturas distribuidas.

# Escenarios y tácticas

Framework de diseño orieintado a atributos: Nos plantea una estructura de escenarios y tácticas donde cada escenario nos ayuda a relacionar
atributos con varias tácticas de implementacion que hablan de como la solucion mejora el atributo de calidad.

Estímulo -> Táctica para controlar la respuesta -> respuesta

Un framework: entorno de trabajo es un conjunto estandarizado de conceptos, prácticas y criterios para enfocar un tipo de problemática
 particular que sirve como referencia, para enfrentar y resolver nuevos problemas de índole similar.

Usualmente los frameworks ya traen asociadas tácticas asociadas al escenario que ayudan a resolver atributos de calidad.

## Escenarios: Disponibilidad, detección, reparación

## Escenario de disponibilidad:
En este caso el estimulo es la falla, algo pasó que compromete la disponibilidad. vamos a ver las diferentes tácticas que podemos usar para trabajar con este posible escenario.

## Detección:
En este caso contamos con varias tácticas, la primera es la de 
- ping / eco. que se trata de como un componente envía un mensaje genérico a otro componente para saber si el otro componente esta disponible o no. 

- Latido, esta táctica es similar pero en vez de que haya interacción entre dos componentes, cada uno de estos envían una señal propia que indica que continua activo. 

- Excepciones. Un método para reconocer fallas es encontrar una excepción, que se produce cuando se reconoce una de las clases de fallas.El manejador de excepciones generalmente se ejecuta en el mismo proceso que introdujo la excepción.

## Recuperación:
Como podemos estar listos para que si algo falla podamos recuperar rápidamente el sistema.

o Votación, El algoritmo de votación puede ser “reglas de mayoría” o “componente preferido” o algún otro algoritmo. Este método se usa para corregir el funcionamiento defectuoso de algoritmos o fallas de un procesador y se usa a menudo en sistemas de control.

o Redundancia activa, Cuando se produce una falla, el tiempo de inactividad de los sistemas que utilizan esta táctica suele ser de milisegundos, ya que la copia de seguridad es actual y el único momento de recuperación es el tiempo de conmutación. La redundancia activa a menudo se utiliza en una configuración cliente / servidor, como los sistemas de administración de bases de datos, donde las respuestas rápidas son necesarias incluso cuando ocurre una falla.

o Redundancia pasiva, Un componente (el primario) responde a los eventos e informa a los otros componentes (los recursos) de las actualizaciones de estado que deben realizar. Cuando ocurre una falla, el sistema primero debe asegurarse de que el estado de la copia de seguridad sea lo suficientemente reciente antes de reanudar los servicios.

o Repuesto, Una plataforma de computación de reserva en espera está configurada para reemplazar muchos componentes diferentes que fallaron. Debe reiniciarse a la configuración de software apropiada y debe tener su estado inicializado cuando ocurre una falla.

## Reintroducción:

Hay tácticas de reparación que se basan en la reintroducción de componentes. Cuando un componente redundante falla, puede reintroducirse después de haber sido corregido. Tales tácticas son el funcionamiento en la sombra, la resincronización del estado y la reversión.

o Modo sombra. Un componente previamente fallido puede ejecutarse en “modo sombra” durante un corto período de tiempo para asegurarse de que imita el comportamiento de los componentes en funcionamiento antes de restaurarlo al servicio.

o Resincronización del estado. Las tácticas de redundancia pasiva y activa requieren que el componente que se está restaurando tenga su estado actualizado antes de su regreso al servicio.

o Punto de control / retroceso. Un punto de control es una grabación de un estado consistente creado periódicamente o en respuesta a eventos específicos.

## Prevención:
Qué podemos hacer para prevenir el estado de falta de disponibilidad.
Prevención, Las siguientes son algunas tácticas de prevención de fallas.

o Remoción del servicio. Esta táctica elimina un componente del sistema de la operación para someterse a algunas actividades para evitar fallas anticipadas. Un ejemplo es reiniciar un componente para evitar que las pérdidas de memoria causen una falla.

o Transacciones. Una transacción es la agrupación de varios pasos secuenciales, de modo que todo el paquete se puede deshacer a la vez. Las transacciones se utilizan para evitar que cualquier dato se vea afectado si falla un paso de un proceso y también para evitar colisiones entre varios subprocesos simultáneos que acceden a los mismos datos.

o Monitor de proceso. Una vez que se ha detectado un error en un proceso, un proceso de supervisión puede eliminar el proceso no productivo y crear una nueva instancia del mismo, inicializado en un estado apropiado como en la táctica de repuesto.

## Escenarios: Mantenibilidad

## CONFINAR MODIFICACIONES
Aunque no existe necesariamente una relación precisa entre la cantidad de módulos afectados por un conjunto de cambios y el costo de implementar dichos cambios, restringir las modificaciones a un pequeño conjunto de módulos generalmente reducirá el costo. El objetivo de las tácticas en este conjunto es asignar responsabilidades a los módulos durante el diseño de modo que los cambios previstos tengan un alcance limitado.

Coherencia semántica -> Abstraer servicios comunes.

Generalizar -> Estabilizar los conceptos mas generales para luego pasar a los específicos.

Limitar Opciones

Anticipar cambios -> Prepararnos estrategicamente de como incorporar nuevos cambios antes de necesitarlos.


## PREVENIR EFECTOS DOMINÓ
Un efecto dominó de una modificación es la necesidad de realizar cambios en los módulos que no se ven afectados directamente por él. Por ejemplo, si se modifica el módulo A para lograr una modificación particular, entonces el módulo B se cambia solo por el cambio al módulo A. B debe modificarse porque depende, en cierto sentido, de A.

Trabaja específicamente con las dependencias. Un efecto dominó de una modificación es la necesidad de realizar cambios en los módulos que no se ven afectados directamente por él. Por ejemplo, si se modifica el módulo A para lograr una modificación particular, entonces el módulo B se cambia solo por el cambio al módulo A. B debe modificarse porque depende, en cierto sentido, de A. (Importante aplicación en Programación orientada a objetos)

-Ocultar información – Capacidad de ocultar información para no depender de esa información puntual y más bien de un interfaz visual que serpa dependiente de los cambios.

-Mantener la interfaz – Interfaz clara para entender una dependencia, un único llamado (Pasos en un cálculo de impuestos) sirve en cambios sintácticos.

-Restringir comunicación Evitar las cadenas de llamadas a objetos interminables, restringimos comunicación solamente a módulos que realmente necesitemos. (Ley de menor conocimiento)

-Intermediarios Punto de compatibilidad de un módulo con otro. (Patrón proxy, adapter, etc.)

## DIFERIR ENLACE
No enlazar las dependencias en tiempo de compilación si no en tiempo de ejecución o momento de carga del sistema, permite que estos sistemas
sean más mantenibles. Permite desplegar o compilar los componentes de forma independiente.

Diferir enlace: Cómo hacer para que un cambio en código no requiere hacer un despliegue de toda nuestra aplicación. Aplazar el tiempo de enlace es compatible con los escenarios previamente mencionados a costa de requerir infraestructura adicional para admitir el enlace tardío (Importante aplicación en Programación orientada a objetos)

-Registro en ejecución – Permite desplegar servicios independientemente.

-Archivos de configuración – Sirven para saber cómo conectar varias partes (nuestros módulos deben depender de interfaces). (arquitectura plug-ins)
	Se implementa mediante una interface.
	
-Polimorfismo – Es el que un objeto pueda comportarse de manera diferente dependiendo de su estado. (el estado “state”)
	Diferir un enlace dependiendo del estado de la instancia que se maneje variará el comportamiento.

-Remplazo de componentes – Capacidad de desplegar componentes sin necesidad de cambiar (el enlace y los componentes deben ser diferidos a la carga de la aplicación)

-Adherir a protocolos – Permite tener un protocolo claro entre dos módulos sin necesidad de conocer la instancia específica
	Definir esquemas de comunicación entre componentes que sean serializados y deserializados del otro lado. Puede ser un esquema xml, json, etc.
	Esto permite adherir a protocolos que no cambian por mas que las dependencias de componentes si han cambiado.

### Alta cohesión, bajo acoplamiento

Alta cohesion: Pocas responsabildades, muy relacionadas.
Bajo acoplamiento: Poca dependencia entre componentes.

Cohesión: La cohesión es la medida en la que un componente se dedica a realizar solo la tarea para la cual fue creado, delegando las tareas complementarias a otros componentes. (Una clase debe de hacer lo que respecta a su entidad, y no hacer acciones que involucren a otra clase ó entidad).

Acoplamiento: El acoplamiento es la medida en que los cambios de un componente tiende a necesitar cambios de otro componente. (Cuando modificamos los atributos de una clase, se tienen que modificar los atributos de otra clase.)
De ahi que debemos de buscar siempre una ALTA COHESIÓN y BAJO ACOPLAMIENTO.

## Escenarios: Eficiencia de Ejecución

Tenemos eventos, trabajamos con tácticas para controlar la eficiencia para dar una respuesta dentro del tiempo esperado. Las tácticas son 3 grandes familias:

## Demanda de recursos: 
Cuando entra un evento cómo hacemos para que tenga los recursos disponibles y cuántos de ellos necesita.

-Mejorar la eficiencia computacional: Analizar los puntos donde no estamos siendo eficientes (recorrer listas)

-Reducir sobrecarga: Cuántos pasos necesitamos para responder a un mismo evento y si podemos reducirla

-Manejar tasa de eventos: Cuántos eventos emitimos a un componente específico y saber si podemos reducir esa taza. (Filtrado de stream de datos)

-Frecuencia de muestreo: Tiene que ver con el componente consumidor. Procesamos los eventos de manera agrupada en tareas únicas.

## Gestión de recursos:
Cuántos ponemos disponibles y cómo hacemos para que estén disponibles cuando se necesitan ¿Cómo aprovechamos nuestros recursos dentro de nuestros propios recursos?

-Concurrencia: Cómo paralelizar nuestro sistema (Data science)

-Replicas: Cómo duplicamos el procesamiento o datos para mayor eficiencia (Caché, copias)

-Aumentar recursos: Poder medir y saber cuándo crecer nuestros recursos (Amazon)

## Arbitraje de recursos:
En caso de conflicto de eventos requiriendo los mismos recursos saber cómo y a quien administrar el recurso por orden de prioridad.

-Políticas de planificación de tareas: Decisión de dónde responden mis recursos ante eventos o si las postergo y agendo. Depende del orden, prioridad, entre otras cosas. (Aplicado a BD)

## Seguridad 

Nuestro estimulo de entrada es un ataque, nuestras tácticas para controlar la seguridad y tener como resultado la detección, resistencia o recuperación en nuestro sistema. Tendremos tres familias:

## Detectar ataques: 
Van a tratar de identificar que el estado actual de la aplicación está bajo un ataque, puede ser por medio de sensores.

-Detectores de intrusos: Ayuda a tener implementaciones para saber cuándo se está usando de manera no apropiada. Levantará alertas para tomar decisiones sobre nuestro sistema (pueden ser complejas, automatizadas o simples). Podremos ir descendiendo en niveles cuanto más complejo sea.

Recuperación de ataques: Trata de tener bases o tácticas para regresar a un estado basal y también poder comprender cuáles fueron las acciones del atacante para poder evitarlas a futuro

-Restauración: Cómo hacemos para entender nuestros estados del sistema y entender qué pasa con mi sistema. Es muy similar a la estrategia de Disponibilidad (estados conocidos, estados diferentes para comparar)

-Identificación: Saber qué específicamente hizo el atacante. La traza de auditoria sirve para que cuando detectamos un atacante tengamos todo el rastro de nuestro usuario y poder restablecer mi sistema a ese punto basal, ignorando lo que hizo el atacante
    Traza de auditoria: Replicar las acciones del usuario pero  no del atacante.
    
## Resistencia de ataques: 
Va a tratar que el atacante no tenga éxito.

-Autenticación: Cómo sabemos que el usuario es quien realmente die ser (Contraseñas, datos biométricos, RS, etc.)

-Autorización: Saber quién es y qué puede o no hacer esa persona (Roles entre sistemas)

-Confidencialidad de datos: Cómo garantizamos que el dato sea visto por quien debe verlo (encriptación)

-Integridad: Cómo garantizo que el mensaje es íntegro, es decir, cómo el emisor lo envió (Hashes para comprobar información)

-Limitar exposición: Si un atacante entra podemos determinar que este no pueda (por lo menos) entrar a consultar la información más sensible del usuario. Lo podemos hacer separando información (separar info sensible de info “normal”).

-Limitar acceso: Entender cuáles son los vectores de acceso y restringir lo menor posible esos accesos que pueden ser puntos iniciales de penetración (Puertos de red: 8080, SSH, etc.)

## Capacidad de prueba
Nuestro estimulo de entrada será una nueva funcionalidad para implementar, tendremos técnicas para controlar la capacidad de prueba y nuestro resultado será detectar fallas para repararla y volver a iterar. Tendremos dos grandes familias, entradas/salidas y monitoreo que tiene en cuenta más que nada la ejecución.

### Entrada/Salida: Cómo hacer para dado un estímulo de entrada, evaluar una salida.

- Captura y reproducción: Sirve para, en un escenario de comunicación, grabarla para poder usar esa comunicación en un test de prueba. De esta forma podemos garantizar que el uso normal está cubierto por un test y sabemos qué es lo que tiene que dar mi sistema. Es muy útil cuando queremos trabajar con sistemas externos. VCR (librería: video cam recording) es una herramienta muy útil aquí.

-Separar la interfaz de la implementación: De esta forma podemos evaluar si la implementación está recibiendo lo que se espera. Podemos hacer pruebas con diferentes implementaciones.
Llamados en software: Test, mocks, stubs.

-Acceso exclusivo para pruebas: Trata sobre partes de la aplicación que no podemos funcionar desde fuera de la aplicación, para esto es posible que tenga que escribir código específico para el contexto de test, es importante garantizar que no llegue a ambientes productivos.
Son útiles para probar microservicios

### Monitoreo interno: Significa incorporar a la misma aplicación funcionalidades que nos permiten tener información de lo que se está ejecutando para mantener el control de lo que está consumiendo cada aplicación
Tendrá en cuenta la ejecución y que se está ejecutando exitosamente

Monitoreo incorporado