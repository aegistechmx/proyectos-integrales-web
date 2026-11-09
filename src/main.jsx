import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Zap, DraftingCompass, Cable, ShieldCheck,
  Building2, Hotel, Factory, HardHat,
  Mail, Phone, MapPin, Menu, X, CheckCircle2, Cpu, Activity,
  Globe, Award, Sparkles, Layers, ChevronDown, ShieldAlert, FileText, MessageCircle, Download, Send
} from "lucide-react";
import "./styles.css";

/* ---------- Contenido bilingüe ---------- */

const SERVICES = [
  {
    icon: DraftingCompass,
    number: "01",
    title: { es: "Ingeniería eléctrica", en: "Electrical Engineering" },
    lead: {
      es: "Diseño y cálculo para tomar decisiones con fundamento técnico.",
      en: "Design and calculation for technically grounded decisions."
    },
    items: {
      es: [
        "Proyectos eléctricos de media y baja tensión",
        "Diseño de infraestructura eléctrica y distribución",
        "Ingeniería de subestaciones y sistemas de transformación",
        "Cálculo de sistemas de puesta a tierra y protección contra descargas atmosféricas",
        "Memorias técnicas, diagramas unifilares e ingeniería As-Built",
        "Estudios de calidad de energía e iluminación"
      ],
      en: [
        "Medium- and low-voltage electrical projects",
        "Electrical infrastructure and distribution design",
        "Substation and power transformation systems engineering",
        "Grounding systems and lightning protection design and calculation",
        "Technical reports, single-line diagrams and As-Built engineering",
        "Power quality and lighting studies"
      ]
    }
  },
  {
    icon: Cable,
    number: "02",
    title: { es: "Construcción eléctrica", en: "Electrical Construction" },
    lead: {
      es: "Ingeniería que se materializa en instalaciones.",
      en: "Engineering made into working installations."
    },
    items: {
      es: [
        "Construcción de instalaciones eléctricas de media y baja tensión",
        "Infraestructura para distribución eléctrica",
        "Suministro e instalación de subestaciones y transformadores",
        "Instalación de sistemas de puesta a tierra",
        "Sistemas de protección contra descargas atmosféricas",
        "Sistemas de regulación de voltaje y respaldo de energía"
      ],
      en: [
        "Construction of medium- and low-voltage electrical installations",
        "Electrical distribution infrastructure",
        "Supply and installation of substations and transformers",
        "Grounding system installation",
        "Lightning protection systems",
        "Voltage regulation and backup power systems"
      ]
    }
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: { es: "Mantenimiento eléctrico", en: "Electrical Maintenance" },
    lead: {
      es: "Conservación de infraestructura y atención a la continuidad operativa.",
      en: "Infrastructure upkeep focused on operational continuity."
    },
    items: {
      es: [
        "Mantenimiento de subestaciones y equipos eléctricos",
        "Mantenimiento de instalaciones de media y baja tensión",
        "Mantenimiento de sistemas de regulación de voltaje",
        "Sistemas de emergencia y respaldo de energía",
        "Programas de mantenimiento preventivo, predictivo y correctivo"
      ],
      en: [
        "Substation and electrical equipment maintenance",
        "Medium- and low-voltage installation maintenance",
        "Voltage regulation system maintenance",
        "Emergency and backup power systems",
        "Preventive, predictive and corrective maintenance programs"
      ]
    }
  }
];

const PROJECTS = [
  {
    number: "01",
    name: "One&Only Mandarina Private Homes",
    image: "/proyecto-mandarina.jpg",
    location: { es: "El Monteón · Riviera Nayarit", en: "El Monteón · Riviera Nayarit" },
    category: "residencial",
    scope: {
      es: "Ingeniería de diseño eléctrico en media y baja tensión para villas residenciales.",
      en: "Medium- and low-voltage electrical design engineering for residential villas."
    }
  },
  {
    number: "02",
    name: "El Banco Estate · Lotes 01 y 02",
    image: "/proyecto-banco.jpg",
    location: { es: "Riviera Nayarit", en: "Riviera Nayarit" },
    category: "residencial",
    scope: {
      es: "Ingeniería de diseño eléctrico en media y baja tensión.",
      en: "Medium- and low-voltage electrical design engineering."
    },
    capacity: {
      es: ["Servicio normal: 300 kVA", "Servicio de emergencia: 272 kVA"],
      en: ["Normal service: 300 kVA", "Emergency service: 272 kVA"]
    }
  },
  {
    number: "03",
    name: "Torres Designo",
    image: "/proyecto-designo.jpg",
    location: { es: "Huixquilucan · Estado de México", en: "Huixquilucan · State of Mexico" },
    category: "comercial",
    scope: {
      es: "Ingeniería eléctrica As-Built en media y baja tensión, para revisión ante UVIE.",
      en: "As-Built electrical engineering in medium and low voltage, for UVIE review."
    },
    capacity: {
      es: ["Servicio normal: 800 kVA", "Servicio de emergencia: 375 kVA"],
      en: ["Normal service: 800 kVA", "Emergency service: 375 kVA"]
    }
  },
  {
    number: "04",
    name: "Edificio Reforma 397",
    image: "/proyecto-reforma.jpg",
    location: { es: "Ciudad de México", en: "Mexico City" },
    category: "comercial",
    scope: {
      es: "Ingeniería e infraestructura eléctrica en media tensión; catálogo de precios unitarios.",
      en: "Medium-voltage electrical engineering and infrastructure; unit price catalog."
    },
    capacity: {
      es: ["Servicio normal: 9 MVA", "Servicio de emergencia: 5 MVA"],
      en: ["Normal service: 9 MVA", "Emergency service: 5 MVA"]
    }
  },
  {
    number: "05",
    name: "Fraccionamiento Vista Destiladeras",
    image: "/proyecto-destiladeras.jpg",
    location: { es: "Riviera Nayarit", en: "Riviera Nayarit" },
    category: "residencial",
    scope: {
      es: "Ingeniería de diseño e infraestructura eléctrica en media y baja tensión.",
      en: "Medium- and low-voltage electrical design and infrastructure engineering."
    },
    capacity: {
      es: ["Servicio normal: 850 kVA"],
      en: ["Normal service: 850 kVA"]
    }
  },
  {
    number: "06",
    name: "Casa Noosa",
    image: "/proyecto-noosa.jpg",
    location: { es: "Punta de Mita · Nayarit", en: "Punta de Mita · Nayarit" },
    category: "residencial",
    scope: {
      es: "Ingeniería de diseño eléctrico en media y baja tensión.",
      en: "Medium- and low-voltage electrical design engineering."
    },
    capacity: {
      es: ["Servicio normal: 150 kVA", "Servicio de emergencia: 136 kVA"],
      en: ["Normal service: 150 kVA", "Emergency service: 136 kVA"]
    }
  }
];

const SECTORS = [
  {
    icon: Building2,
    number: "01",
    title: { es: "Desarrollos inmobiliarios", en: "Real Estate Developments" },
    description: {
      es: "Ingeniería eléctrica para desarrollos residenciales, conjuntos habitacionales, villas y proyectos de usos mixtos.",
      en: "Electrical engineering for residential developments, housing complexes, villas and mixed-use projects."
    }
  },
  {
    icon: HardHat,
    number: "02",
    title: { es: "Constructoras y desarrolladores", en: "Builders and Developers" },
    description: {
      es: "Colaboración técnica en infraestructura eléctrica, desde el diseño y cálculo hasta la integración de soluciones para su ejecución.",
      en: "Technical collaboration on electrical infrastructure, from design and calculation to integrating solutions for execution."
    }
  },
  {
    icon: Hotel,
    number: "03",
    title: { es: "Hoteles y desarrollos turísticos", en: "Hotels and Tourism Developments" },
    description: {
      es: "Soluciones eléctricas para hoteles y complejos turísticos, considerando distribución, transformación y respaldo de energía.",
      en: "Electrical solutions for hotels and resort complexes, covering distribution, transformation and backup power."
    }
  },
  {
    icon: Factory,
    number: "04",
    title: { es: "Industria y comercio", en: "Industry and Commerce" },
    description: {
      es: "Ingeniería eléctrica para instalaciones industriales y comerciales, atendiendo sus necesidades de capacidad, seguridad y continuidad operativa.",
      en: "Electrical engineering for industrial and commercial facilities, addressing their capacity, safety and operational continuity needs."
    }
  }
];

const UI = {
  es: {
    docLang: "es-MX",
    docTitle: "Ingeniería eléctrica en Puerto Vallarta | Proyectos Integrales",
    docDescription: "Proyectos Integrales desarrolla soluciones de ingeniería eléctrica en Puerto Vallarta, Jalisco: diseño y cálculo eléctrico, media y baja tensión, puesta a tierra, protección y gestión técnica de proyectos.",
    ogLocale: "es_MX",
    nav: ["Nosotros", "Servicios", "Experiencia", "Sectores", "Contacto"],
    navAria: "Navegación principal",
    navCta: "Hablemos de tu proyecto",
    brandAria: "Proyectos Integrales, inicio",
    menuOpenLabel: "Abrir menú",
    menuCloseLabel: "Cerrar menú",
    langLabel: "Cambiar idioma",
    heroEyebrow: "INGENIERÍA · CONSTRUCCIÓN · MANTENIMIENTO",
    heroTitleA: "Ingeniería eléctrica que se convierte en",
    heroTitleB: "soluciones reales.",
    heroLead: "Desarrollamos soluciones eléctricas para proyectos residenciales, comerciales, turísticos e industriales. Integramos diseño, cálculo, suministro, instalación y mantenimiento con criterio técnico y atención personalizada.",
    heroCta: "Solicitar propuesta técnica",
    heroSecondary: "Conocer nuestra experiencia",
    heroNote: "Puerto Vallarta, Jalisco · Bahía de Banderas, Nayarit",
    heroVisualAria: "Gráfico técnico de ingeniería eléctrica",
    chipLeftSmall: "INFRAESTRUCTURA",
    chipRightSmall: "PRECISIÓN TÉCNICA",
    labelTop: "INGENIERÍA APLICADA",
    focusLabel: "ENFOQUE",
    labelBottom: "ANÁLISIS · DISEÑO · SOLUCIÓN",
    coordinate: ["DISEÑO", "CÁLCULO", "INFRAESTRUCTURA"],
    heroFooterA: "DISEÑO CON FUNDAMENTO",
    heroFooterB: "DECISIONES CON CRITERIO TÉCNICO",
    aboutKicker: "01 / QUIÉNES SOMOS",
    aboutTitleA: "Ingeniería con experiencia.",
    aboutTitleB: "Ejecución con criterio.",
    aboutP1: "Fundada en 2013, Proyectos Integrales es una empresa mexicana especializada en ingeniería eléctrica, construcción y mantenimiento.",
    aboutP2: "Desarrollamos soluciones que abarcan desde el diseño técnico hasta la ejecución de infraestructura bajo estrictas normas nacionales e internacionales.",
    signature: "No adivinamos. Calculamos.",
    dataExperience: "EXPERIENCIA",
    dataExperienceValue: "Desde 2013",
    dataExperienceSub: "Trayectoria firme",
    dataNorm: "NORMATIVA",
    dataNormSub: "Estándar oficial",
    dataSpecialty: "ESPECIALIDAD",
    dataSpecialtyValue: "Media y Baja Tensión",
    dataSpecialtySub: "Infraestructura",
    servicesKicker: "02 / SERVICIOS",
    servicesTitleA: "Soluciones eléctricas.",
    servicesTitleB: "De la ingeniería a la ejecución.",
    servicesIntro: "Integramos conocimiento técnico, suministro de materiales y equipos, construcción y mantenimiento para desarrollar infraestructura eléctrica confiable y funcional.",
    consultAria: "Consultar por",
    serviceNote: "Especial atención a infraestructura de media tensión, subestaciones y transformadores.",
    experienceKicker: "03 / EXPERIENCIA",
    experienceTitleA: "Experiencia que respalda",
    experienceTitleB: "cada proyecto.",
    experienceIntro: "Participación en desarrollos de ingeniería eléctrica de alta escala.",
    filterAll: "TODOS LOS PROYECTOS",
    filterResidential: "RESIDENCIAL DE LUJO",
    filterCommercial: "COMERCIAL / MIXTO",
    projectSuffix: "/ PROYECTO",
    experienceFootnote: "Los alcances descritos corresponden a la participación de Proyectos Integrales en cada contrato.",
    portfolioTitle: "Currículum empresarial",
    portfolioText: "Conoce nuestros servicios, normas y proyectos en un solo documento.",
    portfolioBtn: "Descargar portafolio (PDF)",
    brandsKicker: "ESTÁNDARES Y FABRICANTES HOMOLOGADOS",
    sectorsKicker: "04 / SECTORES QUE ATENDEMOS",
    sectorsTitleA: "Ingeniería para proyectos",
    sectorsTitleB: "que exigen precisión.",
    sectorsIntro: "Adaptamos cada solución a los requerimientos operativos y de infraestructura de cada sector.",
    philosophyKicker: "05 / NUESTRA FILOSOFÍA",
    philosophyTitleA: "No adivinamos.",
    philosophyTitleB: "Calculamos.",
    philosophyCopy: "Cada proyecto exige análisis, precisión y decisiones técnicas fundamentadas.",
    step1Title: "Entender",
    step1Text: "Definimos las necesidades, condiciones y alcance técnico del proyecto.",
    step2Title: "Analizar y diseñar",
    step2Text: "Evaluamos alternativas y desarrollamos la solución de ingeniería correspondiente.",
    step3Title: "Integrar",
    step3Text: "Documentamos criterios y coordinamos los aspectos técnicos necesarios para avanzar.",
    contactKicker: "06 / CONTACTO",
    contactTitleA: "Hablemos de tu",
    contactTitleB: "próximo proyecto.",
    contactIntro: "Cuéntanos qué estás desarrollando. Podemos conversar sobre el alcance y los retos técnicos de tu obra.",
    formName: "Nombre",
    formNamePh: "Tu nombre",
    formCompany: "Empresa / Desarrollo",
    formCompanyPh: "Constructora o desarrollo",
    formContact: "Correo o teléfono",
    formContactPh: "Para responderte",
    formMessage: "Cuéntanos de tu proyecto",
    formMessagePh: "Tipo de obra, ubicación, media o baja tensión, fechas…",
    formSubmit: "Enviar solicitud por correo",
    formNote: "Se abrió tu correo con la solicitud lista para enviar. Si no se abrió, escríbenos directo a proyectosintegralespv@gmail.com.",
    formSubject: "Solicitud de propuesta técnica",
    formBodyLabels: ["Nombre", "Empresa / Desarrollo", "Contacto"],
    contactCell: "Celular",
    contactOffice: "Oficina",
    contactLocation: "Puerto Vallarta, Jalisco · Bahía de Banderas, Nayarit",
    whatsappAria: "Escríbenos por WhatsApp",
    whatsappText: "Hola%20Proyectos%20Integrales%2C%20quiero%20una%20propuesta%20t%C3%A9cnica%20para%20mi%20proyecto."
  },
  en: {
    docLang: "en",
    docTitle: "Electrical Engineering in Puerto Vallarta | Proyectos Integrales",
    docDescription: "Proyectos Integrales delivers electrical engineering solutions in Puerto Vallarta, Jalisco: electrical design and calculation, medium and low voltage, grounding, protection and technical project management.",
    ogLocale: "en_US",
    nav: ["About Us", "Services", "Experience", "Sectors", "Contact"],
    navAria: "Main navigation",
    navCta: "Let's talk about your project",
    brandAria: "Proyectos Integrales, home",
    menuOpenLabel: "Open menu",
    menuCloseLabel: "Close menu",
    langLabel: "Change language",
    heroEyebrow: "ENGINEERING · CONSTRUCTION · MAINTENANCE",
    heroTitleA: "Electrical engineering that becomes",
    heroTitleB: "real solutions.",
    heroLead: "We develop electrical solutions for residential, commercial, tourism and industrial projects. We integrate design, calculation, supply, installation and maintenance with technical judgment and personal attention.",
    heroCta: "Request a technical proposal",
    heroSecondary: "See our experience",
    heroNote: "Puerto Vallarta, Jalisco · Bahía de Banderas, Nayarit",
    heroVisualAria: "Technical electrical engineering graphic",
    chipLeftSmall: "INFRASTRUCTURE",
    chipRightSmall: "TECHNICAL PRECISION",
    labelTop: "APPLIED ENGINEERING",
    focusLabel: "FOCUS",
    labelBottom: "ANALYSIS · DESIGN · SOLUTION",
    coordinate: ["DESIGN", "CALCULATION", "INFRASTRUCTURE"],
    heroFooterA: "DESIGN WITH FOUNDATION",
    heroFooterB: "DECISIONS WITH TECHNICAL JUDGMENT",
    aboutKicker: "01 / WHO WE ARE",
    aboutTitleA: "Engineering with experience.",
    aboutTitleB: "Execution with judgment.",
    aboutP1: "Founded in 2013, Proyectos Integrales is a Mexican company specializing in electrical engineering, construction and maintenance.",
    aboutP2: "We deliver solutions ranging from technical design to infrastructure execution under strict national and international standards.",
    signature: "We don't guess. We calculate.",
    dataExperience: "EXPERIENCE",
    dataExperienceValue: "Since 2013",
    dataExperienceSub: "A proven track record",
    dataNorm: "STANDARDS",
    dataNormSub: "Official standard",
    dataSpecialty: "SPECIALTY",
    dataSpecialtyValue: "Medium and Low Voltage",
    dataSpecialtySub: "Infrastructure",
    servicesKicker: "02 / SERVICES",
    servicesTitleA: "Electrical solutions.",
    servicesTitleB: "From engineering to execution.",
    servicesIntro: "We integrate technical expertise, materials and equipment supply, construction and maintenance to deliver reliable, functional electrical infrastructure.",
    consultAria: "Ask about",
    serviceNote: "Special focus on medium-voltage infrastructure, substations and transformers.",
    experienceKicker: "03 / EXPERIENCE",
    experienceTitleA: "Experience that backs",
    experienceTitleB: "every project.",
    experienceIntro: "Participation in large-scale electrical engineering developments.",
    filterAll: "ALL PROJECTS",
    filterResidential: "LUXURY RESIDENTIAL",
    filterCommercial: "COMMERCIAL / MIXED-USE",
    projectSuffix: "/ PROJECT",
    experienceFootnote: "The scopes described correspond to Proyectos Integrales' participation in each contract.",
    portfolioTitle: "Corporate Profile",
    portfolioText: "See our services, standards and projects in a single document.",
    portfolioBtn: "Download portfolio (PDF)",
    brandsKicker: "APPROVED STANDARDS AND MANUFACTURERS",
    sectorsKicker: "04 / SECTORS WE SERVE",
    sectorsTitleA: "Engineering for projects",
    sectorsTitleB: "that demand precision.",
    sectorsIntro: "We adapt every solution to each sector's operational and infrastructure requirements.",
    philosophyKicker: "05 / OUR PHILOSOPHY",
    philosophyTitleA: "We don't guess.",
    philosophyTitleB: "We calculate.",
    philosophyCopy: "Every project demands analysis, precision and technically grounded decisions.",
    step1Title: "Understand",
    step1Text: "We define the project's needs, conditions and technical scope.",
    step2Title: "Analyze and design",
    step2Text: "We evaluate alternatives and develop the corresponding engineering solution.",
    step3Title: "Integrate",
    step3Text: "We document criteria and coordinate the technical aspects needed to move forward.",
    contactKicker: "06 / CONTACT",
    contactTitleA: "Let's talk about your",
    contactTitleB: "next project.",
    contactIntro: "Tell us what you are developing. We can discuss the scope and the technical challenges of your project.",
    formName: "Name",
    formNamePh: "Your name",
    formCompany: "Company / Development",
    formCompanyPh: "Builder or development",
    formContact: "Email or phone",
    formContactPh: "So we can reach you",
    formMessage: "Tell us about your project",
    formMessagePh: "Type of project, location, medium or low voltage, dates…",
    formSubmit: "Send request by email",
    formNote: "Your email app opened with the request ready to send. If it did not open, write to us directly at proyectosintegralespv@gmail.com.",
    formSubject: "Technical proposal request",
    formBodyLabels: ["Name", "Company / Development", "Contact"],
    contactCell: "Mobile",
    contactOffice: "Office",
    contactLocation: "Puerto Vallarta, Jalisco · Bahía de Banderas, Nayarit",
    whatsappAria: "Message us on WhatsApp",
    whatsappText: "Hello%20Proyectos%20Integrales%2C%20I%20would%20like%20a%20technical%20proposal%20for%20my%20project."
  }
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("todos");
  const [form, setForm] = useState({ nombre: "", empresa: "", contacto: "", mensaje: "" });
  const [formSent, setFormSent] = useState(false);
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("pi-lang") === "en" ? "en" : "es";
    } catch {
      return "es";
    }
  });

  const t = UI[lang];
  const pick = (obj) => obj[lang];

  useEffect(() => {
    try {
      localStorage.setItem("pi-lang", lang);
    } catch {
      /* localStorage no disponible: el idioma solo vive en esta sesión */
    }
    document.documentElement.lang = t.docLang;
    document.title = t.docTitle;
    const setMeta = (selector, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', t.docDescription);
    setMeta('meta[property="og:description"]', t.docDescription);
    setMeta('meta[property="og:title"]', t.docTitle);
    setMeta('meta[property="og:locale"]', t.ogLocale);
    setMeta('meta[name="twitter:title"]', t.docTitle);
  }, [lang, t]);

  const updateForm = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const submitForm = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t.formSubject} - ${form.nombre}${form.empresa ? ` (${form.empresa})` : ""}`);
    const body = encodeURIComponent(
      `${t.formBodyLabels[0]}: ${form.nombre}\n${t.formBodyLabels[1]}: ${form.empresa}\n${t.formBodyLabels[2]}: ${form.contacto}\n\n${form.mensaje}`
    );
    window.location.href = `mailto:proyectosintegralespv@gmail.com?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  const filteredProjects = activeFilter === "todos"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  useEffect(() => {
    const selectors = [
      ".intro",
      ".section-heading",
      ".interactive-card",
      ".method-step",
      ".cta-content",
      ".data-card"
    ];

    const elements = document.querySelectorAll(selectors.join(","));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -32px 0px"
      }
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${(index % 3) * 85}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeFilter, lang]);

  return (
    <div className="site-shell">

      {/* NAVEGACIÓN */}
      <header className="topbar">
        <a
          className="brand"
          href="#inicio"
          aria-label={t.brandAria}
          onClick={closeMenu}
        >
          <img src="/logo-pi.png" alt="Proyectos Integrales" className="brand-logo" />
          <span className="brand-name">
            PROYECTOS<br />INTEGRALES
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? t.menuCloseLabel : t.menuOpenLabel}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          aria-label={t.navAria}
        >
          <a href="#nosotros" onClick={closeMenu}>{t.nav[0]}</a>
          <a href="#servicios" onClick={closeMenu}>{t.nav[1]}</a>
          <a href="#experiencia" onClick={closeMenu}>{t.nav[2]}</a>
          <a href="#sectores" onClick={closeMenu}>{t.nav[3]}</a>
          <a href="#contacto" onClick={closeMenu}>{t.nav[4]}</a>
        </nav>

        <div className="lang-switch" role="group" aria-label={t.langLabel}>
          <button
            type="button"
            className={lang === "es" ? "active" : ""}
            aria-pressed={lang === "es"}
            onClick={() => setLang("es")}
          >
            ES
          </button>
          <button
            type="button"
            className={lang === "en" ? "active" : ""}
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>

        <a className="nav-cta button-glow" href="#contacto">
          <Sparkles size={14} className="icon-pulse" /> {t.navCta} <ArrowUpRight size={16} />
        </a>
      </header>

      <main>

        {/* IDENTIDAD VISUAL */}
        <section
          className="brand-banner"
          aria-label="Identidad visual de Proyectos Integrales"
        >
          <img
            src="/brand-banner.png"
            alt="Proyectos Integrales — Infrastructure, Energy, Innovation"
          />
        </section>

        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="hero-grid" />

          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              <Cpu size={14} className="icon-spin-slow" /> {t.heroEyebrow}
            </div>

            <h1>
              {t.heroTitleA}{" "}
              <span>{t.heroTitleB}</span>
            </h1>

            <p className="hero-lead">
              {t.heroLead}
            </p>

            <div className="hero-actions">
              <a className="button button-primary button-glow" href="#contacto">
                {t.heroCta}
                <ArrowUpRight size={17} />
              </a>

              <a className="text-link" href="#experiencia">
                {t.heroSecondary} <ChevronDown size={14} className="icon-bounce" />
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot" />
              <Globe size={13} /> {t.heroNote}
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label={t.heroVisualAria}
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-crosshair" />

            <div className="visual-core">
              <Zap size={54} strokeWidth={1.2} className="icon-pulse-fast" />
            </div>

            <div className="visual-pulse" />

            <div className="visual-chip chip-left">
              <Activity size={12} className="icon-pulse" /> MT / BT
              <small>{t.chipLeftSmall}</small>
            </div>

            <div className="visual-chip chip-right">
              <Award size={12} /> PI / ENGINEERING
              <small>{t.chipRightSmall}</small>
            </div>

            <div className="visual-label label-top">
              <span>PI / 01</span>
              <b>{t.labelTop}</b>
            </div>

            <div className="visual-label label-bottom">
              <span>{t.focusLabel}</span>
              <b>{t.labelBottom}</b>
            </div>

            <div className="visual-coordinate">
              {t.coordinate[0]}<br />
              {t.coordinate[1]}<br />
              {t.coordinate[2]}
            </div>
          </div>

          <div className="hero-footer">
            <span>{t.heroFooterA}</span>
            <span className="footer-line" />
            <span>{t.heroFooterB}</span>
          </div>
        </section>

        <div className="energy-divider" />

        {/* NOSOTROS (CON DATA CARDS ESTILO CUADRO DE MANDO) */}
        <section className="intro section-wrap" id="nosotros">
          <div className="section-kicker">
            <Layers size={13} /> {t.aboutKicker}
          </div>

          <div className="intro-content">
            <div>
              <h2>
                {t.aboutTitleA}<br />
                <span>{t.aboutTitleB}</span>
              </h2>

              <div className="intro-text">
                <p>
                  {t.aboutP1}
                </p>
                <p>
                  {t.aboutP2}
                </p>
                <div className="signature">
                  <Sparkles size={16} /> {t.signature}
                </div>
              </div>
            </div>

            {/* TARJETAS DATA CARD TÉCNICAS */}
            <div className="data-cards-grid">
              <div className="data-card">
                <span className="data-card-label">{t.dataExperience}</span>
                <span className="data-card-value">{t.dataExperienceValue} <br/><small style={{color: '#999'}}>{t.dataExperienceSub}</small></span>
              </div>

              <div className="data-card">
                <span className="data-card-label">{t.dataNorm}</span>
                <span className="data-card-value">NOM-001-SEDE<br/><small style={{color: '#999'}}>{t.dataNormSub}</small></span>
              </div>

              <div className="data-card">
                <span className="data-card-label">{t.dataSpecialty}</span>
                <span className="data-card-value">{t.dataSpecialtyValue}<br/><small style={{color: '#999'}}>{t.dataSpecialtySub}</small></span>
              </div>
            </div>

          </div>
        </section>

        <div className="energy-divider" />

        {/* SERVICIOS */}
        <section className="services-section" id="servicios">
          <div className="section-wrap">

            <div className="section-heading">
              <div>
                <div className="section-kicker">
                  <Cpu size={13} /> {t.servicesKicker}
                </div>
                <h2>
                  {t.servicesTitleA}<br />
                  <span>{t.servicesTitleB}</span>
                </h2>
              </div>

              <p>
                {t.servicesIntro}
              </p>
            </div>

            <div className="service-grid">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card interactive-card" key={service.number}>
                    <div className="service-top">
                      <span>{service.number}</span>
                      <Icon size={25} strokeWidth={1.5} className="card-icon" />
                    </div>

                    <h3>{pick(service.title)}</h3>
                    <p className="service-lead">{pick(service.lead)}</p>

                    <ul>
                      {pick(service.items).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <a href="#contacto" aria-label={`${t.consultAria} ${pick(service.title)}`} className="card-arrow">
                      <ArrowUpRight size={19} />
                    </a>
                  </article>
                );
              })}
            </div>

            <div className="service-note">
              <Zap size={17} className="icon-pulse" />
              {t.serviceNote}
            </div>

          </div>
        </section>

        <div className="energy-divider" />

        {/* EXPERIENCIA CON FILTROS */}
        <section className="experience section-wrap" id="experiencia">

          <div className="section-heading experience-heading">
            <div>
              <div className="section-kicker">
                <Award size={13} /> {t.experienceKicker}
              </div>
              <h2>
                {t.experienceTitleA}<br />
                <span>{t.experienceTitleB}</span>
              </h2>
            </div>

            <p>
              {t.experienceIntro}
            </p>
          </div>

          <div className="filter-tabs">
            <button className={`filter-btn ${activeFilter === "todos" ? "active" : ""}`} onClick={() => setActiveFilter("todos")}>
              {t.filterAll}
            </button>
            <button className={`filter-btn ${activeFilter === "residencial" ? "active" : ""}`} onClick={() => setActiveFilter("residencial")}>
              {t.filterResidential}
            </button>
            <button className={`filter-btn ${activeFilter === "comercial" ? "active" : ""}`} onClick={() => setActiveFilter("comercial")}>
              {t.filterCommercial}
            </button>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card interactive-card" key={project.number}>
                {project.image && (
                  <img className="project-image" src={project.image} alt={project.name} loading="lazy" />
                )}
                <div className="project-number">
                  {project.number}<span>{t.projectSuffix}</span>
                </div>

                <h3>{project.name}</h3>

                <div className="project-location">
                  <MapPin size={13} />
                  {pick(project.location)}
                </div>

                <p>{pick(project.scope)}</p>

                {project.capacity && (
                  <ul className="capacity-list">
                    {pick(project.capacity).map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={13} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <p className="experience-footnote">
            {t.experienceFootnote}
          </p>

          <div className="portfolio-download">
            <div>
              <h3>{t.portfolioTitle}</h3>
              <p>{t.portfolioText}</p>
            </div>
            <a className="button button-primary" href="/Curriculum-Empresarial-Proyectos-Integrales.pdf" download>
              <Download size={17} /> {t.portfolioBtn}
            </a>
          </div>
        </section>

        {/* BARRA DE MARCAS HOMOLOGADAS */}
        <section className="brands-section">
          <div className="section-wrap">
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
              <span className="section-kicker" style={{ justifyContent: "center" }}>{t.brandsKicker}</span>
            </div>
            <div className="brands-grid">
              <span className="brand-item">SQUARE D</span>
              <span className="brand-item">VIAKON</span>
              <span className="brand-item">CONDUMEX</span>
              <span className="brand-item">SCHNEIDER ELECTRIC</span>
              <span className="brand-item">ABB</span>
            </div>
          </div>
        </section>

        <div className="energy-divider" />

        {/* SECTORES */}
        <section className="sectors-section" id="sectores">
          <div className="section-wrap">

            <div className="section-heading">
              <div>
                <div className="section-kicker">
                  <Globe size={13} /> {t.sectorsKicker}
                </div>
                <h2>
                  {t.sectorsTitleA}<br />
                  <span>{t.sectorsTitleB}</span>
                </h2>
              </div>
              <p>
                {t.sectorsIntro}
              </p>
            </div>

            <div className="sector-grid">
              {SECTORS.map((sector) => {
                const Icon = sector.icon;
                return (
                  <article className="sector-card interactive-card" key={sector.number}>
                    <div className="sector-top">
                      <span>{sector.number}</span>
                      <Icon size={24} strokeWidth={1.5} className="card-icon" />
                    </div>
                    <h3>{pick(sector.title)}</h3>
                    <p>{pick(sector.description)}</p>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        <div className="energy-divider" />

        {/* FILOSOFÍA */}
        <section className="method section-wrap" id="enfoque">
          <div className="section-kicker">
            <Activity size={13} /> {t.philosophyKicker}
          </div>

          <div className="method-grid">
            <div>
              <h2>
                {t.philosophyTitleA}<br />
                <span>{t.philosophyTitleB}</span>
              </h2>
              <p className="philosophy-copy">
                {t.philosophyCopy}
              </p>
            </div>

            <div className="method-steps">
              <div className="method-step">
                <span>01</span>
                <div>
                  <h3>{t.step1Title}</h3>
                  <p>{t.step1Text}</p>
                </div>
              </div>
              <div className="method-step">
                <span>02</span>
                <div>
                  <h3>{t.step2Title}</h3>
                  <p>{t.step2Text}</p>
                </div>
              </div>
              <div className="method-step">
                <span>03</span>
                <div>
                  <h3>{t.step3Title}</h3>
                  <p>{t.step3Text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="cta-section" id="contacto">
          <div className="cta-glow" />

          <div className="section-wrap cta-content">
            <div className="section-kicker">
              <Mail size={13} /> {t.contactKicker}
            </div>

            <h2>
              {t.contactTitleA}<br />
              <span>{t.contactTitleB}</span>
            </h2>

            <p>
              {t.contactIntro}
            </p>

            <form className="contact-form" onSubmit={submitForm}>
              <div className="form-grid">
                <label>
                  {t.formName}
                  <input type="text" value={form.nombre} onChange={updateForm("nombre")} placeholder={t.formNamePh} required />
                </label>
                <label>
                  {t.formCompany}
                  <input type="text" value={form.empresa} onChange={updateForm("empresa")} placeholder={t.formCompanyPh} />
                </label>
                <label>
                  {t.formContact}
                  <input type="text" value={form.contacto} onChange={updateForm("contacto")} placeholder={t.formContactPh} required />
                </label>
                <label className="form-full">
                  {t.formMessage}
                  <textarea value={form.mensaje} onChange={updateForm("mensaje")} rows={4} placeholder={t.formMessagePh} required />
                </label>
              </div>
              <button className="button button-primary button-glow" type="submit">
                <Send size={16} /> {t.formSubmit}
              </button>
              {formSent && (
                <p className="form-note">{t.formNote}</p>
              )}
            </form>

            <div className="contact-details">
              <a href="mailto:proyectosintegralespv@gmail.com">
                <Mail size={17} />
                proyectosintegralespv@gmail.com
              </a>
              <a href="tel:+523222456322">
                <Phone size={17} />
                +52 322 245 6322 · {t.contactCell}
              </a>
              <a href="tel:+523222599687">
                <Phone size={17} />
                +52 322 259 9687 · {t.contactOffice}
              </a>
              <span>
                <MapPin size={17} />
                {t.contactLocation}
              </span>
            </div>
          </div>
        </section>

      </main>

      {/* PIE DE PÁGINA */}
      <footer className="footer">
        <a className="brand footer-brand" href="#inicio">
          <img src="/logo-pi.png" alt="Proyectos Integrales" className="brand-logo" />
          <span className="brand-name">
            PROYECTOS<br />INTEGRALES
          </span>
        </a>

        <span className="footer-motto">
          ENGINEERING · CONSTRUCTION · MAINTENANCE
        </span>

        <span className="copyright">
          © {new Date().getFullYear()} Proyectos Integrales
        </span>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/523222456322?text=${t.whatsappText}`}
        target="_blank"
        rel="noreferrer"
        aria-label={t.whatsappAria}
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
