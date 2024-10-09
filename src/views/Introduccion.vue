<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/introduccion/img-01.svg', alt='')
      .col-lg-7.mb-3(data-aos="fade-left")
        p Cada día en el trabajo de las ventas con su alta competitividad no basta con tener un buen producto o servicio; es esencial entender profundamente al consumidor y perfeccionar las técnicas de cierre de ventas. Los vendedores exitosos deben ser capaces de identificar y responder a las necesidades y expectativas de sus clientes en cada etapa del proceso de compra. Este componente formativo se enfoca en capacitar a los aprendices en el análisis del comportamiento del consumidor, permitiéndoles anticipar sus reacciones y adaptar sus estrategias para maximizar la efectividad de las ventas.
        p Además, en un entorno donde la lealtad del cliente se ha convertido en un activo invaluable, comprender y aplicar técnicas de Customer Relationship Management (CRM) es crucial. El CRM no solo ayuda a gestionar las relaciones con los clientes de manera más eficiente, sino que también proporciona las herramientas necesarias para personalizar las interacciones, mejorar la experiencia del cliente y fomentar la fidelización a largo plazo. Al dominar estas técnicas, los vendedores pueden asegurarse de que cada cliente reciba un servicio que no solo satisfaga sus necesidades inmediatas, sino que también fortalezca su conexión con la marca.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-down-right")
        .cajon.color-primario.p-4(style="background-color:#FFFAC1")
          p.mb-0 Finalmente, este componente formativo aborda la importancia de las políticas de servicio y el servicio posventa, aspectos fundamentales para mantener y ampliar la base de clientes. Una política de servicio bien definida, junto con un sólido plan de posventa, asegura que los clientes se sientan valorados y respaldados, incluso después de realizada la venta. A través de la implementación de estas estrategias, los aprendices estarán preparados para enfrentar los desafíos del mercado actual, mejorando la calidad del servicio y asegurando el éxito sostenido de la empresa.

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-up")
        h3.mb-5
          span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i.fas.fa-tag] Mapa Conceptual:

        figure.mb-5
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/introduccion/img-02-01.svg', alt='La imagen comparte un mapa de conceptos relacionados al cierre de la negociación en cuatro conceptos, el primero es el de técnicas de cierre de ventas, seguido por la relación con los clientes a partir de una red, en seguida está el apoyo que las técnicas pueden dar y se cierra con el concepto de la garantía y el servicio postventa como aliado fundamental en la fidelización.')
          img.d-block.d-lg-none(src='@/assets/curso/temas/introduccion/img-02-02.svg', alt='La imagen comparte un mapa de conceptos relacionados al cierre de la negociación en cuatro conceptos, el primero es el de técnicas de cierre de ventas, seguido por la relación con los clientes a partir de una red, en seguida está el apoyo que las técnicas pueden dar y se cierra con el concepto de la garantía y el servicio postventa como aliado fundamental en la fidelización.') 

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)








</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
