<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comportamiento del consumidor

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-01.png', alt='')

    p.mb-5 Hablar del comportamiento del consumidor implica analizar las acciones y decisiones que este toma durante el proceso de adquisición de un bien o servicio. Este comportamiento está influenciado por una combinación de factores mentales y físicos que afectan su criterio de compra, tales como la utilidad que espera obtener del producto y la continuidad del consumo según el nivel de satisfacción alcanzado. El comportamiento del consumidor se puede dividir en tres momentos críticos: #[b antes de la compra, durante la compra y después de la compra.]

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-primario1.p-5(style="background-color: #FFF26F")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/icono-01.svg', alt='Texto que describa la imagen')
          
        h2.text-center 1. Antes de la compra
        p En esta fase, el consumidor identifica una necesidad o deseo que lo lleva a considerar una compra. Investiga opciones, compara alternativas y se forma una expectativa sobre el producto o servicio que desea adquirir. Factores como la publicidad, recomendaciones, y experiencias previas juegan un papel crucial en esta etapa.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-acento-botones1.p-5(style="background-color: #FFBE7D")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/icono-02.svg', alt='Texto que describa la imagen')
          
        h2.text-center 2. Durante la compray
        p Aquí, el consumidor toma la decisión final de compra, influenciado por la experiencia de compra en sí, la interacción con el vendedor, la disponibilidad del producto, el precio, y otros factores inmediatos. Este es un momento decisivo, donde la percepción de valor y la respuesta emocional pueden inclinar la balanza hacia la compra o hacia la búsqueda de otras opciones.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-lg.tarjeta.color-acento-contenido1.p-5(style="background-color: #F5F2CD")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/icono-03.svg', alt='Texto que describa la imagen')
          
        h2.text-center 3. Después de la compra
        p Después de adquirir el producto o servicio, el consumidor evalúa si la compra cumplió con sus expectativas. Esta etapa es crucial para determinar la satisfacción del cliente, que influye directamente en su comportamiento futuro, como la lealtad hacia la marca o la probabilidad de realizar compras adicionales. 

    .fondo2-t2.mb-4.p-md-5.p-4
      .row.justify-content-center.align-items-center
        p.mb-5(data-aos="fade-right") El análisis del comportamiento del consumidor presenta varios desafíos que dificultan la identificación precisa de factores como la frecuencia de compra, las condiciones bajo las cuales se realiza, y las necesidades específicas que motivan la compra. Entre las principales dificultades se encuentran:
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          p #[b Falta de conciencia sobre el motivo de compra:] muchas veces, los consumidores no son plenamente conscientes de por qué compran ciertos productos. Sus decisiones pueden estar influenciadas por factores subconscientes o impulsivos.
          p #[b Falta de sinceridad en las respuestas:] los consumidores pueden no ser completamente honestos cuando se les pregunta sobre las razones detrás de sus decisiones de compra, ya sea por falta de introspección o porque desean dar respuestas socialmente aceptables.
          p #[b Influencia de las emociones:] las decisiones de compra a menudo están influenciadas por emociones, lo que puede llevar a comportamientos impulsivos que no siempre son coherentes con la información disponible o con las necesidades racionales del consumidor. 
        
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema3/img-02.svg', alt='Imagen decorativa')

    p.mb-5 Identificar y comprender el comportamiento del consumidor es una tarea compleja debido a la gran cantidad de variables que influyen en sus decisiones. Para abordar esta complejidad, es esencial conocer y considerar todas las características que estructuran el comportamiento del consumidor, tales como:

    .row.mb-5(data-aos="zoom-in")
      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/icono-04.svg', alt='Texto que describa la imagen')

          h4.text-center Factores psicológicos
          p Motivaciones, percepciones, actitudes y personalidad.
      
      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/icono-05.svg', alt='Texto que describa la imagen')

          h4.text-center Factores sociales
          p Influencias de grupos de referencia, familia, y roles sociales.

      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/icono-06.svg', alt='Texto que describa la imagen')

          h4.text-center Factores culturales
          p Valores, creencias, y normas culturales que guían el comportamiento.
      
      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/icono-07.svg', alt='Texto que describa la imagen')

          h4.text-center Factores personales
          p Edad, ocupación, estilo de vida, y circunstancias económicas. 

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1. Características del cliente

    p.mb-5 El comportamiento del cliente está influenciado por una variedad de características personales y demográficas que determinan sus decisiones de compra. Entender estas características permite a las empresas desarrollar estrategias de #[i marketing] más efectivas y adaptadas a las necesidades y preferencias de diferentes segmentos de consumidores.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-left")
      .row(titulo="Sexo")
        .col-lg-12.mb-4.mb-md-0
          p El comportamiento del consumidor varía significativamente según el género, ya que hay productos y servicios que generan interés exclusivo en un género específico. Las empresas deben reconocer estas diferencias y adaptar sus estrategias de #[i marketing] y ventas para atraer a hombres y mujeres de manera efectiva, ofreciendo productos que resuenen con las preferencias y necesidades de cada género.

        figure
          img(src='@/assets/curso/temas/tema3/img-03.png', alt='Texto que describa la imagen')
        
      .row(titulo="Edad")
        .col-lg-12.mb-4.mb-md-0
          p La edad es un factor determinante en las decisiones de compra, ya que las necesidades, intereses y comportamientos de consumo cambian a lo largo de las diferentes etapas de la vida. Existen rangos de edad que influyen de manera relativa en la elección de productos y marcas:
          p #[b Niños:] con el tiempo, los niños se han convertido en un grupo influyente en las decisiones de compra, especialmente en productos de consumo. Las empresas deben diseñar estrategias de ventas que consideren el comportamiento de los niños al lanzar nuevos productos, ya que estos suelen tener una fuerte influencia en las decisiones de compra de sus padres.
          p #[b Adolescentes:] para los adolescentes, el dinero no suele ser un obstáculo significativo, ya que utilizan tanto sus propios recursos como los de sus familiares. La interacción del vendedor con este grupo debe ser honesta y transparente, proporcionando información veraz y dándoles la relevancia que necesitan para sentirse importantes en el proceso de compra.
          p #[b Adultos cercanos a la longevidad:] este grupo suele ser más reservado y desconfiado en sus decisiones de compra, debido a sus ingresos y al estado de ánimo y salud que pueden no ser los mejores. Los vendedores deben tratar a estos clientes con especial consideración, brindando un servicio personalizado que tenga en cuenta sus necesidades específicas.
          p #[b Personas de la tercera edad:] los longevos o personas mayores tienden a preferir interacciones que no requieran desplazamientos significativos. Son más receptivos a los vendedores y valoran la atención directa. Este grupo requiere un enfoque de ventas que priorice la comodidad y la claridad en la comunicación. 
        
        figure
          img(src='@/assets/curso/temas/tema3/img-04.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img-05.svg', alt='')
      .col-lg-7.mb-3(data-aos="fade-left")
        h3.mb-5
          span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Estrategias transgeneracionales
        p.mb-5 Dado que los consumidores de diferentes edades tienen distintas necesidades, las estrategias de #[i marketing] deben ser inclusivas y estar diseñadas para atraer a todos los miembros de la familia. Estas estrategias, conocidas como #[b Transgeneracionales,] deben utilizar mensajes simples y accesibles, evitando la complejidad, y apoyarse en medios impresos y temáticas que resuenen con todos los segmentos de edad.
        
        h3.mb-5
          span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Nacionalidad
        p La nacionalidad y la cultura asociada juegan un papel crucial en el comportamiento del consumidor. Las preferencias y necesidades varían según el contexto cultural, lo que significa que el mismo producto puede ser percibido de manera diferente en distintos países o regiones. Por ejemplo, la compra de ropa se ve afectada por la presencia o ausencia de estaciones climáticas en un país, lo que influye en la demanda de ciertos tipos de vestimenta.

    .back-pink.mb-4.p-md-5.p-4
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          h3.mb-5
            span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Ocupación
          p.mb-5 El rol laboral y el nivel de ingresos asociados determinan en gran medida el comportamiento de compra de un cliente. Es evidente que un auxiliar en una empresa y un jefe de área tienen diferentes capacidades de compra y, por lo tanto, sus comportamientos como consumidores varían significativamente. Las estrategias de venta deben considerar estos factores y adaptar las ofertas y mensajes para resonar con las circunstancias ocupacionales de cada segmento.
          
          h3.mb-5
            span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Nivel de escolaridad
          p El nivel de escolaridad del cliente influye directamente en su proceso de toma de decisiones. A mayor nivel de educación, el consumidor tiende a hacer preguntas más detalladas sobre la funcionalidad y la importancia del producto que está considerando comprar. Además, estos consumidores suelen estar más influenciados por la marca y por los comentarios o reseñas que han escuchado acerca de los productos.

        .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema3/img-06.svg', alt='Imagen decorativa')

    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i(style="color: #FFFF !important").fas.fa-tag] Estrategias transgeneracionales

    p.mb-5 El nivel de ingreso es uno de los factores más influyentes en el comportamiento del consumidor. Las decisiones de compra dependen en gran medida de los ingresos disponibles, y el acceso a crédito puede ser una opción viable o no, dependiendo de la capacidad financiera del consumidor para asumir dicha deuda. Es importante tener en cuenta no solo los ingresos, sino también los ahorros y los intereses personales del cliente al diseñar estrategias de venta que se alineen con sus capacidades y preferencias financieras.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2. Técnicas de análisis de comportamiento del consumidor

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p.mb-4(data-aos="fade-right") Identificar los comportamientos del consumidor en las diferentes etapas del proceso de compra es un reto significativo para los vendedores. Las características individuales de los clientes son factores determinantes en sus decisiones de compra. Por lo tanto, es esencial que los vendedores estén capacitados para analizar estos comportamientos, considerando la amplia variedad de factores y estímulos que influyen en el proceso de decisión y que pueden facilitar el cierre de la venta.
        .cajon.color-primario.p-4.mb-4(style="background-color:#FFFAC1")
          p.mb-0 El análisis del comportamiento del consumidor se centra en la capacidad de definir y entender factores como los hábitos de consumo, preferencias, comportamientos, y gustos de los clientes. Este análisis permite a las empresas diseñar estrategias que hagan sentir al cliente valorado, facilitando así su decisión de compra del producto o servicio ofertado.
        p.mb-4(data-aos="fade-right") Para realizar un análisis efectivo del comportamiento del consumidor, no siempre es necesario emprender una investigación de mercado extensa, que puede ser costosa y prolongada. En su lugar, existen técnicas más ágiles y directas que pueden proporcionar información valiosa. A continuación, se describen algunas de estas técnicas:
      
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img-07.svg', alt='Imagen decorativa')

    TabsC.color-acento-botones.mt-5.mb-5.color_img-tab.bg_1(data-aos="fade-left")
      .p-4(titulo="1. Encuesta")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema3/img-08.png', alt='Texto que describa la imagen')
              
          .col-lg-7
            p La encuesta es una técnica que consiste en formular preguntas por escrito a los consumidores, con el objetivo de identificar sus gustos, preferencias y características relacionadas con productos o servicios específicos. Por ejemplo, una pregunta podría ser: "¿Cuál es el color que más le agrada?"
            p #[b Proceso de análisis:]
            p.mb-0 #[b Tabulación de datos:] los resultados de las encuestas se recopilan y organizan para su análisis. Estudio y conclusiones: se analizan los datos para identificar tendencias y patrones en las respuestas.
            p.mb-0 #[b Definición de estrategias:] las conclusiones obtenidas se utilizan para diseñar estrategias de oferta que cumplan con las expectativas del cliente en términos de producto, precio, canal de distribución y promoción.
      
      .p-4(titulo="2. Entrevista")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema3/img-09.png', alt='Texto que describa la imagen')

          .col-lg-7
            p A diferencia de la encuesta, la entrevista es una técnica de análisis más personal, que puede realizarse de manera individual o grupal. Las entrevistas pueden llevarse a cabo después de una demostración de producto, incorporando preguntas como: "¿Qué le gustó del producto?"
            p #[b Aplicaciones de la entrevista:]
            p #[b Lanzamiento de nuevos productos:] las entrevistas pueden ayudar a identificar las expectativas de los consumidores antes del lanzamiento de un nuevo producto.
            p #[b Mejora de productos existentes:] también son útiles para comprender por qué un producto ya en el mercado no ha tenido el éxito esperado, permitiendo realizar ajustes que mejoren la satisfacción del consumidor.

      .p-4(titulo="3. Observación")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema3/img-010.png', alt='Texto que describa la imagen')

          .col-lg-7
            p La observación es una técnica que no requiere interacción directa con el consumidor. Puede aplicarse tanto a consumidores que realizan compras de manera presencial como a aquellos que compran a través de plataformas en línea. El objetivo es observar cómo los consumidores toman decisiones de compra, incluyendo cómo evalúan los beneficios e inconvenientes de productos o marcas específicos. Los beneficios más notorios de la observación bien realizada son:
            p.mb-0 #[b Identificación de inconvenientes:] permite identificar las dificultades que enfrentan los consumidores al evaluar un producto o servicio.
            p.mb-0 #[b  Adaptación de estrategias:] los vendedores pueden ajustar sus estrategias de venta para abordar las preocupaciones observadas y asegurar que el producto cumpla con las expectativas del consumidor.
    
    p.mb-5 Realizar un análisis detallado del comportamiento del consumidor proporciona varios beneficios a los vendedores y a la organización en general:

    .row.mb-5(data-aos="zoom-in")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/icono-08.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones(style="background-color:#FFE3C7")
            .text-black.p-4
              h3.text-center Conocimiento del consumidor
              p Permite identificar con precisión lo que el cliente desea y espera del producto o servicio.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/icono-09.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones(style="background-color:#FFE3C7")
            .p-4
              h3.text-center Entendimiento del proceso de compra
              p Ayuda a comprender cómo y por qué los consumidores se comportan de cierta manera durante el proceso de compra, lo que es crucial para influir en sus decisiones.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/icono-010.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones(style="background-color:#FFE3C7")
            .text-black.p-4
              h3.text-center Conocimiento de los procesos internos del consumidor
              p Requiere que el vendedor desarrolle habilidades para interpretar los estímulos internos que influyen en la decisión de compra, lo que puede ser clave para cerrar una venta con éxito.









</template>

<script>
export default {
  name: 'Tema3',
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
