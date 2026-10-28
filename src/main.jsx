import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Zap, DraftingCompass, Cable, ShieldCheck,
  ClipboardCheck, Building2, Mail, Phone, MapPin, Menu
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: DraftingCompass,
    number: "01",
    title: "Diseño y cálculo eléctrico",
    description: "Desarrollo de proyectos e instalaciones eléctricas en media y baja tensión para entornos residenciales, comerciales e industriales."
  },
  {
    icon: Cable,
    number: "02",
    title: "Puesta a tierra y protección",
    description: "Cálculos y soluciones de sistemas de red de tierra y protección contra descargas atmosféricas, según el alcance de cada proyecto."
  },
  {
    icon: Zap,
    number: "03",
    title: "Análisis y evaluación técnica",
    description: "Análisis de cargas, memorias técnicas y apoyo en la evaluación de alternativas para tomar decisiones con fundamento técnico."
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Gestión de proyectos",
    description: "Planeación, coordinación y seguimiento técnico para integrar las necesidades del proyecto desde su definición."
  }
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Proyectos Integrales, inicio">
          <span className="brand-mark">PI<span>.</span></span>
          <span className="brand-name">PROYECTOS<br />INTEGRALES</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#enfoque">Nuestro enfoque</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="nav-cta" href="#contacto">Hablemos de tu proyecto <ArrowUpRight size={16} /></a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid"></div>
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"></span> INGENIERÍA · CONSTRUCCIÓN · ENERGÍA</div>
            <h1>La precisión<br />es parte del <span>proyecto.</span></h1>
            <p className="hero-lead">Soluciones de ingeniería eléctrica desarrolladas con criterio técnico, análisis y atención a las necesidades reales de cada proyecto.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacto">Cuéntanos tu proyecto <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#servicios">Explorar servicios <span>↓</span></a>
            </div>
            <div className="hero-note"><span className="status-dot"></span> Puerto Vallarta, Jalisco · México</div>
          </div>
          <div className="hero-visual" aria-label="Ilustración abstracta de infraestructura eléctrica">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>
            <div className="visual-core"><Zap size={54} strokeWidth={1.2} /></div>
            <div className="visual-label label-top"><span>PI / 01</span><b>INGENIERÍA APLICADA</b></div>
            <div className="visual-label label-bottom"><span>ENFOQUE</span><b>ANÁLISIS · DISEÑO · SOLUCIÓN</b></div>
            <div className="visual-coordinate">20° 39' N<br />105° 13' O</div>
          </div>
          <div className="hero-footer">
            <span>DISEÑO CON FUNDAMENTO</span><span className="footer-line"></span><span>DECISIONES CON CRITERIO TÉCNICO</span>
          </div>
        </section>

        <section className="intro section-wrap" id="enfoque">
          <div className="section-kicker">01 / QUIÉNES SOMOS</div>
          <div className="intro-content">
            <h2>Ingeniería pensada<br />para <span>funcionar.</span></h2>
            <div className="intro-text">
              <p>Proyectos Integrales desarrolla soluciones de ingeniería eléctrica para proyectos residenciales, comerciales e industriales.</p>
              <p>Combinamos análisis técnico, diseño y cálculo para ayudar a definir soluciones confiables y adaptadas al alcance de cada proyecto.</p>
              <div className="signature">No adivinamos. Calculamos.</div>
            </div>
          </div>
        </section>

        <section className="services-section" id="servicios">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="section-kicker">02 / ÁREAS DE TRABAJO</div>
                <h2>Capacidad técnica.<br /><span>Visión integral.</span></h2>
              </div>
              <p>Servicios de ingeniería que conectan el análisis, el diseño y la gestión técnica del proyecto.</p>
            </div>
            <div className="service-grid">
              {services.map(({icon: Icon, number, title, description}) => (
                <article className="service-card" key={number}>
                  <div className="service-top"><span>{number}</span><Icon size={25} strokeWidth={1.5} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="#contacto" aria-label={`Consultar por ${title}`} className="card-arrow"><ArrowUpRight size={19} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="method section-wrap">
          <div className="section-kicker">03 / CÓMO TRABAJAMOS</div>
          <div className="method-grid">
            <h2>Del análisis<br />a la <span>solución.</span></h2>
            <div className="method-steps">
              <div className="method-step"><span>01</span><div><h3>Entender</h3><p>Definimos las necesidades, condiciones y alcance técnico del proyecto.</p></div></div>
              <div className="method-step"><span>02</span><div><h3>Analizar y diseñar</h3><p>Evaluamos alternativas y desarrollamos la solución de ingeniería correspondiente.</p></div></div>
              <div className="method-step"><span>03</span><div><h3>Integrar</h3><p>Documentamos criterios y coordinamos los aspectos técnicos necesarios para avanzar.</p></div></div>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contacto">
          <div className="cta-glow"></div>
          <div className="section-wrap cta-content">
            <div className="section-kicker">04 / CONTACTO</div>
            <h2>¿Tienes un proyecto<br />entre manos?</h2>
            <p>Conversemos sobre el alcance, los retos técnicos y las necesidades de tu proyecto.</p>
            <a className="button button-primary" href="mailto:proyectosintegralespv@gmail.com?subject=Consulta%20de%20proyecto%20-%20Proyectos%20Integrales">Contactar por correo <ArrowUpRight size={17} /></a>
            <div className="contact-details">
              <a href="mailto:proyectosintegralespv@gmail.com"><Mail size={17} /> proyectosintegralespv@gmail.com</a>
              <a href="tel:+523222456322"><Phone size={17} /> +52 322 245 6322</a>
              <span><MapPin size={17} /> Puerto Vallarta, Jalisco, México</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">PI<span>.</span></span>
          <span className="brand-name">PROYECTOS<br />INTEGRALES</span>
        </a>
        <span className="footer-motto">INFRASTRUCTURE · ENERGY · INNOVATION</span>
        <span className="copyright">© {new Date().getFullYear()} Proyectos Integrales</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);