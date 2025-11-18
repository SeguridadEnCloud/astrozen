import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Valeria Montoya — Chief Financial Operations Officer",
  author: "Finanzalpes S.A.S.",
  description:
    "Ejecutiva sénior en Finanzalpes S.A.S., especializada en estrategia financiera, gestión de portafolios corporativos y planeación operativa. Más de 12 años de experiencia en banca digital y fintech.",
  lang: "es",
  siteLogo: "/valeria-small.jpg", // reemplazar imagen en /public
  navLinks: [
    { text: "Experiencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Sobre mí", href: "#about" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://linkedin.com/valeria-montoya", 
    },
    {
      text: "Calendario",
      href: "https://finanzalpes.com/", // honeytoken
    }
  ],
  socialImage: "/valeria-og.png", // crea esta imagen, puede ser un banner
  canonicalURL: "https://valeria-montoya.vercel.app",
};


export const SITE_CONTENT = {
  hero: {
    name: "Valeria Montoya",
    title: "Chief Financial Operations Officer",
    description:
      "Ejecutiva sénior en Finanzalpes S.A.S., especializada en estrategia financiera, gestión de portafolios corporativos y planeación operativa. Más de 12 años de experiencia en banca digital y fintech.",
    email: "valeria.montoya@finanzalpes.com",
    image: "/valeria-small.jpg", // reemplaza la imagen en /public
  },

  experience: [
    {
      company: "Finanzalpes S.A.S.",
      role: "Chief Financial Operations Officer (CFOO)",
      period: "Ene 2020 — Actualidad",
      bullets: [
        "Lidero la planeación financiera corporativa, gestionando la asignación de capital y portafolios de inversión institucional.",
        "Superviso el cumplimiento regulatorio y las auditorías financieras externas.",
        "Implementé modelos operativos que redujeron costos en un 18% durante el primer año."
      ],
    },
    {
      company: "Bancovalor",
      role: "Directora de Planeación Financiera",
      period: "Feb 2015 — Dic 2019",
      bullets: [
        "Desarrollo de modelos de riesgo, proyecciones financieras y análisis de liquidez.",
        "Coordinación de procesos de planeación estratégica para banca digital."
      ],
    }
  ],

  projects: [
    {
      name: "Informe Operativo Trimestral 2024",
      description:
        "Reporte ejecutivo sobre desempeño financiero, métricas de liquidez, flujos de inversión y análisis de riesgo corporativo.",
      image: "/project1.png",
      source: "https://finanzalpes.com/docs/reporte-operativo.pdf",
      preview: "https://finanzalpes.com/track?ref=proyecto1"
    },
    {
      name: "Modelo de Optimización de Portafolios",
      description:
        "Documento interno sobre estrategias de diversificación y optimización de activos institucionales.",
      image: "/project2.png",
      source: "https://finanzalpes.com/docs/optimizacion.pdf",
      preview: "https://finanzalpes.com/track?ref=proyecto2"
    },
    {
      name: "Auditoría Interna 2023",
      description:
        "Evaluación detallada de cumplimiento normativo y matriz de riesgos según lineamientos de la Superintendencia Financiera.",
      image: "/project3.png",
      source: "https://finanzalpes.com/docs/auditoria.pdf",
      preview: "https://finanzalpes.com/track?ref=proyecto3"
    }
  ],

  // Dentro de hero:
  hiddenNotes: [
    "alt-email: v.montoya.admin@finanzalpes.com",
    "internal-ext: 2214",
    "last-update: 2024-12",
  ],


  about: {
    bio:
      "Soy Valeria Montoya, ejecutiva financiera con experiencia en banca digital, fintech y gestión estratégica de portafolios. Actualmente lidero la operación financiera de Finanzalpes S.A.S., con un enfoque en eficiencia, escalabilidad corporativa y cumplimiento regulatorio. Me caracteriza el liderazgo colaborativo, la visión estratégica y la orientación a resultados.",
    image: "/valeria-big.jpg"
  }
};



// #5755ff
