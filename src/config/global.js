export default {
  global: {
    componenteFormativo: 'Técnicas de ventas y comportamiento del consumidor',
    descripcionCurso:
      'Este componente formativo se centra en la capacitación de los aprendices en técnicas avanzadas de cierre de ventas, análisis del comportamiento del consumidor, y el desarrollo de políticas de servicio que optimicen la relación con el cliente, asegurando su fidelización y el cumplimiento de los objetivos estratégicos de la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de cierre de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnica de cierre de ventas AIDA',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnica de cierre de ventas SPIN',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Otras técnicas de cierre de ventas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: '<em>Customer Relationship Management</em> (CRM)',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Técnica de planteamiento psicocibernético o de simulación cerebral',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Garantía y servicio posventa',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Política de servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comportamiento del consumidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características del cliente',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de análisis de comportamiento del consumidor',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_62330163_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1 Técnica de cierre de ventas AIDA',
      referencia:
        'TEDx Talks (2022). Entendiendo al cliente. User Experience y Psicología | Blanca B. | TEDxUC3MLive.',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=WYbh60FijSM',
    },
    {
      tema: '3. Comportamiento del consumidor',
      referencia:
        'TEDx Talks (2018). Neuromarketing: somos lo que nos emociona | David Juárez Varón | TEDxAlcoi.',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=tIAQtN8xer0',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de comportamiento',
      significado:
        'estudio de las interacciones y preferencias de los usuarios en plataformas digitales para identificar patrones de comportamiento y segmentar a los clientes de manera más precisa.',
    },
    {
      termino: 'Análisis de mercado',
      significado:
        'evaluación detallada de la competencia, identificación de oportunidades de mercado y comprensión de las tendencias del sector para tomar decisiones informadas.',
    },
    {
      termino: 'Ciclo de Vida del Producto (CVP)',
      significado:
        'etapas por las que pasa un producto desde su introducción en el mercado hasta su declive, cada una requiriendo estrategias específicas de <em>marketing</em>, producción y gestión.',
    },
    {
      termino: 'Cliente Ideal <em>(Buyer Persona)</em>',
      significado:
        'representación semi-ficticia del cliente que mejor se ajusta a los productos o servicios ofrecidos por una empresa, basada en datos demográficos, psicográficos y comportamentales.',
    },
    {
      termino: 'Datos demográficos',
      significado:
        'información cuantificable sobre la población, como edad, género, nivel educativo, ocupación y estado civil, utilizada para segmentar el mercado y comprender las características básicas de los clientes.',
    },
    {
      termino: 'Datos psicográficos',
      significado:
        'información sobre los intereses, valores, estilos de vida, actitudes y personalidad de los clientes, utilizada para una segmentación más profunda y detallada.',
    },
    {
      termino: 'Estrategias de fidelización',
      significado:
        'técnicas y acciones dirigidas a mantener a los clientes actuales comprometidos y satisfechos, incentivando su lealtad a largo plazo mediante programas de recompensas y personalización de la oferta.',
    },
    {
      termino: 'Personalización',
      significado:
        'adaptación de productos, servicios y campañas de <em>marketing</em> para satisfacer las necesidades y preferencias individuales de los clientes, mejorando la experiencia del cliente y aumentando la lealtad.',
    },
    {
      termino: 'Protección de datos personales',
      significado:
        'medidas legales y técnicas para garantizar la privacidad y seguridad de la información personal recopilada por las empresas, evitando el uso indebido y el acceso no autorizado.',
    },
    {
      termino: 'Segmentación de mercados',
      significado:
        'proceso de dividir un mercado heterogéneo en grupos más pequeños y homogéneos que comparten características similares, permitiendo a las empresas adaptar sus estrategias de <em>marketing</em> y ventas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cooper, R. G. (2017). Winning at New Products: Creating Value Through Innovation (5th ed.). Basic Books.',
    },
    {
      referencia:
        'Harvard Business Review (2024). 3 Ways to Clearly Communicate Your Company’s Strategy.',
      link:
        'https://hbr.org/2024/05/3-ways-to-clearly-communicate-your-companys-strategy',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2019). Marketing Management (15th ed.). Pearson.',
    },
    {
      referencia:
        'Revella, A. (2020). Buyer Personas: How to Gain Insight into your Customers Expectations, Align your Marketing Strategies, and Win More Business. Wiley',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ingrid Criollo García',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor pedagógico',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑADOR Y DESARROLLADOR DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
