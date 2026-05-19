import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.hero} animate-fade-in-up`}>
        <div className={styles.heroTag}>Estudiante de Ciencia de Datos</div>
        <h1 className={styles.heroTitle}>
          Transformando datos en <br /> decisiones estratégicas.
        </h1>
        <p className={styles.heroSubtitle}>
          Hola, soy Andrea Blanco Rodríguez. Soy estudiante de Ciencia de Datos en la Universidad Externado de Colombia. Me apasiona descubrir patrones y generar soluciones basadas en datos que aporten valor real.
        </p>
        <div className={styles.ctaContainer}>
          <a href="#proyectos" className={styles.primaryBtn}>Ver Proyectos</a>
          <a href="https://github.com/4ndr0med4666" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>Mi GitHub</a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="animate-fade-in-up delay-100">
        <h2 className={styles.sectionTitle}>Habilidades Clave</h2>
        <div className={styles.skillsGrid}>
          {['Python', 'SQL', 'R', 'Pandas & Numpy', 'Scikit-Learn', 'Matplotlib & Seaborn', 'PyMC & BART', 'Machine Learning'].map(skill => (
            <div key={skill} className={`glass ${styles.skillItem}`}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="animate-fade-in-up delay-200">
        <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
        <div className={styles.projectsGrid}>
          
          {/* Project 1 */}
          <div className={`glass ${styles.projectCard}`}>
            <h3 className={styles.projectTitle}>Análisis de Minería en Colombia</h3>
            <p className={styles.projectDesc}>
              Exploración y modelado estadístico sobre la minería ilegal y su tránsito a la legalidad. Incluyó análisis de outliers, correlaciones y visualización para proponer estrategias de desarrollo sostenible.
            </p>
            <div className={styles.techStack}>
              <span className={styles.techTag}>Python</span>
              <span className={styles.techTag}>Pandas</span>
              <span className={styles.techTag}>Seaborn</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="#">Ver Repositorio ↗</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className={`glass ${styles.projectCard}`}>
            <h3 className={styles.projectTitle}>Clasificación de Especies de Árboles</h3>
            <p className={styles.projectDesc}>
              Desarrollo de un modelo supervisado usando Random Forest para clasificar árboles según variables morfológicas y ambientales. Se optimizaron hiperparámetros con GridSearchCV para mejorar métricas clave.
            </p>
            <div className={styles.techStack}>
              <span className={styles.techTag}>Python</span>
              <span className={styles.techTag}>Scikit-Learn</span>
              <span className={styles.techTag}>GridSearchCV</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="#">Ver Modelo ↗</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className={`glass ${styles.projectCard}`}>
            <h3 className={styles.projectTitle}>Modelado Bayesiano Predictivo</h3>
            <p className={styles.projectDesc}>
              Implementación de regresión bayesiana con árboles aditivos (BART) usando pymc y bartpy. Exploración de intervalos de credibilidad para interpretar la incertidumbre en predicciones continuas.
            </p>
            <div className={styles.techStack}>
              <span className={styles.techTag}>PyMC</span>
              <span className={styles.techTag}>Bartpy</span>
              <span className={styles.techTag}>Bayesian ML</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="#">Ver Estudio ↗</a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <footer className={`${styles.footer} animate-fade-in-up delay-300`}>
        <p>© {new Date().getFullYear()} Andrea Blanco Rodríguez. Construido con Next.js.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Bogotá, Colombia</p>
        <div className={styles.footerLinks}>
          <a href="mailto:andrea.blanco2@est.uexternado.edu.co">andrea.blanco2@est.uexternado.edu.co</a>
          <a href="tel:+573160441721">316 044 1721</a>
          <a href="https://github.com/4ndr0med4666" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
