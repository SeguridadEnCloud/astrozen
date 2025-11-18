import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Valeria Montoya — Chief Financial Operations Officer",
  author: "Finanzalpes S.A.S.",
  description:
    "Ejecutiva sénior en Finanzalpes S.A.S., especializada en estrategia financiera, gestión de portafolios corporativos y planeación operativa.",
  lang: "es",
  siteLogo: "/valeria-small.png",
  navLinks: [
    { text: "Experiencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Sobre mí", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://finanzalpes.com/" },
    { text: "Correo Corporativo", href: "mailto:valeria.montoya@finanzalpes.com" },,
    { text: "Calendario", href: "https://finanzalpes.com/calendar-vmontoya" }
  ],
  socialImage: "/valeria-og.png",
  canonicalURL: "https://valeria-montoya.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Valeria Montoya",
    specialty: "Chief Financial Operations Officer",
    summary:
      "Ejecutiva sénior en Finanzalpes S.A.S., enfocada en estrategia financiera, optimización operativa y gestión de portafolios corporativos. Más de 12 años de experiencia en banca digital y fintech.",
    email: "valeria.montoya@finanzalpes.com",
  },

  experience: [
    {
      company: "Finanzalpes S.A.S.",
      position: "Chief Financial Operations Officer (CFOO)",
      startDate: "Ene 2020",
      endDate: "Actualidad",
      summary: [
        "Lidero la planeación financiera corporativa, con enfoque en asignación estratégica de capital y eficiencia operativa.",
        "Supervisión de cumplimiento regulatorio, relación con inversionistas y auditorías externas.",
        "Implementación de modelos que optimizaron costos internos en un 18% durante el primer año.",
      ],
    },
    {
      company: "Bancovalor",
      position: "Directora de Planeación Financiera",
      startDate: "Feb 2015",
      endDate: "Dic 2019",
      summary: [
        "Desarrollo de modelos de riesgo, proyecciones financieras y análisis de liquidez.",
        "Diseño de estrategias de crecimiento para banca digital y modernización de procesos financieros.",
      ],
    },
    {
      company: "FinanRed",
      position: "Analista Senior de Estrategia Financiera",
      startDate: "Jul 2012",
      endDate: "Ene 2015",
      summary:
        "Responsable de la elaboración de informes de desempeño financiero y modelos analíticos para toma de decisiones ejecutivas.",
    },
  ],

  projects: [
    {
      name: "Informe Operativo Trimestral 2024",
      summary:
        "Reporte ejecutivo sobre métricas de liquidez, desempeño financiero y análisis de riesgo institucional.",
      linkPreview: "/docs/reporte_ecopetrol(1).docx",
      linkSource: "https://finanzalpes.com",
      image: "/project1.png",
    },
    {
      name: "Modelo de Optimización de Portafolios",
      summary:
        "Documento técnico sobre estrategias de diversificación, asignación de activos y gestión integral de riesgo.",
      linkPreview: "/docs/reporte_epm.docx",
      linkSource: "https://finanzalpes.com",
      image: "/project2.png",
    },
    {
      name: "Auditoría Interna de Cumplimiento 2023",
      summary:
        "Evaluación detallada de cumplimiento normativo según lineamientos de la Superintendencia Financiera.",
      linkPreview: "/docs/reportes_empresas.xlsx",
      linkSource: "https://finanzalpes.com",
      image: "/project3.png",
    },
  ],

  about: {
    description: `
      Soy Valeria Montoya, ejecutiva financiera con trayectoria en banca digital, fintech y gestión estratégica de portafolios. Actualmente lidero la operación financiera de Finanzalpes S.A.S., con enfoque en eficiencia operativa, escalabilidad y cumplimiento regulatorio.

      He trabajado durante más de una década optimizando procesos financieros, gestionando riesgos y fortaleciendo relaciones con inversionistas. Me caracterizo por un liderazgo colaborativo, una visión estratégica y una orientación constante a resultados.
    `,
    image: "/valeria-big.jpg",
  },
};

// #5755ff
