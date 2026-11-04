
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Zap, DraftingCompass, Cable, ShieldCheck,
  ClipboardCheck, Building2, Hotel, Factory, HardHat,
  Mail, Phone, MapPin, Menu, X, CheckCircle2
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
    scope: "Ingeniería de diseño eléctrico en media y baja tensión para villas residenciales."
  },
  {
    number: "02",
    name: "El Banco Estate · Lotes 01 y 02",
    location: "Riviera Nayarit",
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
    scope: "Ingeniería e infraestructura eléctrica en media tensión; elaboración de catálogo de precios unitarios.",
    capacity: [
      "Servicio normal: 9 MVA",
      "Servicio de emergencia: 5 MVA"
    ]
  },
  {
    number: "05",
    name: "Fraccionamiento Vista Destiladeras",
    location: "Riviera Nayarit",
    scope: "Ingeniería de diseño e infraestructura eléctrica en media y baja tensión.",
    capacity: [
      "Servicio normal: 850 kVA"
    ]
  },
  {
    number: "06",
    name: "Casa Noosa",
    location: "Punta de Mita · Nayarit",
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

  const closeMenu = () => setMenuOpen(false);

  // Animaciones de entrada al desplazarse por la página
  useEffect(() => {
    const selectors = [
      ".intro",
      ".section-heading",
      ".service-card",
      ".project-card",
      ".sector-card",
      ".method-step",
      ".cta-content"
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

      element.style.setProperty(
        "--reveal-delay",
        `${(index % 3) * 85}ms`
      );

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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

        <a className="nav-cta" href="#contacto">
          Hablemos de tu proyecto <ArrowUpRight size={16} />
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
              INGENIERÍA · CONSTRUCCIÓN · MANTENIMIENTO
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
              <a className="button button-primary" href="#contacto">
                Solicitar propuesta técnica
                <ArrowUpRight size={17} />
              </a>

              <a className="text-link" href="#experiencia">
                Conocer nuestra experiencia <span>↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot" />
              Puerto Vallarta, Jalisco · Bahía de Banderas, Nayarit
            </div>
          </div>

          {/* GRÁFICO TÉCNICO ANIMADO */}
          <div
            className="hero-visual"
            aria-label="Gráfico técnico de ingeniería eléctrica"
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-crosshair" />

            <div className="visual-core">
              <Zap size={54} strokeWidth={1.2} />
            </div>

            <div className="visual-pulse" />

            <div className="visual-chip chip-left">
              MT / BT
              <small>INFRAESTRUCTURA</small>
            </div>

            <div className="visual-chip chip-right">
              PI / ENGINEERING
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

        {/* NOSOTROS */}
        <section className="intro section-wrap" id="nosotros">
          <div className="section-kicker">01 / QUIÉNES SOMOS</div>

          <div className="intro-content">
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
                Desarrollamos soluciones que abarcan desde la ingeniería
                de diseño y el análisis técnico hasta el suministro,
                instalación y ejecución de infraestructura eléctrica.
              </p>

              <p>
                Nuestra experiencia incluye proyectos residenciales,
                desarrollos turísticos, edificios de usos mixtos e
                infraestructura eléctrica. Trabajamos con atención
                personalizada y criterios técnicos respaldados por las
                normas y estándares aplicables a cada proyecto.
              </p>

              <div className="signature">
                No adivinamos. Calculamos.
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="services-section" id="servicios">
          <div className="section-wrap">

            <div className="section-heading">
              <div>
                <div className="section-kicker">02 / SERVICIOS</div>
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
                <article className="service-card" key={number}>
                  <div className="service-top">
                    <span>{number}</span>
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3>{title}</h3>

                  <p className="service-lead">{lead}</p>

                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    aria-label={`Consultar por ${title}`}
                    className="card-arrow"
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </article>
              ))}
            </div>

            <div className="service-note">
              <Zap size={17} />
              Especial atención a infraestructura de media tensión,
              subestaciones y transformadores.
            </div>

          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="experience section-wrap" id="experiencia">

          <div className="section-heading experience-heading">
            <div>
              <div className="section-kicker">03 / EXPERIENCIA</div>
              <h2>
                Experiencia que respalda<br />
                <span>cada proyecto.</span>
              </h2>
            </div>

            <p>
              Desde 2013 hemos participado en proyectos de ingeniería
              eléctrica para desarrollos residenciales, turísticos,
              inmobiliarios y edificios de gran escala.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>

                <div className="project-number">
                  {project.number}
                  <span> / PROYECTO</span>
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
            Los alcances descritos corresponden a la participación de
            Proyectos Integrales en cada proyecto. Las imágenes y
            documentación técnica se comparten únicamente cuando existe
            autorización para ello.
          </p>
        </section>

        {/* SECTORES */}
        <section className="sectors-section" id="sectores">
          <div className="section-wrap">

            <div className="section-heading">
              <div>
                <div className="section-kicker">
                  04 / SECTORES QUE ATENDEMOS
                </div>

                <h2>
                  Ingeniería para proyectos<br />
                  <span>que exigen precisión.</span>
                </h2>
              </div>

              <p>
                Adaptamos cada solución a las características técnicas,
                los requerimientos operativos y las necesidades de
                infraestructura de cada sector.
              </p>
            </div>

            <div className="sector-grid">
              {sectors.map(({
                icon: Icon,
                number,
                title,
                description
              }) => (
                <article className="sector-card" key={number}>

                  <div className="sector-top">
                    <span>{number}</span>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>

                </article>
              ))}
            </div>

          </div>
        </section>

        {/* FILOSOFÍA */}
        <section className="method section-wrap" id="enfoque">

          <div className="section-kicker">05 / NUESTRA FILOSOFÍA</div>

          <div className="method-grid">
            <div>
              <h2>
                No adivinamos.<br />
                <span>Calculamos.</span>
              </h2>

              <p className="philosophy-copy">
                Cada proyecto exige análisis, precisión y decisiones
                técnicas fundamentadas. La ingeniería no admite
                improvisaciones.
              </p>
            </div>

            <div className="method-steps">

              <div className="method-step">
                <span>01</span>
                <div>
                  <h3>Entender</h3>
                  <p>
                    Definimos las necesidades, condiciones y alcance
                    técnico del proyecto.
                  </p>
                </div>
              </div>

              <div className="method-step">
                <span>02</span>
                <div>
                  <h3>Analizar y diseñar</h3>
                  <p>
                    Evaluamos alternativas y desarrollamos la solución
                    de ingeniería correspondiente.
                  </p>
                </div>
              </div>

              <div className="method-step">
                <span>03</span>
                <div>
                  <h3>Integrar</h3>
                  <p>
                    Documentamos criterios y coordinamos los aspectos
                    técnicos necesarios para avanzar.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="cta-section" id="contacto">
          <div className="cta-glow" />

          <div className="section-wrap cta-content">
            <div className="section-kicker">06 / CONTACTO</div>

            <h2>
              Hablemos de tu<br />
              <span>próximo proyecto.</span>
            </h2>

            <p>
              Cuéntanos qué estás desarrollando. Podemos conversar
              sobre el alcance, los retos técnicos y las necesidades
              de ingeniería eléctrica de tu proyecto.
            </p>

            <a
              className="button button-primary"
              href="mailto:proyectosintegralespv@gmail.com?subject=Solicitud%20de%20propuesta%20t%C3%A9cnica%20-%20Proyectos%20Integrales"
            >
              Solicitar propuesta técnica
              <ArrowUpRight size={17} />
            </a>

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
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
