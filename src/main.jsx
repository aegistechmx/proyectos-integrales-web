import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Zap, DraftingCompass, Cable, ShieldCheck,
  Building2, Hotel, Factory, HardHat,
  Mail, Phone, MapPin, Menu, X, CheckCircle2, Cpu, Activity,
  Globe, Award, Sparkles, Layers, ChevronDown, ShieldAlert, FileText, MessageCircle, Download, Send
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: DraftingCompass,
    number: "01",
    title: "Ingeniería eléctrica",
    lead: "Diseño y cálculo para tomar decisiones con fundamento técnico.",
    items: [
      "Proyectos eléctricos de media y baja tensión",
      "Diseño de infraestructura eléctrica y distribución",
      "Ingeniería de subestaciones y sistemas de transformación",
      "Cálculo de sistemas de puesta a tierra y protección contra descargas atmosféricas",
      "Memorias técnicas, diagramas unifilares e ingeniería As-Built",
      "Estudios de calidad de energía e iluminación"
    ]
  },
  {
    icon: Cable,
    number: "02",
    title: "Construcción eléctrica",
    lead: "Ingeniería que se materializa en instalaciones.",
    items: [
      "Construcción de instalaciones eléctricas de media y baja tensión",
      "Infraestructura para distribución eléctrica",
      "Suministro e instalación de subestaciones y transformadores",
      "Instalación de sistemas de puesta a tierra",
      "Sistemas de protección contra descargas atmosféricas",
      "Sistemas de regulación de voltaje y respaldo de energía"
    ]
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Mantenimiento eléctrico",
    lead: "Conservación de infraestructura y atención a la continuidad operativa.",
    items: [
      "Mantenimiento de subestaciones y equipos eléctricos",
      "Mantenimiento de instalaciones de media y baja tensión",
      "Mantenimiento de sistemas de regulación de voltaje",
      "Sistemas de emergencia y respaldo de energía",
      "Programas de mantenimiento preventivo, predictivo y correctivo"
    ]
  }
];

const projects = [
  {
    number: "01",
    name: "One&Only Mandarina Private Homes",
    location: "El Monteón · Riviera Nayarit",
    category: "residencial",
    scope: "Ingeniería de diseño eléctrico en media y baja tensión para villas residenciales."
  },
  {
    number: "02",
    name: "El Banco Estate · Lotes 01 y 02",
    location: "Riviera Nayarit",
    category: "residencial",
    scope: "Ingeniería de diseño eléctrico en media y baja tensión.",
    capacity: [
      "Servicio normal: 300 kVA",
      "Servicio de emergencia: 272 kVA"
    ]
  },
  {
    number: "03",
    name: "Torres Designo",
    location: "Huixquilucan · Estado de México",
    category: "comercial",
    scope: "Ingeniería eléctrica As-Built en media y baja tensión, para revisión ante UVIE.",
    capacity: [
      "Servicio normal: 800 kVA",
      "Servicio de emergencia: 375 kVA"
    ]
  },
  {
    number: "04",
    name: "Edificio Reforma 397",
    location: "Ciudad de México",
    category: "comercial",
    scope: "Ingeniería e infraestructura eléctrica en media tensión; catálogo de precios unitarios.",
    capacity: [
      "Servicio normal: 9 MVA",
      "Servicio de emergencia: 5 MVA"
    ]
  },
  {
    number: "05",
    name: "Fraccionamiento Vista Destiladeras",
    location: "Riviera Nayarit",
    category: "residencial",
    scope: "Ingeniería de diseño e infraestructura eléctrica en media y baja tensión.",
    capacity: [
      "Servicio normal: 850 kVA"
    ]
  },
  {
    number: "06",
    name: "Casa Noosa",
    location: "Punta de Mita · Nayarit",
    category: "residencial",
    scope: "Ingeniería de diseño eléctrico en media y baja tensión.",
    capacity: [
      "Servicio normal: 150 kVA",
      "Servicio de emergencia: 136 kVA"
    ]
  }
];

const sectors = [
  {
    icon: Building2,
    number: "01",
    title: "Desarrollos inmobiliarios",
    description: "Ingeniería eléctrica para desarrollos residenciales, conjuntos habitacionales, villas y proyectos de usos mixtos."
  },
  {
    icon: HardHat,
    number: "02",
    title: "Constructoras y desarrolladores",
    description: "Colaboración técnica en infraestructura eléctrica, desde el diseño y cálculo hasta la integración de soluciones para su ejecución."
  },
  {
    icon: Hotel,
    number: "03",
    title: "Hoteles y desarrollos turísticos",
    description: "Soluciones eléctricas para hoteles y complejos turísticos, considerando distribución, transformación y respaldo de energía."
  },
  {
    icon: Factory,
    number: "04",
    title: "Industria y comercio",
    description: "Ingeniería eléctrica para instalaciones industriales y comerciales, atendiendo sus necesidades de capacidad, seguridad y continuidad operativa."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("todos");
  const [form, setForm] = useState({ nombre: "", empresa: "", contacto: "", mensaje: "" });
  const [formSent, setFormSent] = useState(false);

  const updateForm = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const submitForm = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Solicitud de propuesta técnica - ${form.nombre}${form.empresa ? ` (${form.empresa})` : ""}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmpresa / Desarrollo: ${form.empresa}\nContacto: ${form.contacto}\n\n${form.mensaje}`
    );
    window.location.href = `mailto:proyectosintegralespv@gmail.com?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  const filteredProjects = activeFilter === "todos" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
  }, [activeFilter]);

  return (
    <div className="site-shell">

      {/* NAVEGACIÓN */}
      <header className="topbar">
        <a
          className="brand"
          href="#inicio"
          aria-label="Proyectos Integrales, inicio"
          onClick={closeMenu}
        >
          <span className="brand-mark">PI<span>.</span></span>
          <span className="brand-name">
            PROYECTOS<br />INTEGRALES
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
          <a href="#sectores" onClick={closeMenu}>Sectores</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>

        <a className="nav-cta button-glow" href="#contacto">
          <Sparkles size={14} className="icon-pulse" /> Hablemos de tu proyecto <ArrowUpRight size={16} />
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
              <Cpu size={14} className="icon-spin-slow" /> INGENIERÍA · CONSTRUCCIÓN · MANTENIMIENTO
            </div>

            <h1>
              Ingeniería eléctrica que se convierte en{" "}
              <span>soluciones reales.</span>
            </h1>

            <p className="hero-lead">
              Desarrollamos soluciones eléctricas para proyectos
              residenciales, comerciales, turísticos e industriales.
              Integramos diseño, cálculo, suministro, instalación y
              mantenimiento con criterio técnico y atención personalizada.
            </p>

            <div className="hero-actions">
              <a className="button button-primary button-glow" href="#contacto">
                Solicitar propuesta técnica
                <ArrowUpRight size={17} />
              </a>

              <a className="text-link" href="#experiencia">
                Conocer nuestra experiencia <ChevronDown size={14} className="icon-bounce" />
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot" />
              <Globe size={13} /> Puerto Vallarta, Jalisco · Bahía de Banderas, Nayarit
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Gráfico técnico de ingeniería eléctrica"
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
              <small>INFRAESTRUCTURA</small>
            </div>

            <div className="visual-chip chip-right">
              <Award size={12} /> PI / ENGINEERING
              <small>PRECISIÓN TÉCNICA</small>
            </div>

            <div className="visual-label label-top">
              <span>PI / 01</span>
              <b>INGENIERÍA APLICADA</b>
            </div>

            <div className="visual-label label-bottom">
              <span>ENFOQUE</span>
              <b>ANÁLISIS · DISEÑO · SOLUCIÓN</b>
            </div>

            <div className="visual-coordinate">
              DISEÑO<br />
              CÁLCULO<br />
              INFRAESTRUCTURA
            </div>
          </div>

          <div className="hero-footer">
            <span>DISEÑO CON FUNDAMENTO</span>
            <span className="footer-line" />
            <span>DECISIONES CON CRITERIO TÉCNICO</span>
          </div>
        </section>

        <div className="energy-divider" />

        {/* NOSOTROS (CON DATA CARDS ESTILO CUADRO DE MANDO) */}
        <section className="intro section-wrap" id="nosotros">
          <div className="section-kicker">
            <Layers size={13} /> 01 / QUIÉNES SOMOS
          </div>

          <div className="intro-content">
            <div>
              <h2>
                Ingeniería con experiencia.<br />
                <span>Ejecución con criterio.</span>
              </h2>

              <div className="intro-text">
                <p>
                  Fundada en 2013, Proyectos Integrales es una empresa
                  mexicana especializada en ingeniería eléctrica,
                  construcción y mantenimiento.
                </p>
                <p>
                  Desarrollamos soluciones que abarcan desde el diseño técnico
                  hasta la ejecución de infraestructura bajo estrictas normas
                  nacionales e internacionales.
                </p>
                <div className="signature">
                  <Sparkles size={16} /> No adivinamos. Calculamos.
                </div>
              </div>
            </div>

            {/* TARJETAS DATA CARD TÉCNICAS */}
            <div className="data-cards-grid">
              <div className="data-card">
                <span className="data-card-label">EXPERIENCIA</span>
                <span className="data-card-value">Desde 2013 <br/><small style={{color: '#999'}}>Trayectoria firme</small></span>
              </div>

              <div className="data-card">
                <span className="data-card-label">NORMATIVA</span>
                <span className="data-card-value">NOM-001-SEDE<br/><small style={{color: '#999'}}>Estándar oficial</small></span>
              </div>

              <div className="data-card">
                <span className="data-card-label">ESPECIALIDAD</span>
                <span className="data-card-value">Media y Baja Tensión<br/><small style={{color: '#999'}}>Infraestructura</small></span>
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
                  <Cpu size={13} /> 02 / SERVICIOS
                </div>
                <h2>
                  Soluciones eléctricas.<br />
                  <span>De la ingeniería a la ejecución.</span>
                </h2>
              </div>

              <p>
                Integramos conocimiento técnico, suministro de materiales
                y equipos, construcción y mantenimiento para desarrollar
                infraestructura eléctrica confiable y funcional.
              </p>
            </div>

            <div className="service-grid">
              {services.map(({
                icon: Icon,
                number,
                title,
                lead,
                items
              }) => (
                <article className="service-card interactive-card" key={number}>
                  <div className="service-top">
                    <span>{number}</span>
                    <Icon size={25} strokeWidth={1.5} className="card-icon" />
                  </div>

                  <h3>{title}</h3>
                  <p className="service-lead">{lead}</p>

                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a href="#contacto" aria-label={`Consultar por ${title}`} className="card-arrow">
                    <ArrowUpRight size={19} />
                  </a>
                </article>
              ))}
            </div>

            <div className="service-note">
              <Zap size={17} className="icon-pulse" />
              Especial atención a infraestructura de media tensión,
              subestaciones y transformadores.
            </div>

          </div>
        </section>

        <div className="energy-divider" />

        {/* EXPERIENCIA CON FILTROS */}
        <section className="experience section-wrap" id="experiencia">

          <div className="section-heading experience-heading">
            <div>
              <div className="section-kicker">
                <Award size={13} /> 03 / EXPERIENCIA
              </div>
              <h2>
                Experiencia que respalda<br />
                <span>cada proyecto.</span>
              </h2>
            </div>

            <p>
              Participación en desarrollos de ingeniería eléctrica de alta escala.
            </p>
          </div>

          <div className="filter-tabs">
            <button className={`filter-btn ${activeFilter === "todos" ? "active" : ""}`} onClick={() => setActiveFilter("todos")}>
              TODOS LOS PROYECTOS
            </button>
            <button className={`filter-btn ${activeFilter === "residencial" ? "active" : ""}`} onClick={() => setActiveFilter("residencial")}>
              RESIDENCIAL DE LUJO
            </button>
            <button className={`filter-btn ${activeFilter === "comercial" ? "active" : ""}`} onClick={() => setActiveFilter("comercial")}>
              COMERCIAL / MIXTO
            </button>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card interactive-card" key={project.number}>
                <div className="project-number">
                  {project.number}<span> / PROYECTO</span>
                </div>

                <h3>{project.name}</h3>

                <div className="project-location">
                  <MapPin size={13} />
                  {project.location}
                </div>

                <p>{project.scope}</p>

                {project.capacity && (
                  <ul className="capacity-list">
                    {project.capacity.map((item) => (
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
            Los alcances descritos corresponden a la participación de Proyectos Integrales en cada contrato.
          </p>

          <div className="portfolio-download">
            <div>
              <h3>Currículum empresarial</h3>
              <p>Conoce nuestros servicios, normas y proyectos en un solo documento.</p>
            </div>
            <a className="button button-primary" href="/Curriculum-Empresarial-Proyectos-Integrales.pdf" download>
              <Download size={17} /> Descargar portafolio (PDF)
            </a>
          </div>
        </section>

        {/* BARRA DE MARCAS HOMOLOGADAS */}
        <section className="brands-section">
          <div className="section-wrap">
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
              <span className="section-kicker" style={{ justifyContent: "center" }}>ESTÁNDARES Y FABRICANTES HOMOLOGADOS</span>
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
                  <Globe size={13} /> 04 / SECTORES QUE ATENDEMOS
                </div>
                <h2>
                  Ingeniería para proyectos<br />
                  <span>que exigen precisión.</span>
                </h2>
              </div>
              <p>
                Adaptamos cada solución a los requerimientos operativos y de infraestructura de cada sector.
              </p>
            </div>

            <div className="sector-grid">
              {sectors.map(({ icon: Icon, number, title, description }) => (
                <article className="sector-card interactive-card" key={number}>
                  <div className="sector-top">
                    <span>{number}</span>
                    <Icon size={24} strokeWidth={1.5} className="card-icon" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>

          </div>
        </section>

        <div className="energy-divider" />

        {/* FILOSOFÍA */}
        <section className="method section-wrap" id="enfoque">
          <div className="section-kicker">
            <Activity size={13} /> 05 / NUESTRA FILOSOFÍA
          </div>

          <div className="method-grid">
            <div>
              <h2>
                No adivinamos.<br />
                <span>Calculamos.</span>
              </h2>
              <p className="philosophy-copy">
                Cada proyecto exige análisis, precisión y decisiones técnicas fundamentadas.
              </p>
            </div>

            <div className="method-steps">
              <div className="method-step">
                <span>01</span>
                <div>
                  <h3>Entender</h3>
                  <p>Definimos las necesidades, condiciones y alcance técnico del proyecto.</p>
                </div>
              </div>
              <div className="method-step">
                <span>02</span>
                <div>
                  <h3>Analizar y diseñar</h3>
                  <p>Evaluamos alternativas y desarrollamos la solución de ingeniería correspondiente.</p>
                </div>
              </div>
              <div className="method-step">
                <span>03</span>
                <div>
                  <h3>Integrar</h3>
                  <p>Documentamos criterios y coordinamos los aspectos técnicos necesarios para avanzar.</p>
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
              <Mail size={13} /> 06 / CONTACTO
            </div>

            <h2>
              Hablemos de tu<br />
              <span>próximo proyecto.</span>
            </h2>

            <p>
              Cuéntanos qué estás desarrollando. Podemos conversar sobre el alcance y los retos técnicos de tu obra.
            </p>

            <form className="contact-form" onSubmit={submitForm}>
              <div className="form-grid">
                <label>
                  Nombre
                  <input type="text" value={form.nombre} onChange={updateForm("nombre")} placeholder="Tu nombre" required />
                </label>
                <label>
                  Empresa / Desarrollo
                  <input type="text" value={form.empresa} onChange={updateForm("empresa")} placeholder="Constructora o desarrollo" />
                </label>
                <label>
                  Correo o teléfono
                  <input type="text" value={form.contacto} onChange={updateForm("contacto")} placeholder="Para responderte" required />
                </label>
                <label className="form-full">
                  Cuéntanos de tu proyecto
                  <textarea value={form.mensaje} onChange={updateForm("mensaje")} rows={4} placeholder="Tipo de obra, ubicación, media o baja tensión, fechas…" required />
                </label>
              </div>
              <button className="button button-primary button-glow" type="submit">
                <Send size={16} /> Enviar solicitud por correo
              </button>
              {formSent && (
                <p className="form-note">Se abrió tu correo con la solicitud lista para enviar. Si no se abrió, escríbenos directo a proyectosintegralespv@gmail.com.</p>
              )}
            </form>

            <div className="contact-details">
              <a href="mailto:proyectosintegralespv@gmail.com">
                <Mail size={17} />
                proyectosintegralespv@gmail.com
              </a>
              <a href="tel:+523222456322">
                <Phone size={17} />
                +52 322 245 6322 · Celular
              </a>
              <a href="tel:+523222599687">
                <Phone size={17} />
                +52 322 259 9687 · Oficina
              </a>
              <span>
                <MapPin size={17} />
                Puerto Vallarta, Jalisco · Bahía de Banderas, Nayarit
              </span>
            </div>
          </div>
        </section>

      </main>

      {/* PIE DE PÁGINA */}
      <footer className="footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">PI<span>.</span></span>
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
        href="https://wa.me/523222456322?text=Hola%20Proyectos%20Integrales%2C%20quiero%20una%20propuesta%20t%C3%A9cnica%20para%20mi%20proyecto."
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
