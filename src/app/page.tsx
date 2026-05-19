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
          Hola, soy Andrea Blanco. Me apasiona el análisis predictivo, el Machine Learning y la visualización de datos. Busco resolver problemas complejos y aportar valor mediante soluciones basadas en datos empíricos.
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
          {['Python', 'SQL', 'Pandas', 'Scikit-Learn', 'Power BI', 'Machine Learning', 'Estadística', 'Git & GitHub'].map(skill => (
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
            <h3 className={styles.projectTitle}>Predicción de Fuga de Clientes (Churn)</h3>
            <p className={styles.projectDesc}>
              Desarrollé un modelo de Machine Learning utilizando Random Forest y Regresión Logística para predecir la probabilidad de que un cliente abandone el servicio, identificando las variables más críticas y logrando una precisión del 85%.
            </p>
            <div className={styles.techStack}>
              <span className={styles.techTag}>Python</span>
              <span className={styles.techTag}>Scikit-Learn</span>
              <span className={styles.techTag}>Pandas</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="#">Ver Repositorio ↗</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className={`glass ${styles.projectCard}`}>
            <h3 className={styles.projectTitle}>Dashboard de Ventas Interactivo</h3>
            <p className={styles.projectDesc}>
              Realicé un análisis exploratorio de datos (EDA) y diseñé un panel interactivo para monitorear ventas históricas, permitiendo al equipo de negocios identificar patrones estacionales y optimizar el inventario.
            </p>
            <div className={styles.techStack}>
              <span className={styles.techTag}>SQL</span>
              <span className={styles.techTag}>Power BI</span>
              <span className={styles.techTag}>ETL</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="#">Ver Dashboard ↗</a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <footer className={`${styles.footer} animate-fade-in-up delay-300`}>
        <p>© {new Date().getFullYear()} Andrea Blanco. Construido con Next.js y mucha pasión.</p>
        <div className={styles.footerLinks}>
          <a href="mailto:tu-correo@ejemplo.com">Email</a>
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/4ndr0med4666" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
