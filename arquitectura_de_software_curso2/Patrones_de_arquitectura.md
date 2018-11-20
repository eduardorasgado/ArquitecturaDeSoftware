## PATRONES DE ARQUITECTURA

Es la decisión de diseño para generar el tipo de comunicación de se producirá en el sistema, sus dos grandes 
exponentes son Distribuidos y Monolíticos.

Gran Bola de Lodo: Es un patrón que surge del descuido y el caos, aquellos donde no se tomo en cuenta el concepto de arquitectura, 
ni se tomaron decisiones prudentes, por tanto el sistema queda diseminado sin orden y con una comunicación ineficiente que dificulta su crecimiento.

Monolíticos: En este tipo de patrones, se entiende que existe una comunicación directa entre las partes del sistema, 
pero al distribuir dicho sistema este funciona como un ente único, esto dificulta la manutención del mismo pues no se 
pueden alterar partes especificas sin afectar al sistema en su totalidad, sin embargo, se puede desarrollar de manera mas rapida.

Distribuidos: En este caso, el patrón distribuido es aquel que despliega el sistema en forma seccionada, cada uno de los 
subsistemas funcionan como entes monolíticos de por si, esto facilita la manutención o la alteración de estos subsistemas 
sin dañar el sistema en su totalidad, sin embargo, se debe tener cuidado de generar inconvenientes de comunicación entre los subsistemas.
-----------------------------
Modelo-vista-controlador (MVC)
Es un patrón de arquitectura de software, que separa los datos y la lógica de negocio de una aplicación
de su representación y el módulo encargado de gestionar los eventos y las comunicaciones.
Para ello MVC propone la construcción de tres componentes distintos que son el modelo, la vista y el controlador, 
es decir, por un lado define componentes para la representación de la información, y por otro lado para la interacción del usuario.
Este patrón de arquitectura de software se basa en las ideas de reutilización de código y la separación de conceptos, 
características que buscan facilitar la tarea de desarrollo de aplicaciones y su posterior mantenimiento.

Vista: la UI donde el usuario interactúa.
Controlador: Cuando el usuario hace alguna acción como mandar un formulario o presionar sobre un enlace en la vista, 
la acción la toma el controlador, sirve para procesar la lógica y ser el intermediario entre el modelo y la vista (hay excepciones).
Modelo: Es el encargado de estar en contacto con las Bases de datos y devolver información, normalmente en MVC al controlador,
excepto en casos donde se maneja model-view view-model.

Variaciones más comunes del patrón Modelo Vista Controlador:

    Model / View / ViewModel
    Model / View / Presenter
    Flux

---------------------------
Patron de Arquitectura de capas

Al pensar en un sistema en términos de capas, se imaginan los principales subsistemas de software ubicados de la misma forma 
que las capas de un pastel, donde cada capa descansa sobre la inferior.

A continuación se describen las tres capas principales de un patrón de arquitectura por capas:

1. Capa de Aplicación: Referente a la interacción entre el usuario y el software. Puede ser tan simple como un menú basado en 
líneas de comando o tan complejo como una aplicación basada en formas.

2. Capa de Lógica de Dominio: Esta capa contiene la funcionalidad que implementa la aplicación. Involucra cálculos basados en 
la información dada por el usuario y datos almacenados y validaciones. Controla la ejecución de la capa de acceso a datos y servicios externos.

3. Capa de Datos: Esta capa contiene la lógica de comunicación con otros sistemas que llevan a cabo tareas por la aplicación. 
Generalmente está representada por una base de datos, que es responsable por el almacenamiento persistente de información.
-------------------------------
Arquitectura dirigida por eventos (Event-driven architecture o EDA):

Es un patrón de arquitectura software que para orquestar su comportamiento se centra en torno a la producción, detección, consumo y 
respuestas ante “eventos”. Teniendo en cuenta que un evento es: cualquier ocurrencia identificable que tiene un significado para el 
hardware o el software del sistema, en otras palabras, cualquier cambio de estado significante para el sistema. Y a su vez este cambio de estado 
puede ser conocido por otras aplicaciones en la arquitectura, o sea, que cada evento se propaga de manera inmediata a otras partes del sistema
 en la medida que sea necesario.

En esta arquitectura:

Los componentes van a publicar eventos a un bus común y esos componentes vas a estar suscritos a ese bus de eventos para recibir y transmitir 
eventos. En este caso, el bus de eventos es el único medio de comunicación entre componentes. Tendremos productores y consumidores de eventos. 
En general las arquitecturas orientadas a eventos suelen ser eventualmente consistentes (va a responder hasta que se distribuya en todos los 
componentes), sin embargo, será difícil testear ya que tendremos que usar sí o sí el bus de eventos y eso lo hace más complejo.

Hay un concepto llamado EventSourcing esta va a tener guardados eventos que nos importan para entender el estado del sistema y se van a leer 
secuencialmente. Y esto nos permitirá saber el estado actual del sistema y también en cualquier momento del tiempo (potente para logs de 
auditoria, incluso recuperarse de ataques). Pero presenta varios desafíos como el consumo de recursos por una acumulación de estados. 
(Un ejemplo puede ser un registro de transacciones en una cuenta de banco).

Toda arquitectura tendrá beneficios y consecuencias.
-------------------------------

Microkernel - Plug-ins
Esta arquitectura esta compuesta por 2 componentes, el sistema core y los modulos plug-in. El core contiene la minima funcionalidad y 
los módulos plug-in son componentes autónomos e independientes que contienen procesamiento especializado, características adicionales 
y código personalizado que está diseñado para mejorar o ampliar el sistema central para producir capacidades empresariales adicionales. 
Generalmente, los módulos plug-in deben ser independientes de otros módulos plug-in, pero ciertamente puede diseñar plug-ins que requieran 
que otros plug-ins estén presentes. De cualquier manera, es importante mantener la comunicación entre plug-ins a un mínimo para evitar 
problemas de dependencia.

Cuando leemos esto lo primero que se nos viene a la mente es OSGi, porque este estándar nació para darle soporte a este tipo de arquitecturas 
y el ejemplo más significativo de esta arquitectura sea eclipse.

https://www.oreilly.com/ideas/software-architecture-patterns/page/4/microkernel-architecture
-----------------------------

Patrones: Comparte-Nada
Compartir recursos entre diferentes componentes agrega mucha complejidad a la hora de decidir prioridades o disponibilidad del componente, 
entonces se busca crear que NO se tenga punto de unión entre componentes. Esta arquitectura es muy potente al procesar la información 
ya que al separar los componentes se puede enfocar en el fallo por que cada componente hace uso único de los recursos de dicho sistema.

Comparte nada vs Comparte todo (inglés)

Shared-Nothing/Shared-Everything as patterns in Distributed or Parallel Computing

Parallel computing is about taking a big problem and breaking it down into lots of smaller pieces, so that each piece fits within one computing 
unit (e.g., machine or node). When you try to do this for different problems, you quickly discover that they prefer to fall into two groups: 
A and B. For Group A, each node can work on its piece of the problem without having to exchange data with other nodes (except some combine 
operation at the end). For Group B, it's the opposite: each node finds that it must talk to others during the computation. 
Now it turns out that there are ways to squint at the problems a certain way to make Group-A problems look like Group-B, and vice versa, 
but still, they naturally fall into these groups. Examples:

    Take a billion lines of text and output the number of letters of each line. It's pretty clear that there's no need to look at any other 
	lines while working with line #20,745. So this easily belongs to Group A.
    Compute the full covariance matrix for 1 billion vectors. For every vector i I'm working on, I would somehow want to get access to all the 
	other vectors to compute their covariances. This looks more like a Group B problem. It turns out you could make this a Group A problem, 
	e.g., by distributing copies of all the vectors to each node's local storage.

So now as an architect of a particular distributed-processing system, you face this question: should I make the world look like A, or B? 
The correct answer, as it often is, is "it depends". A major consideration is the trade-offs between compute and communication costs. 
Cost here may mean required bandwidth, latency, or energy. If the cost of communication between node is high, you want to minimize 
any such communication, leading to a preference for a Shared-Nothing architecture. Group A problems can easily be solved in a 
Shared-Nothing architecture, since no node-to-node communication is needed during the computation.

If on the other hand, such communication is cheap (e.g., the nodes are different cores on the same physical machine, and they can all 
access any part of main memory equally cheaply), then perhaps a Shared-Everything architecture is preferred.

This trade-off is very real. As of this writing, MapReduce (read "Shared-Nothing", or more generally, the "Monte Carlo" pattern among the 13 
Dwarfs; see The Landscape of Parallel Computing Research: A View from Berkeley) is the strongly preferred distributed-computing pattern, 
because network latency & congestion are the bottleneck relative to main memory and local storage. In next-generation data center architectures, 
there is a shift to massively faster and less-congested data-center fabric that would shift many compute problems toward a preference for 
Shared-Everything.
https://www2.eecs.berkeley.edu/Pubs/TechRpts/2006/EECS-2006-183.html

Shared Memory (variation 1: single machine, multiple processes)
This is best thought of as a particular instantiation of the Shared-Everything architecture, and it's been around forever. 
In this version, multiple processes or threads access local memory in a ... shared manner. The use cases for this goes beyond 
parallel computing; shared-memory has been used as a way for different processes on Unix to communicate with each other, passing 
data from one task with one responsibility to another with some other responsibility.

More recently, in GPU-based parallel-computing architectures, there is increasing use of a computing unit with hundreds or thousands 
of GPU cores, all accessing the same (large) main memory. Deep Learning is one major application of this architecture.

Shared Memory (variation 2: multiple machines)
Even though network latencies are still high relative to main memory and even (some) local storage, that hasn't stopped people from 
wanting to have the ability for one node to access data in the memory of another node. In some of these cases, the "simplicity" of being 
able to perform such access naturally outweigh the cost of the network delays.  Technologies like RDMA (Remote direct memory access) 
have been developed to make this more palatable.
https://en.wikipedia.org/wiki/Remote_direct_memory_access

As implied earlier, when data-center network fabric gets to a point where it's sufficiently faster than local storage, we'll see a prevalence 
of warehouse-scale computing (The Datacenter as a Computer: An Introduction to the Design of Warehouse-Scale Machines) with shared memories 
across machines.

Shared Storage
This is largely orthogonal in concept to the above, although it's all part of the distributed-systems word cloud. Shared Storage is 
about recognizing the economies and other advantages of pooling storage together into a common resource, and allowing machines anywhere 
on the network to access this shared resource. This started with distributed file systems such as NFS/DFS/Andrew in the 80's and has 
evolved into SANs/NAS/virtualized storage systems of today.
------------------------------------

Microservicios

El enfoque tradicional del desarrollo de las aplicaciones se concentraba en el diseño monolítico, en que todas las partes de la aplicación 
que pueden implementarse se encuentran en esa misma aplicación. La desventaja es que mientras más grande sea, más difícil y tardado 
resulta solucionar los problemas y agregarle nuevas funciones. El enfoque de microservicios para el diseño de aplicaciones ayuda a 
resolver estos problemas y a impulsar el desarrollo y la capacidad de respuesta.

Qué son los microservicios?

Los microservicios son un estilo de arquitectura y, a la vez, un enfoque para escribir software. Con los microservicios, las aplicaciones 
se descomponen en sus componentes más pequeños, y son independientes entre sí. A diferencia del enfoque tradicional y monolítico en que 
todo se crea en la misma pieza, los microservicios están separados pero funcionan juntos para llevar a cabo las mismas tareas. 
Cada uno de los componentes o procesos es un microservicio. Este enfoque para el desarrollo de software privilegia el nivel de detalle 
y autonomía, porque es liviano y ofrece la capacidad de compartir un proceso similar en varias aplicaciones.


¿Pero cuáles son las ventajas de utilizar una infraestructura de microservicios? En pocas palabras, el objetivo es ofrecer software de calidad más rápidamente. Para eso sirven los microservicios, pero es necesario considerar otras cuestiones. Dividir las aplicaciones en microservicios no es suficiente; es necesario administrarlos, coordinarlos y gestionar los datos que crean y modifican.

Microservices are an architectural approach to building applications. What sets a microservices architecture apart from more traditional, monolithic approaches, is how it breaks down an app into its core functions. Each function is called a service, and can be built and deployed independently, meaning individual services can function (and fail) without negatively affecting the others.

So, a microservice is a core function of an application and it runs independent of other services, but a microservices architecture is about more than just the loose coupling of an app’s core functions—it’s about restructuring development teams and interservice communication in a way that prepares for inevitable failures, future scalability, and new feature integration.

How is this achieved? By adapting the basics of a service-oriented architecture (SOA) to deploy microservices.

Enter the service-oriented architecture, which structures apps into discrete, reusable services that communicate through an enterprise service bus (ESB). In this architecture, individual services, each organized around a specific business process, adhere to a communication protocol (like SOAP, ActiveMQ, or Apache Thrift) to share themselves through the ESB. Taken together, this suite of services, integrated through an ESB, comprises an application.

On the one hand, this allows services to be built, tested, and tweaked simultaneously—no more monolithic development cycles. On the other hand, though, the ESB represents a single point of failure for the entire system—so in a way, the effort to eliminate the monolith only created a new one: the ESB, which could potentially bottleneck the whole organization.

More at: https://www.redhat.com/es/topics/microservices/what-are-microservices
----------------------------------------------------------

CQRS:
La segregación de responsabilidades de consultas y comandos (CQRS), Es un estilo de arquitectura que separa las operaciones de lectura 
de las operaciones de escritura.

Los comandos, Deberían basarse en tareas, en lugar de centrarse en datos. (“Reservar habitación de hotel” y no 
“Establecer ReservationStatus en Reservado”). Los comandos se pueden colocar en una cola para un procesamiento asincrónico, 
en lugar de que se procesen de forma sincrónica.

Las consultas, Nunca modifican la base de datos. Una consulta devuelve un DTO que no encapsula ningún conocimiento del dominio.
--------------------------------------------

Arquitectura Hexagonal

La arquitectura hexagonal, es un estilo de arquitectura que mueve el foco de un programador desde un plano más conceptual hacia 
la distinción entre el interior y el exterior del software. 
  core domain | domain | application | framework

La parte interior son los casos prácticos y el modelo domain está construido sobre ello. La parte exterior es UI, base de datos, 
mensajería, etc. La conexión entre el interior y el exterior es mediante puertos, y su implementación equivalente se conocen como adaptadores. 
Por esta razón, este estilo de arquitectura se conoce habitualmente como Puertos y Adaptadores.

¿Qué beneficios tiene?

Principalmente y fundamentado en el hecho del desacoplamiento, tenemos beneficios directamente en forma de:

    Alta testabilidad (Aplicación del Principio de Inversión de Dependencias (DIP) de SOLID para la interacción del dominio con el resto 
	de elementos)
    Alta tolerancia al cambio (Principio de Abierto/Cerrado (OCP) de SOLID derivado de la aplicación del DIP)
    Alta reutilización de código debido a la división estricta de responsabilidades a nivel de Application Services y Domain 
	Services (Principio de Responsabilidad Única (SRP) de SOLID)

A su vez, también cabe destacar el hecho de que, al estar basada en los contratos establecidos por los puertos que definamos, 
nos permite postponer decisiones a nivel de implementación (qué adaptador implementaremos para ese puerto). Esto facilita el 
desarrollo dirigido por test (TDD) ya que nos podemos centrar en la clase que estamos desarrollando sin necesidad de implementar sus 
colaboradores en ese estricto momento. 

ver mas en: https://codely.tv/blog/screencasts/arquitectura-hexagonal-ddd/
------------------------------------

Domain Driven Development o Diseño Dirigido Por Dominio

Este enfoque para desarrollo de software definido por Eric Evans en su libro Domain-Driven Design: Tackling Complexity in the
Heart of Software, en el que expone un modelo rico, expresivo y en constante evolución que busca resolver problemas del dominio 
de una forma semántica.

Lenguaje común -> dominio

Contextos delimitados

DDD  o  diseño  dirigido  por  el  dominio  es tanto una manera de pensar como un conjunto 
de  prioridades,  con  el  objeto  de  acelerar  el desarrollo de proyectos de software que deben 
lidiar con dominios complicados.
Se  entiende  por  dominio  del  software  a  todo aquello   que   está   relacionado   con   alguna 
actividad   relevante   para   el   usuario   y   su negocio. 

DDD no es una tecnología ni una metodología, es una técnica que está estructurada por varias prácticas que podrán ayudarte a tomar 
decisiones de diseño con el fin de enfocar y acelerar el manejo de dominios complejos durante el desarrollo de proyectos digitales.

Debe existir una estrecha relación entre los desarrolladores y los expertos del dominio. El conocimiento profundo del dominio es esencial, 
al igual que la colaboración con los expertos de desarrollo durante la vida del proyecto; esto evitará malos entendidos entre las partes 
del equipo y ofrecerá la oportunidad de obtener un conocimiento más profundo del dominio.
------------------------------------------

CLASE DE IMPLEMENTACION DE DISTINTAS ARQUITECTURAS

-----------------------------------------

Modelo Vista Controlador:
Componente servidor: Monolítico.
Fácil de desplegar. Múltiples frameworks disponibles.

Capas:
Componente servidor: Monolítico.
Fácil de desplegar. Buena abstracción del dominio.

Comparte-nada
Componente Proceso de reportes:
Distribuído. Buen uso de recursos. Capacidad de procesamiento paralelo.

Basada en eventos:
Componente Proceso de reportes:
Distribuído. Buen uso de recursos. Capacidad de procesamiento paralelo.

Microservicios
Arquitectura completa:
Distribuído. Mayor disponibilidad y modularidad.

Provisión de eventos
Componente Servicio de reportes:
Monolítico. Permite construir consultas históricas con facilidad

Separación de Consultas y Comandos
Componente servicio prestadores: Monolítico. Mejora la modularidad y se integra bien con la provisión de eventos.

--------------------------
