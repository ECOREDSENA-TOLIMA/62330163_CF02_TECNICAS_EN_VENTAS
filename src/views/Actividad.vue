<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario" />
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        'Esta actividad le permitirá determinar el grado de apropiación de los contenidos del componente formativo. Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'El modelo AIDA se compone de las etapas: atención, interés, deseo y acción.',
          imagen: require('@/assets/componentes/pregunta_1.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! El modelo AIDA se estructura en estas cuatro etapas clave para guiar al cliente a través del proceso de compra.',
          mensaje_incorrecto:
            'Incorrecto. El modelo AIDA se compone de las etapas: Atención, Interés, Deseo y Acción.',
        },
        {
          id: 2,
          texto:
            'La técnica SPIN se enfoca en la presentación directa de los beneficios del producto sin investigar las necesidades del cliente.',
          imagen: require('@/assets/componentes/pregunta_2.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! La técnica SPIN se basa en hacer preguntas estratégicas para identificar las necesidades del cliente antes de presentar los beneficios del producto.',
          mensaje_incorrecto:
            'Incorrecto. La técnica SPIN se centra en investigar y comprender las necesidades del cliente antes de ofrecer soluciones.',
        },
        {
          id: 3,
          texto:
            'El CRM solo es útil para las empresas grandes, ya que se enfoca únicamente en la gestión de grandes volúmenes de datos.',
          imagen: require('@/assets/componentes/pregunta_3.jpg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! El CRM es útil para empresas de cualquier tamaño, ya que se enfoca en gestionar las relaciones con los clientes de manera eficiente.',
          mensaje_incorrecto:
            'Incorrecto. El CRM es útil para empresas de cualquier tamaño, ya que mejora la gestión de las relaciones con los clientes, personalizando las interacciones y fomentando la fidelización.',
        },
        {
          id: 4,
          texto:
            'El cierre de una venta conlleva únicamente la finalización de una transacción y no requiere un seguimiento posventa.',
          imagen: require('@/assets/componentes/pregunta_3.jpg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El cierre de una venta implica un compromiso de acompañamiento continuo con el cliente, lo que incluye un buen servicio posventa.',
          mensaje_incorrecto:
            'Incorrecto. El cierre de una venta también incluye el acompañamiento posventa para asegurar la satisfacción del cliente y fomentar la fidelidad.',
        },
        {
          id: 5,
          texto:
            'La garantía legal obliga al proveedor a responder por la calidad y el funcionamiento del producto, sin necesidad de indemnizar al cliente.',
          imagen: require('@/assets/componentes/pregunta_3.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! La garantía legal garantiza la reparación o el reemplazo del producto sin necesidad de indemnizar al cliente.',
          mensaje_incorrecto:
            'Incorrecto. La garantía legal obliga al proveedor a reparar o reemplazar el producto defectuoso, pero no incluye indemnización al cliente.',
        },
        {
          id: 6,
          texto:
            'El servicio posventa no influye en la lealtad del cliente hacia la marca.',
          imagen: require('@/assets/componentes/pregunta_3.jpg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Un buen servicio posventa es crucial para fortalecer la relación con el cliente y fomentar su lealtad hacia la marca.',
          mensaje_incorrecto:
            'Incorrecto. El servicio posventa es esencial para mantener la lealtad del cliente, ya que asegura su satisfacción y su experiencia positiva con la marca.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicitaciones, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
    },
  }),
  computed: {},
  methods: {},
}
</script>
