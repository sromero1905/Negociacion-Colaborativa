// data/index.ts

interface Module {
  id: number;
  title: string;
  description: string;
  status: string;
  image: string;
  path: string;
  items: string[];
}

interface ModuleDetails {
  detail1: {
    full: string;
    mobile: string;
  };
  detail2: {
    full: string;
    mobile: string;
  };
  detail3: {
    full: string;
    mobile: string;
  };
}

interface ModuleInfo {
  id: number;
  title: string;
  path: string;
  image: string;
  additionalImage: string;
  details: ModuleDetails;
}

export const modules: Module[] = [
  {
    id: 1,
    title: "Fundamentos",
    description: "Base teórica esencial para una negociación efectiva",
    status: "Fundamentos",
    image: "/fundamentos.jpg",
    path: "fundamentos",
    items: [
      "Teoría del conflicto",
      "Bases de la negociación",
      "Modelos de comunicación",
      "Psicología del acuerdo"
    ]
  },
  {
    id: 2,
    title: "Proceso Práctico",
    description: "Aplicación y práctica en situaciones reales",
    status: "Proceso",
    image: "/proceso.jpg",
    path: "proceso",
    items: [
      "Casos de estudio reales",
      "Simulaciones guiadas",
      "Feedback personalizado",
      "Ejercicios grupales"
    ]
  },
  {
    id: 3,
    title: "Dominio",
    description: "Perfeccionamiento y técnicas avanzadas",
    status: "Avanzado",
    image: "/dominio.jpg",
    path: "dominio",
    items: [
      "Técnicas avanzadas",
      "Estrategias de cierre",
      "Gestión de conflictos",
      "Liderazgo negociador"
    ]
  }
];

export const modulesinfo: ModuleInfo[] = [
  {
    id: 1,
    title: "Fundamentos de la Negociación",
    path: "fundamentos",
    image: "/fundamentos-detail.jpg",
    additionalImage: "/fundamentos-adicional.jpg",
    details: {
      detail1: {
        full: `
          El módulo de Fundamentos establece las bases teóricas esenciales para dominar el arte de la negociación. 
          A través de un enfoque estructurado, los participantes aprenderán los principios fundamentales que sustentan 
          toda negociación exitosa. Este módulo proporciona el marco conceptual necesario para comprender la dinámica 
          de los conflictos y las estrategias para abordarlos de manera efectiva.
        `,
        mobile: `
          Aprende los principios fundamentales de la negociación y desarrolla una base sólida para resolver conflictos 
          de manera efectiva.
        `
      },
      detail2: {
        full: `
          Durante este módulo, exploraremos en profundidad la teoría del conflicto y su aplicación práctica en 
          diferentes contextos. Los participantes aprenderán modelos de comunicación efectiva que les permitirán 
          establecer conexiones significativas con las partes involucradas. Además, se estudiará la psicología del 
          acuerdo, comprendiendo los factores emocionales y cognitivos que influyen en la toma de decisiones durante 
          una negociación.
        `,
        mobile: `
          Explora la teoría del conflicto y aprende modelos de comunicación efectiva para negociaciones exitosas.
        `
      },
      detail3: {
        full: `
          Al completar este módulo fundamental, los participantes habrán desarrollado una comprensión sólida de los 
          principios básicos de la negociación. Estarán equipados con las herramientas conceptuales necesarias para 
          analizar situaciones de conflicto, identificar intereses subyacentes y diseñar estrategias efectivas de 
          negociación. Este conocimiento sentará las bases para el desarrollo de habilidades más avanzadas en los 
          módulos posteriores.
        `,
        mobile: `
          Desarrolla las herramientas conceptuales necesarias para analizar conflictos y diseñar estrategias de 
          negociación efectivas.
        `
      }
    }
  },
  {
    id: 2,
    title: "Proceso Práctico",
    path: "proceso",
    image: "/proceso-detail.jpg",
    additionalImage: "/proceso-adicional.jpg",
    details: {
      detail1: {
        full: `
          El módulo de Proceso Práctico está diseñado para transformar el conocimiento teórico en habilidades 
          aplicables. A través de casos de estudio reales y simulaciones guiadas, los participantes tendrán la 
          oportunidad de poner en práctica los conceptos aprendidos en situaciones que reflejan la complejidad 
          del mundo real.
        `,
        mobile: `
          Aplica la teoría en casos reales y desarrolla habilidades prácticas de negociación a través de simulaciones 
          guiadas.
        `
      },
      detail2: {
        full: `
          Este módulo se centra en el aprendizaje experiencial, donde cada participante recibirá feedback 
          personalizado sobre su desempeño en las simulaciones. Los ejercicios grupales están diseñados para 
          desarrollar habilidades de trabajo en equipo y adaptabilidad en diferentes contextos de negociación. 
          Se analizarán casos de estudio detallados que ilustran tanto éxitos como fracasos en negociaciones reales.
        `,
        mobile: `
          Recibe feedback personalizado y participa en ejercicios grupales para mejorar tus habilidades de negociación.
        `
      },
      detail3: {
        full: `
          Al finalizar este módulo práctico, los participantes habrán ganado confianza en su capacidad para 
          negociar efectivamente en situaciones reales. Habrán desarrollado un repertorio de técnicas y estrategias 
          probadas, respaldadas por la experiencia práctica en diversos escenarios de negociación. Este módulo 
          sirve como puente entre la teoría y la maestría avanzada en negociación.
        `,
        mobile: `
          Gana confianza y experiencia práctica en negociación a través de ejercicios y casos reales.
        `
      }
    }
  },
  {
    id: 3,
    title: "Dominio Avanzado",
    path: "dominio",
    image: "/dominio-detail.jpg",
    additionalImage: "/dominio-adicional.jpg",
    details: {
      detail1: {
        full: `
          El módulo de Dominio representa el nivel más avanzado del programa, donde los participantes perfeccionarán 
          sus habilidades y aprenderán técnicas sofisticadas de negociación. Este módulo está diseñado para aquellos 
          que buscan alcanzar la excelencia en el arte de la negociación y desarrollar un estilo personal efectivo.
        `,
        mobile: `
          Perfecciona tus habilidades y aprende técnicas avanzadas para convertirte en un negociador experto.
        `
      },
      detail2: {
        full: `
          En este nivel avanzado, se explorarán estrategias complejas de cierre y técnicas especializadas para 
          manejar negociaciones desafiantes. Los participantes aprenderán métodos avanzados de gestión de conflictos 
          y desarrollarán habilidades de liderazgo negociador. Se prestará especial atención a la psicología avanzada 
          de la negociación y a las dinámicas de poder en las interacciones comerciales.
        `,
        mobile: `
          Domina estrategias complejas de cierre y técnicas especializadas para negociaciones desafiantes.
        `
      },
      detail3: {
        full: `
          Al completar el módulo de Dominio, los participantes estarán preparados para manejar las negociaciones 
          más desafiantes con confianza y expertise. Habrán desarrollado un conjunto completo de habilidades que 
          les permitirá liderar negociaciones complejas y mentor a otros en el arte de la negociación. Este módulo 
          culmina con la capacidad de crear y adaptar estrategias innovadoras para cualquier situación de negociación.
        `,
        mobile: `
          Prepárate para liderar negociaciones complejas y desarrolla la capacidad de crear estrategias innovadoras.
        `
      }
    }
  }
];