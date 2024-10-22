<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Técnicas de cierre de ventas

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='')

    p El cierre de una venta no solo significa finalizar una transacción, sino también establecer un compromiso de acompañamiento continuo con el cliente. Este compromiso perdura más allá del momento de la venta y genera beneficios significativos para ambas partes: para el cliente, porque recibe apoyo en su decisión de compra; para el vendedor, porque fortalece la fidelidad del cliente; y para la empresa, porque incrementa sus ingresos. Hacer este cierre tienen un orden y se recomiendan las metodologías de trabajo AIDA, SPIN y algunas técnicas adicionales a tener en cuenta que se explicarán a detalle.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1. Técnica de cierre de ventas AIDA

    p.mb-5 El modelo AIDA, que significa Atención, Interés, Deseo y Acción, es una de las técnicas más antiguas y efectivas en el campo de las ventas. Esta técnica fue desarrollada por el instituto Alexander Hamilton en los Estados Unidos y se estructura en cuatro etapas clave:

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-11(data-aos="fade-right")
        ImagenInfograficaB.color-acento-botones.mb-3.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-02-01.svg', alt='Texto que describa la imagen')

          div(x="15%" y="61%" tooltip="")
            p En cualquier estrategia de ventas, captar la atención del cliente es crucial, especialmente en los primeros segundos de interacción (no más de 5 segundos). La primera impresión, ya sea visual o auditiva, puede determinar el éxito de la venta.
            p #[b Estrategias para captar la atención:]
            p.mb-0 #[b Halagos:]  reconocer al cliente como un valioso miembro del mercado, por ejemplo: Usted ha sido seleccionado para esta oferta porque es uno de nuestros mejores clientes.
            p.mb-0 #[b Agradecimientos:] comenzar la conversación con un agradecimiento sincero, como: “Gracias por atender mi llamada.”
            p.mb-0 #[b Generar curiosidad:] formular preguntas que despierten el interés, como: “¿Conoce todos los beneficios de su tarjeta de crédito?”
            p.mb-0 #[b Impresionar:] presentar al vendedor como un aliado para resolver problemas, lo que puede aumentar la confianza del cliente.
            p.mb-0 #[b Resaltar novedades:] introducir innovaciones o características únicas del producto para despertar el interés inicial.
          
          div(x="42.3%" y="20%" tooltip="Ver más")
            p Los siguientes 10 segundos son esenciales para mantener el interés del cliente. Aquí, el vendedor debe comunicar los beneficios del producto o servicio de manera clara y directa.
            p.mb-0 #[b Estrategias para generar interés:]
            p.mb-0 #[b Reconocimiento de la necesidad:] ayudar al cliente a identificar sus necesidades y cómo el producto puede satisfacerlas.
            p.mb-0 #[b Sugerencia:] indicar de manera sutil las ventajas del producto, generando así una curiosidad que lleve al cliente a hacer más preguntas.

          div(x="57.8%" y="82.2%" tooltip="Ver más")
            p Una vez captada la atención e interés del cliente, el siguiente paso es transformar ese interés en un deseo tangible de adquirir el producto. Esto se logra mediante la construcción de credibilidad en el producto, la empresa y el vendedor.
            p #[b Estrategias para despertar el deseo:]
            p.mb-0 #[b Explicación detallada:] proporcionar información exhaustiva sobre las características del producto, condiciones de venta, formas de pago, etc.
            p.mb-0 #[b Resaltar beneficios:] comparar el producto con alternativas en el mercado, destacando las ventajas competitivas.

          div(x="84.8%" y="38.9%" tooltip="Ver más")
            p Esta es la fase donde se logra la conversión del cliente potencial en un cliente real, culminando el proceso de venta.
            p #[b Estrategias para inducir la acción:] 
            p.mb-0 #[b Evitar presión:] es fundamental no presionar al cliente, ya que esto puede generar rechazo y obstaculizar el cierre.
            p.mb-0 #[b Justificar la compra:] explicar claramente cómo el producto satisface la necesidad específica del cliente.
            p.mb-0 #[b Solicitar la compra:] incitar al cliente con frases motivadoras, como: “Su salud es lo más importante y debe empezar a pensar en usted. 

        .row.mt-5.mb-3.justify-content-center
          .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema1/img-02-02.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11(data-aos="fade-down-right")
        .cajon.color-primario.p-4(style="background-color:#FFFAC1")
          p.mb-0 Con el tiempo, a la técnica AIDA se le ha añadido una "D" adicional, convirtiéndose en AIDDA, donde la nueva "D" significa #[b “demostración”.] Esta etapa implica mostrar al cliente las ventajas y beneficios del producto a través de demostraciones prácticas, incrementando así su deseo de compra. 

    p.mb-5 De una forma de representación gráfica viable se obtiene que el modelo AIDA se presenta como un embudo en el que los prospectos van ingresando y poco a poco van pasando las etapas del método, es probable que no todos los prospectos de cliente pasen todo el embudo:

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-11(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.mb-3.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-03-01.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="50%" y="9%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") La presentación gráfica del modelo ayuda a entender que no todos los prospectos de clientes pasarán por todas las fases del modelo.
          
          .tarjeta.color-acento-botones.p-3(x="13%" y="24%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") En cualquier estrategia de ventas, captar la atención del cliente es crucial, especialmente en los primeros segundos de interacción (no más de 5 segundos). La primera impresión, ya sea visual o auditiva, puede determinar el éxito de la venta.
            
          .tarjeta.color-acento-botones.p-3(x="25.2%" y="59%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Una vez captada la atención e interés del cliente, el siguiente paso es transformar ese interés en un deseo tangible de adquirir el producto. Esto se logra mediante la construcción de credibilidad en el producto, la empresa y el vendedor.

          .tarjeta.color-acento-botones.p-3(x="69.5%" y="77.2%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Esta es la fase donde se logra la conversión del cliente potencial en un cliente real, culminando el proceso de venta.

          .tarjeta.color-acento-botones.p-3(x="80%" y="41.7%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Los siguientes 10 segundos son esenciales para mantener el interés del cliente. Aquí, el vendedor debe comunicar los beneficios del producto o servicio de manera clara y directa.

        .row.mt-5.mb-3.justify-content-center
          .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema1/img-03-02.svg', alt='Texto que describa la imagen')
      
        p.mb-5 El siguiente es un ejemplo de lo que puede ser un AIDA en un caso real:

    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Escenario

    .row.justify-content-center.mb-3(data-aos="zoom-in")
      p Un cliente entra en una pastelería y muestra interés en los pasteles, pero no está seguro de qué comprar para una celebración familiar.
      .col-lg-5.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema1/img-04.svg', alt='Imagen decorativa')
      .col-lg-7.col-12.mb-3
        LineaTiempoD.color-secundario.linea-tiempo-edit.mb-4(data-aos="zoom-in-down")
          p.text-small(numero="1" titulo="Atención") El vendedor saluda al cliente con una sonrisa y dice: <br><br> “¡Bienvenido! ¡Es un placer tenerle aquí! Tenemos una promoción especial en nuestros pasteles gourmet hoy. ¿Ha visto nuestros nuevos sabores exclusivos?” <br><br> #[i (Esta introducción capta la atención del cliente al destacar algo especial y relevante para su visita.)]
          
          p.text-small(numero="2" titulo="Interés") El vendedor continúa: <br><br> “Nuestros pasteles están hechos con ingredientes frescos y naturales. El pastel de chocolate con avellanas que ve aquí fue elegido como el mejor del año por los críticos locales. Además, ofrecemos una opción sin gluten que es igual de deliciosa.” <br><br> #[i (Al mencionar los beneficios únicos, el vendedor despierta el interés del cliente en productos específicos.)]
          
          p.text-small(numero="3" titulo="Deseo") El vendedor observa que el cliente se interesa por el pastel de chocolate y añade: <br><br> “Este pastel no solo tiene un sabor increíble, sino que también viene decorado de forma personalizada sin costo adicional. Además, si lo compra hoy, le ofrecemos un descuento del 10% en su próxima compra.” <br><br> #[i (El vendedor crea deseo al resaltar el valor añadido y un incentivo adicional para futuras compras.)]
          
          p.text-small(numero="4" titulo="Acción") Finalmente, el vendedor pregunta: <br><br> “¿Le gustaría llevarse este pastel para su celebración? Estoy seguro de que impresionará a todos sus invitados.” <br><br> #[i (El vendedor incita al cliente a tomar la acción de compra, cerrando la venta de manera natural.)]

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2. Técnica de cierre de ventas SPIN

    p.mb-5 La técnica SPIN, que significa Situación, Problema, Implicación y Necesidad, fue desarrollada en la década de los 90 y se basa en un enfoque de preguntas estratégicas para identificar las necesidades del cliente y ofrecer soluciones adecuadas.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
      .col-xl-3.col-sm-6.col-8.mb-4
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema1/img-05.png' alt="Muestra semillas nativas")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 Consiste en investigar y recopilar información sobre el cliente para comprender mejor sus necesidades y contexto. En caso de dudas, el vendedor debe hacer preguntas que guíen al cliente hacia respuestas reveladoras.

      .col-xl-3.col-sm-6.col-8.mb-4
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema1/img-06.png' alt="Muestra semillas mejoradas")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 Identificar los problemas o desafíos que enfrenta el cliente es crucial. El vendedor debe formular preguntas dirigidas a descubrir los posibles problemas, comenzando preferiblemente con preguntas cerradas para obtener respuestas claras y concretas.

      .col-xl-3.col-sm-6.col-8.mb-4
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema1/img-07.png' alt="Muestra semillas híbridas ")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 En esta etapa, el vendedor debe evaluar la gravedad y la relevancia de los problemas identificados, enfocándose en la importancia de resolverlos. Aquí, el objetivo es hacer que el cliente vea la necesidad urgente de encontrar una solución.

      .col-xl-3.col-sm-6.col-8.mb-4
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema1/img-08.png' alt="Muestra semillas híbridas ")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 Finalmente, el vendedor debe sugerir cómo su producto o servicio puede resolver los problemas del cliente, destacando los beneficios específicos que ofrece. 

    //.row.justify-content-center.mb-5
      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-04.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Afecto
            p.text-small.text-center.mb-0 Una madre siente un profundo afecto por su hijo, lo que se manifiesta en su constante preocupación y cariño hacia él. Este afecto es un sentimiento duradero que influye en su comportamiento diario, como su disposición a cuidarlo y protegerlo.

      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-05.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Emociones
            p.text-small.text-center.mb-0 Tras recibir una noticia inesperada, una persona experimenta una emoción intensa de alegría. Esta emoción es breve pero muy poderosa, y puede llevar a una reacción física inmediata, como sonreír o reír.

      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-06.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Estado de ánimo
            p.text-small.text-center.mb-0 Una persona que ha tenido una semana difícil en el trabajo puede encontrarse en un estado de ánimo bajo o melancólico. A diferencia de las emociones, este estado de ánimo es más persistente, influye en su perspectiva general durante varios días, y puede hacer que perciba las situaciones cotidianas de manera más negativa.

    p El éxito de la técnica SPIN radica en la capacidad del vendedor para formular preguntas abiertas que generen confianza y promuevan una comunicación fluida. Es importante evitar preguntas que comiencen con “¿Por qué?”, ya que estas suelen llevar a respuestas defensivas y no proporcionan la información útil que se busca.
    p.mb-5 Un ejemplo claro de uso de SPIN es el siguiente:

    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Escenario

    p.mb-5 Un cliente entra en una tienda de maquillaje buscando productos para mejorar su rutina diaria de cuidado de la piel y maquillaje.

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="1. Situación")
        p El vendedor pregunta: “¿Podría contarme un poco sobre los productos que está utilizando actualmente para su rutina de maquillaje y cuidado de la piel?”
        p #[i (El vendedor comienza a recopilar información sobre la situación actual del cliente.)]
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="2. Problema")
        p Después de escuchar al cliente, el vendedor indaga más: “¿Ha notado algún problema con la duración de su maquillaje a lo largo del día o quizás alguna incomodidad en la piel después de aplicarlo?”
        p #[i (El vendedor identifica problemas potenciales que el cliente pueda estar enfrentando con sus productos actuales.)]
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="3. Implicación")
        p El vendedor continúa: “Si su maquillaje no está durando todo el día, podría ser debido a la falta de un buen primer o base adecuada. Esto podría hacer que su maquillaje no solo dure menos, sino que también se vea irregular. ¿Cómo afectaría esto a su rutina diaria, especialmente si tiene eventos importantes?”
        p #[i (El vendedor resalta la importancia de solucionar los problemas identificados, haciendo que el cliente sienta la necesidad de cambiar.)]
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde

      .tarjeta.color-acento-botones--borde.p-4(titulo="4. Necesidad de beneficio")
        p Finalmente, el vendedor sugiere: “Nuestro primer de larga duración, combinado con una base ligera y un fijador, no solo mantendrá su maquillaje impecable durante todo el día, sino que también protegerá su piel. ¿Le gustaría probar estos productos hoy?”
        p #[i (El vendedor ofrece una solución clara y directa que aborda las necesidades del cliente, lo que facilita el cierre de la venta.)]
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3. Otras técnicas de cierre de ventas

    p.mb-5 Además de AIDA y SPIN, existen otras técnicas de cierre de ventas que, aunque menos comunes, pueden ser muy efectivas en situaciones específicas:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-left")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-01.svg' alt='AvatarTop')
        h3.text-center Cierre puerco espín
        p Responder a la pregunta del cliente con otra pregunta para mantener el control de la conversación y avanzar en el proceso de venta. Ejemplo: Si el cliente pregunta por otro modelo de televisor, el vendedor podría responder: “¿Le gustaría uno con conexión a Internet?”

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-02.svg' alt='AvatarTop')
        h3.text-center Cierre por autorización
        p Después de presentar el producto, el vendedor entrega una orden de compra al cliente. Si el cliente la firma, la venta se cierra.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-03.svg' alt='AvatarTop')
        h3.text-center Cierre por venta perdida
        p Si el cliente no muestra interés en el producto, el vendedor refuerza las bondades del producto y resalta cualidades no mencionadas previamente para reavivar el interés.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-04.svg' alt='AvatarTop')
        h3.text-center Cierre por cambio de precios
        p Ofrecer una oferta limitada en el tiempo, como mantener el precio solo por ese día o dar un descuento inmediato, puede incitar al cliente a tomar una decisión rápida.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-05.svg' alt='AvatarTop')
        h3.text-center Cierre por plan de acción
        p Informar al cliente sobre los beneficios que obtendrá inmediatamente después de adquirir el producto, asegurando que vea el valor de la compra.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-06.svg' alt='AvatarTop')
        h3.text-center Cierre alternativa
        p Presentar al cliente opciones que impliquen una decisión, como elegir entre diferentes métodos de entrega o formas de pago, lo que indirectamente lleva al cierre de la venta.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-07.svg' alt='AvatarTop')
        h3.text-center Cierre invitacional
        p Repetir la importancia de adquirir el producto y los beneficios que ofrece, invitando al cliente a aprovechar las ventajas.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-08.svg' alt='AvatarTop')
        h3.text-center Cierre por orden de compra
        p Completar una orden de compra mientras se explican las bondades del producto puede ser arriesgado, ya que el cliente podría sentirse presionado.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-09.svg' alt='AvatarTop')
        h3.text-center Cierre por equivocación
        p Utilizar intencionalmente una afirmación incorrecta para que el cliente la corrija, lo que implica su aceptación de compra. Ejemplo: “¿Quiere que le entreguemos los postes siempre en color blanco?”
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-010.svg' alt='AvatarTop')
        h3.text-center Cierre por preferencia
        p Preguntar al cliente sobre detalles de la compra, como forma de pago y condiciones de entrega, mientras se realiza la presentación del producto.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-011.svg' alt='AvatarTop')
        h3.text-center Cierre por rebote
        p Resolver inmediatamente cualquier duda del cliente para concluir la venta de manera efectiva.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-012.svg' alt='AvatarTop')
        h3.text-center Cierre por máxima calidad
        p Si el precio es un obstáculo, el vendedor debe resaltar las características de alta calidad que justifican el costo, comparando con productos inferiores. 

    Separador
    
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4. <em>Customer Relationship Management</em> (CRM)

    .fondo2-t2.mb-5.px-md-5.px-4
      .row.justify-content-center.align-items-center
        p.mb-5(data-aos="fade-right") En la actualidad, las empresas enfrentan la necesidad de implementar técnicas avanzadas para mantener una relación constante y efectiva con sus clientes. El desarrollo de #[i software] especializado en la gestión de relaciones con los clientes, conocido como #[i(style="color: #12263F !important") Customer Relationship Management] (CRM), facilita esta interdependencia a través de redes informáticas. Mientras que anteriormente el proceso de ventas solía finalizar con el cierre de la negociación, la globalización de los mercados ha transformado esta dinámica. Hoy en día, el servicio posventa se ha convertido en un elemento crucial para la fidelización del cliente.
        .col-lg-4.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema1/img-09.svg', alt='Imagen decorativa')

        .col-lg-6.col-12.mb-3(data-aos="fade-right")
          p El #[i(style="color: #12263F !important") Customer Relationship Management] (CRM) se define como la gestión de las relaciones con los clientes. Este enfoque constituye un modelo para la realización de negocios que prioriza la interacción continua con el cliente, con el objetivo de lograr su lealtad a largo plazo. Es importante destacar que, para una empresa, el CRM no solo se aplica a los clientes, sino también a los proveedores, quienes son parte integral de la cadena de valor.
          p El CRM resulta útil debido a su capacidad para centralizar y gestionar la información de los clientes, lo que permite optimizar tareas, segmentar mercados y desarrollar estrategias personalizadas. Estas acciones dependen de las características de los clientes y del tipo de productos o servicios ofrecidos.
          p Implementar un sistema CRM en una organización proporciona múltiples ventajas, tales como:
        
        
    PasosA.color-acento-contenido.mb-5.px-md-5.px-4(tipo="n")
      .row.justify-content-center.align-items-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Segmentación de mercado
          p.mb-0 Permite dividir el mercado en segmentos más manejables, lo que facilita la focalización de esfuerzos y recursos.

        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img-010.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-011.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Mayor efectividad en campañas
          p.mb-0 Las campañas de #[i marketing] son más efectivas porque están dirigidas directamente al público objetivo, aumentando la tasa de conversión.
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Accesibilidad a nuevos clientes y fidelización de los existentes
          p.mb-0 Facilita la captación de nuevos clientes mientras se consolidan las relaciones con los clientes actuales.
        
        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img-012.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-013.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Aumento de ventas y reducción de costos operativos
          p.mb-0 Al mejorar la eficiencia en la gestión de relaciones, se optimizan los procesos de ventas y se reducen los costos.
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Satisfacción del cliente
          p.mb-0 Mejora la experiencia del cliente, lo que incrementa su satisfacción y, por ende, su lealtad. 
        
        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img-014.png', alt='Texto que describa la imagen')

    p.mb-5(data-aos="zoom-in") El CRM se compone de tres pilares fundamentales:

    ol.lista-ol--cuadro.lista-ol--separador.mb-5
      li 
        .lista-ol--cuadro__vineta
          span a
        p.mb-0 #[b CRM operacional:] apoya las diferentes áreas de la organización, facilitando la automatización de procesos como ventas, #[i marketing] y servicio al cliente.

      li 
        .lista-ol--cuadro__vineta
          span b
        p.mb-0 #[b CRM analítico:] contribuye al análisis de la información recopilada, permitiendo una toma de decisiones más informada y estratégica.

      li 
        .lista-ol--cuadro__vineta
          span c
        p.mb-0 #[b CRM colaborativo:] mejora la eficiencia de la organización al optimizar la comunicación con el cliente a través de los canales previstos, fomentando una relación más fluida y efectiva. 

    p.mb-5(data-aos="zoom-in") Un CRM efectivo debe integrarse de manera sinérgica y consistente en la organización, con los siguientes elementos clave:

    .row.justify-content-center
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-013.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h3 Base de datos
              p Contiene información detallada de los clientes, que la empresa puede utilizar para mejorar sus estrategias y operaciones.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-014.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.tarjeta1
            .p-4
              h3 Atención al cliente
              p Facilita la interacción continua con los clientes, permitiendo no solo ofrecer más productos o servicios, sino también medir su satisfacción con las compras anteriores.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-015.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h3 Oportunidades de negocio
              p La información sobre los clientes permite identificar oportunidades para ofrecer productos o servicios específicos, incrementando las probabilidades de éxito.

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-016.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.tarjeta1
            .p-4
              h3 Clientes potenciales
              p Ayuda a identificar los requerimientos de los clientes, de modo que la empresa pueda ofrecer productos o servicios que respondan a esas necesidades y convertir clientes potenciales en clientes reales.
      
    .row.mb-5
      .col-12
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.imagen
            img(src='@/assets/curso/temas/tema1/icono-017.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario-b2
            .p-4
              h3 Optimización de la comunicación
              p La información almacenada puede ser consultada por los empleados para ofrecer alternativas de negocio pertinentes. Desde el punto de vista del cliente, la capacidad de comunicarse rápidamente con el proveedor genera confianza y seguridad. 

    p.mb-5 Las características más representativas de un CRM son las siguientes: 

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-018.svg' alt='AvatarTop')
        h4.text-center Automatización
        p.text-center Facilita la labor de la fuerza de ventas, optimizando los tiempos de respuesta y ayudando a fidelizar clientes existentes, al tiempo que atrae nuevos consumidores.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-019.svg' alt='AvatarTop')
        h4.text-center Análisis de datos
        p.text-center Permite a los vendedores definir estrategias de manera efectiva, respondiendo a las necesidades específicas de los clientes.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-020.svg' alt='AvatarTop')
        h4.text-center Gestión del tiempo
        p.text-center Ayuda a los vendedores a determinar cuánto tiempo dedicar a cada cliente para maximizar las ventas. 

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-021.svg' alt='AvatarTop')
        h4.text-center Accesibilidad al CRM
        p.text-center Es fundamental que los vendedores puedan acceder a la información en tiempo real, incluso sin conexión a internet, para asegurar un servicio continuo y eficiente.  

    p.mb-5 Por ser y tener relación directa con los sistemas electrónicos se requiere que los CRM tengan unas características tecnológicas tales como:

    .row.justify-content-center.mb-3(data-aos="zoom-in")
      .col-lg-5.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema1/img-015.svg', alt='Imagen decorativa')
      .col-lg-7.col-12.mb-3
        LineaTiempoD.color-secundario.linea-tiempo-edit.mb-4(data-aos="zoom-in-down")
          p.text-small(numero="1" titulo="<em>Software</em> especializado") El CRM debe contar con un #[i software] que consolide toda la información de los clientes en una base de datos completa, permitiendo un análisis exhaustivo de la información.

          p.text-small(numero="2" titulo="Personalización") El #[i software] debe permitir la personalización de los procesos, integrando otras aplicaciones que hagan el sistema más dinámico y adaptable a las necesidades del negocio.

          p.text-small(numero="3" titulo="Uso de correo electrónico") Como herramienta de comunicación efectiva tanto interna como externamente, facilitando el seguimiento y la interacción con los clientes.

          p.text-small(numero="4" titulo="Generación de reportes") El CRM debe ser capaz de generar reportes que integren diversa información, ayudando a la toma de decisiones estratégicas.

          p.text-small(numero="5" titulo="Accesibilidad") El #[i software] debe ser accesible tanto para los clientes como para los colaboradores de la empresa, y debe ser compatible con dispositivos móviles y de escritorio para garantizar su uso en cualquier lugar y momento. 

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_5 1.5. Técnica de planteamiento psicocibernético o de simulación cerebral

    p La técnica de planteamiento psicocibernético, también conocida como técnica de simulación cerebral, destaca la importancia de que los vendedores tengan un profundo conocimiento de sí mismos y un firme deseo de convertirse en los mejores en su organización. Este enfoque implica el uso del máximo potencial personal en la búsqueda de los objetivos propuestos, basándose en el desarrollo de la autoestima y la energía mental para superar desafíos y alcanzar el éxito en las ventas.
    p La psicocibernética es un método utilizado para identificar y desarrollar el potencial de las personas, permitiéndoles ser exitosas y resolver los problemas que se les presenten. Este enfoque se centra en el manejo de la autoestima y la energía mental como herramientas clave para la autorrealización y el logro de objetivos.
    p.mb-5 Dentro de las técnicas de la psicocibernética se incluyen las siguientes:

    .tarjeta.tarjeta--gris1.p-5.mb-5(data-aos="zoom-in") 
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 1. Liberación de estrés
              p.mb-0 Esta técnica se relaciona con el manejo adecuado de los diferentes estados de ánimo que pueden generar estrés en el vendedor. Algunas de las técnicas de control del estrés aplicables son:
              p.mb-0 #[b(style="color: #12263F !important") Relajación y respiración:] ayuda a calmar la mente y el cuerpo, mejorando la concentración.
              p.mb-0 #[b(style="color: #12263F !important") Expresión corporal:] permite liberar tensiones a través de movimientos físicos.
              p.mb-0 #[b(style="color: #12263F !important") Estiramiento:] alivia la rigidez muscular y mejora la flexibilidad, contribuyendo a la relajación.
              p.mb-0 #[b(style="color: #12263F !important") Aromaterapia:] utiliza aromas específicos para inducir estados de relajación y bienestar..
              
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-016.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 2. Acondicionamiento corporal
              p Generalmente vinculado con la danza afro, esta técnica permite reducir el estrés mediante ejercicios específicos acompañados de relajación, utilizando elementos aromatizantes para potenciar los efectos beneficiosos.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-017.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 3. Expresión oral
              p La forma en que un vendedor se expresa en público es crucial. Esta técnica implica la autoobservación y el control de la voz, donde el tono puede reflejar los sentimientos. La postura corporal, como parte de la comunicación no verbal, también juega un papel importante y debe estar alineada con el mensaje verbal para evitar malentendidos. Es esencial mantener fluidez, volumen, ritmo y claridad en el discurso, asegurando coherencia entre estos elementos para una comunicación efectiva durante la venta.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-018.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 4. Consistencia comunicacional
              p El vendedor debe dirigir y controlar la conversación con el cliente, evitando elementos distractores que puedan generar incomodidad. Esto refuerza la importancia del cliente y aumenta las probabilidades de cerrar la venta.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-019.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 5. Nunca hablar por hablar
              p Es fundamental preparar la argumentación de la presentación del producto, centrándose en aspectos relevantes para el proceso de venta. Hablar sin un propósito claro puede resultar en la pérdida del cliente.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-020.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 6. Estructura de la expresión oral
              p La comunicación oral efectiva en ventas se compone de tres partes fundamentales:
              p.mb-0 #[b(style="color: #12263F !important") Despegue (inicio):] aquí, la comunicación no verbal es clave, y la presentación personal del vendedor puede determinar la atracción inicial del cliente.
              p.mb-0 #[b(style="color: #12263F !important") Columna (cuerpo):] es el momento de presentar el producto o servicio, destacando sus beneficios de manera clara y concisa.
              p.mb-0 #[b(style="color: #12263F !important") Remate (conclusión):] tan importante como el despegue, el remate debe ofrecer una síntesis clara de los beneficios del producto, ayudando al cliente a tomar la decisión de compra.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-021.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 7. Expresión escrita
              p En la comunicación escrita, es vital prestar atención a los siguientes aspectos:
              p.mb-0 #[b(style="color: #12263F !important") Adecuación:] la formalidad y el tono utilizado deben ser apropiados para el receptor.
              p.mb-0 #[b(style="color: #12263F !important") Coherencia:] la información proporcionada debe ser relevante y personalizada, evitando dar la impresión de que el cliente es "uno más".
              p.mb-0 #[b(style="color: #12263F !important") Cohesión:] se debe utilizar una puntuación adecuada y sinónimos pertinentes para garantizar la claridad del mensaje. Leer y revisar cuidadosamente el mensaje antes de enviarlo es esencial.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-022.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-6.order-lg-1.order-2
              h6.mb-4 8. Prospectación
              p Esta técnica se refiere a la búsqueda de clientes potenciales, identificando su necesidad del producto, su deseo de compra y su capacidad de adquisición. 

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-023.png', alt='Imagen decorativa')

    p.mb-5 Desde el punto de vista de un vendedor, la autoconfianza es fundamental para alcanzar los objetivos propuestos. Para ello, debe considerar los siguientes elementos a manera de características:

    PasosA.color-acento-contenido.mb-5.px-md-5.px-4(tipo="n")
      .row.justify-content-center.align-items-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Preparación de la venta
          p.mb-0 Implica otorgar relevancia e importancia a los clientes según sus necesidades específicas, incluso si todos van a adquirir el mismo producto.

        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img-024.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-025.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Contacto con el cliente
          p.mb-0 El primer contacto es crucial y puede ser determinante para iniciar una venta exitosa. La primera impresión debe ser positiva.
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Identificación de necesidades
          p.mb-0 Tras establecer el contacto inicial, el vendedor debe ser capaz de detectar rápidamente las necesidades del cliente, lo que es clave para ofrecer soluciones adecuadas.
        
        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img-026.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-027.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Argumentación
          p.mb-0 Los vendedores deben preparar argumentos sólidos y creíbles para apoyar su oferta. Una preparación adecuada les permitirá manejar y responder eficazmente a las dudas del cliente, destacando los beneficios del producto.
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Manejo de objeciones
          p.mb-0 Es esencial que el vendedor esté preparado para manejar situaciones en las que el cliente se niegue a adquirir el producto. En estos casos, debe demostrar autocontrol y utilizar argumentos persuasivos para convencer al cliente. 
        
        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img-028.png', alt='Texto que describa la imagen')
      
      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-029.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Cierre de venta
          p.mb-0 Este es el momento decisivo. El vendedor debe ser capaz de identificar el momento adecuado para proponer la orden de compra. Un mal manejo del tiempo puede resultar en la pérdida de la venta.

      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Fidelización del cliente
          p.mb-0 La fidelización incluye el servicio posventa y el acompañamiento posterior al cliente para conocer su experiencia de uso y garantizar su satisfacción, lo que aumenta las probabilidades de futuras compras. 
        
        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img-030.png', alt='Texto que describa la imagen')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_6 1.6. Garantía y servicio posventa

    p.mb-5 Las garantías y el servicio posventa son elementos cruciales para la fidelización de los clientes, ya que garantizan la continuidad en la asesoría y soporte del producto después de la venta. Contar con una garantía no implica que el producto sea defectuoso; por el contrario, proporciona al consumidor la tranquilidad de saber que, en caso de surgir algún problema, recibirá la asistencia necesaria de manera rápida y eficiente. El servicio posventa, por su parte, refuerza la relación entre el cliente y la empresa, asegurando la satisfacción del primero y fomentando la lealtad hacia la marca.

    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario1.p-5(style="background-color: #FFF37A")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema1/icono-022.svg', alt='Texto que describa la imagen')
          
        h2.text-center Garantía
        p La garantía es un documento que protege y asegura un bien o servicio, estipulando las condiciones bajo las cuales el producto será reparado o reemplazado en caso de fallas. Todas las garantías tienen un tiempo de vencimiento determinado, que varía según la clase de producto adquirido. Es fundamental que el vendedor informe claramente al cliente sobre la duración de la garantía y sus condiciones.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.p-5(style="background-color: #FFC890")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema1/icono-023.svg', alt='Texto que describa la imagen')
          
        h2.text-center Término de garantía
        p Se refiere al periodo de tiempo determinado por el fabricante o vendedor durante el cual el producto está cubierto por la garantía. En Colombia, si no se estipula un término diferente, la garantía para productos nuevos es de un año. Las garantías suelen incluir la reparación del producto sin costo alguno; en caso de requerirse desplazamiento o repuestos, estos deben ser asumidos por el vendedor. 

    p El fabricante es responsable de proporcionar un manual de operación del producto, que incluya indicaciones sobre el ensamblaje, instalación, operatividad, cuidados necesarios y asistencia técnica en caso de ser requerida. Es esencial que el fabricante asegure la disponibilidad de repuestos incluso después de que expire la garantía.
    p.mb-5 Las garantías pueden clasificarse en dos tipos principales:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-down-right")
        .cajon.color-primario.p-4(style="background-color:#FFFAC1")
          p #[b 1. Garantía legal:] es la obligación del proveedor de responder por la calidad, funcionamiento y estado de los productos. No obstante, no requiere que se indemnice al cliente en caso de reclamación, sino que se garantice la reparación o reemplazo del producto defectuoso.
          p.mb-0 #[b 2. Garantía suplementaria:] este tipo de garantía es ofrecida por el vendedor para ampliar la cobertura de la garantía legal. Debe ser otorgada por escrito, especificando claramente la información tanto del producto como del consumidor. El fabricante puede cobrar un valor adicional por esta garantía, y es decisión del consumidor aceptarla o no. 

    p En caso de que el cliente presente una reclamación, la garantía se suspende durante el tiempo que dure la reparación o respuesta, y se reanuda una vez el producto es devuelto al consumidor.
    p.mb-5 Es importante destacar que las garantías de productos adquiridos en el exterior pueden hacerse válidas en Colombia a través de los representantes de la marca. Además, el vendedor no puede exigir la factura para hacer efectiva la garantía.

    .fondo2-t2.mb-5.px-md-5.px-4
      .row.justify-content-center.align-items-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3.mb-5
            span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Servicio posventa
          p El servicio posventa es el conjunto de servicios que se ofrecen después de la adquisición de un producto o la prestación de un servicio. Un buen servicio posventa es esencial para asegurar la satisfacción del cliente y garantizar su fidelización. Si el servicio posventa no está bien estructurado, la empresa corre el riesgo de perder clientes.
          p El servicio posventa no solo fortalece la relación del cliente con el producto y la organización, sino que también brinda a la empresa una oportunidad para el mejoramiento continuo. Esto se logra a través de:
          ul.lista-ul.mb-3
            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              p.mb-0 #[b Conocimiento de la opinión del cliente:] recabar #[i feedback] permite a la empresa identificar áreas de mejora.
            
            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              p.mb-0 #[b Identificación de oportunidades de mejora:] la través del servicio posventa, la empresa puede detectar deficiencias y corregirlas.
            
            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              p.mb-0 #[b Evaluación de productos y procesos:] permite analizar la efectividad de los productos y la eficiencia de los procesos internos.
            
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema1/img-031.svg', alt='Imagen decorativa')


    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Tipos de servicio posventa

    p.mb-5 El servicio posventa puede clasificarse en diferentes categorías, según su naturaleza:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-left")
      .row(titulo="1. Servicio técnico al producto:")
        .col-lg-12.mb-4.mb-md-0
          p #[b Instalación:] debe estar apoyada por un manual fácil de entender, preferiblemente con esquemas gráficos, para asegurar que el instalador pueda aplicar correctamente las instrucciones y que el producto funcione según lo previsto.
          p #[b Mantenimiento:] incluye los procedimientos necesarios para mantener el producto en óptimas condiciones, como limpieza, cambio de partes y revisiones periódicas.
          p #[b Reparaciones:] dependiendo de la garantía, el productor tiene la oportunidad de solucionar cualquier inconveniente que presente el cliente. Los costos pueden estar cubiertos o no, dependiendo de la causa del daño.

        figure
          img(src='@/assets/curso/temas/tema1/img-031.png', alt='Texto que describa la imagen')
        
      .row(titulo="2. Otros servicios a los clientes")
        .col-lg-12.mb-4.mb-md-0
          p #[b Entrenamiento:] proporcionar formación al cliente sobre el uso del producto para que pueda aprovechar al máximo sus funcionalidades.
          p #[b Manejo de quejas:] brindar al cliente la oportunidad de expresar sus inconformidades. Estas deben ser resueltas con asertividad y seguridad, demostrando el compromiso de la empresa con la satisfacción del cliente. 

        figure
          img(src='@/assets/curso/temas/tema1/img-032.png', alt='Texto que describa la imagen')

    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Importancia del servicio posventa

    p.mb-5 El servicio posventa es vital tanto para el presente como para el futuro de la empresa, ya que respalda la acción de venta y asegura la satisfacción del cliente. Los factores que respaldan esta práctica incluyen:

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-024.svg' alt='AvatarTop')
        h4.text-center Respaldo al cliente
        p.text-center El cliente debe sentirse apoyado por la empresa, sabiendo que recibirá atención en cualquier momento que la necesite.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-025.svg' alt='AvatarTop')
        h4.text-center Validación de la garantía
        p.text-center Proporciona seguridad al cliente de que su garantía será respetada y que podrá obtener el servicio necesario.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-026.svg' alt='AvatarTop')
        h4.text-center Recopilación de información sobre satisfacción
        p.text-center Permite evaluar la experiencia del cliente con el proceso de compra y recibir sugerencias para mejorar.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-027.svg' alt='AvatarTop')
        h4.text-center Contacto permanente con el cliente
        p.text-center Mantener una comunicación constante ayuda a fortalecer la lealtad del cliente hacia la marca. 

    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Aspectos clave del servicio posventa

    p.mb-5 Para garantizar un servicio posventa de calidad, es importante considerar los siguientes aspectos:

    .row.justify-content-center.mb-3(data-aos="zoom-in")
      .col-lg-5.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema1/img-033.svg', alt='Imagen decorativa')
      .col-lg-7.col-12.mb-3
        LineaTiempoD.color-secundario.linea-tiempo-edit.mb-4(data-aos="zoom-in-down")
          p.text-small(numero="1" titulo="Agradecimiento por la compra") Implementar estrategias que incentiven al cliente a regresar y seguir comprando la marca.

          p.text-small(numero="2" titulo="Seguimiento") Establecer una buena relación con el cliente para obtener información sobre su experiencia con el producto.

          p.text-small(numero="3" titulo="Escucha activa") El vendedor debe ser hábil en escuchar y atender las sugerencias del cliente.

          p.text-small(numero="4" titulo="Relación") Fomentar un buen vínculo con el cliente para convertirlo en un aliado de la marca.

          p.text-small(numero="5" titulo="Capacitación") Proporcionar formación continua al vendedor en el manejo de objeciones y quejas, transformándolas en oportunidades de venta y mejora organizacional.
          
          p.text-small(numero="6" titulo="Valor agregado") Ofrecer servicios adicionales como asesoría y mantenimiento para mejorar la experiencia del cliente.
          
          p.text-small(numero="7" titulo="Oportunidad de respuesta") Resolver las inconformidades del cliente en el menor tiempo posible para asegurar su satisfacción. 

    p.mb-5 Para mantener un contexto se presenta el siguiente ejemplo de garantía y servicio posventa para una empresa de juguetes infantiles elaborados con materiales reciclables, preste atención al detalle del ejemplo

    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Escenario

    .fondo2-t2.mb-5.px-md-5.px-4
      .row.justify-content-center.align-items-center
        p.mb-5(data-aos="fade-right") Imaginemos que una empresa llamada #[b EcoJuguetes] se especializa en la fabricación y venta de juguetes infantiles elaborados con materiales reciclables. La empresa se ha ganado la confianza de sus clientes por su compromiso con el medio ambiente y la seguridad de los niños. A continuación, se presenta un ejemplo de cómo podrían implementar su garantía y servicio posventa.
          .col-12.col-lg-10(data-aos="fade-down-right")
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-circle(style="color:#670303")
                h4 #[b(style="color: #670303 !important") Garantía]
            p #[b Garantía de producto:] EcoJuguetes ofrece una #[b garantía legal] de un año para todos sus juguetes. Esta garantía cubre cualquier defecto de fabricación que pueda afectar el funcionamiento o la seguridad del juguete. Si un cliente descubre un problema dentro de este periodo, puede devolver el juguete para su reparación o reemplazo sin costo adicional.
            p #[b Garantía suplementaria:] además de la garantía estándar, EcoJuguetes ofrece una #[b garantía suplementaria] que extiende la cobertura por un año adicional. Esta garantía incluye servicios como reparaciones gratuitas por daños menores y descuentos en la compra de nuevos productos. Para obtener esta garantía extendida, el cliente puede pagar un pequeño suplemento al momento de la compra o en cualquier momento dentro del primer año.
            p #[b Manual de operación y seguridad:] cada juguete viene con un manual detallado que incluye instrucciones de uso, recomendaciones de seguridad y cuidado, y una guía para el reciclaje del producto al final de su vida útil. Este manual también especifica qué hacer en caso de que el juguete necesite reparación y cómo contactar al servicio técnico de EcoJuguetes.
            p #[b Proceso de reclamo:] si un cliente necesita hacer una reclamación, puede hacerlo a través del sitio web de EcoJuguetes o llamando al servicio de atención al cliente. Una vez recibido el juguete para su revisión, el tiempo de la garantía se suspende hasta que se complete la reparación o reemplazo, asegurando que el cliente no pierda tiempo de cobertura.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-circle(style="color:#670303")
            h4 #[b(style="color: #670303 !important") Servicio posventa]
        p #[b Instalación y montaje:] para juguetes que requieren ensamblaje, EcoJuguetes ofrece un servicio de instalación en el hogar. Un técnico de la empresa puede visitar la casa del cliente para montar el juguete, asegurando que esté correctamente armado y funcionando. Este servicio es gratuito para los clientes que adquirieron la #[b garantía suplementaria.]
        p #[b Mantenimiento y reparaciones:] EcoJuguetes ofrece un servicio de mantenimiento periódico, especialmente para sus juguetes más complejos como bicicletas o juguetes eléctricos. Este mantenimiento incluye la limpieza, ajuste y, si es necesario, el reemplazo de piezas. Los clientes con la garantía suplementaria reciben estos servicios sin costo adicional durante los primeros dos años.
        p #[b Entrenamiento en el uso seguro del producto:] para ciertos juguetes, como aquellos que requieren ensamblaje o que tienen múltiples funciones, EcoJuguetes ofrece sesiones de entrenamiento en línea y videos tutoriales  

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img-034.svg', alt='Imagen decorativa')
    
    .back-pink.p-md-5.p-4
      .row.justify-content-center.align-items-center
        .col-lg-5.col-10.mb-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-035.svg', alt='')

        .col-lg-7.col-12.mb-3(data-aos="fade-left")
          p #[b Manejo de quejas y retroalimentación:] EcoJuguetes tiene un equipo dedicado a manejar quejas y recibir retroalimentación. Los clientes pueden enviar sus comentarios a través de un formulario en línea o mediante una línea telefónica gratuita. Cada queja se maneja con la mayor seriedad, y la empresa se compromete a resolver cualquier problema en un plazo de 48 horas. Esta información también se utiliza para mejorar futuros diseños de productos y procesos internos.
          p #[b Valor agregado:] EcoJuguetes ofrece un servicio adicional de reciclaje de juguetes. Cuando un juguete llega al final de su vida útil, los clientes pueden devolverlo a la empresa, que se encargará de reciclarlo adecuadamente. A cambio, el cliente recibe un descuento en su próxima compra, fomentando la fidelidad y el compromiso con el medio ambiente.
          p #[b Seguimiento postventa:] después de cada compra, EcoJuguetes realiza un seguimiento con el cliente para asegurarse de que el juguete haya cumplido con sus expectativas. Esto incluye una encuesta de satisfacción y una invitación a unirse a la comunidad en línea de EcoJuguetes, donde los clientes pueden compartir sus experiencias y recibir consejos sobre el cuidado y uso de los productos.
          p #[b Relación y fidelización:] EcoJuguetes se esfuerza por construir una relación sólida con cada cliente, ofreciendo promociones exclusivas y recompensas a los compradores frecuentes. Además, organizan eventos para sus clientes, como talleres de reciclaje y actividades educativas para niños, lo que fortalece la relación con la marca. 

        



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
