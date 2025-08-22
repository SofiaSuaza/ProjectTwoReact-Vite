const Nosotros = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section fade-in">
        <div className="vite-hero-logo">
          ⚡ Vite
        </div>
        <h1 className="vite-hero-title">
          Herramienta de Desarrollo del Futuro
        </h1>
        <p className="hero-subtitle">
          Descubre por qué Vite está revolucionando el desarrollo web con su 
          velocidad incomparable y experiencia de desarrollador excepcional.
        </p>
      </section>

      {/* Introducción */}
      <section className="slide-in content-section">
        <div className="card p-6">
          <h2 className="flex items-center gap-4">
            <span>🚀</span>
            ¿Qué es Vite?
          </h2>
          <p>
            Vite (palabra francesa que significa "rápido") es una herramienta de compilación 
            de nueva generación creada por <strong>Evan You</strong> (creador de Vue.js). 
            Ofrece una experiencia de desarrollo significativamente más rápida para proyectos 
            web modernos basados en ES modules.
          </p>
          
          <div className="intro-grid">
            <div className="intro-card">
              <div className="intro-card-icon">⚡</div>
              <div className="intro-card-title">Ultra Rápido</div>
              <div className="intro-card-desc">
                Servidor de desarrollo instantáneo
              </div>
            </div>
            
            <div className="intro-card">
              <div className="intro-card-icon">🔄</div>
              <div className="intro-card-title">HMR Instantáneo</div>
              <div className="intro-card-desc">
                Cambios en tiempo real
              </div>
            </div>
            
            <div className="intro-card">
              <div className="intro-card-icon">🛠️</div>
              <div className="intro-card-title">Configuración Mínima</div>
              <div className="intro-card-desc">
                Funciona out-of-the-box
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="content-section">
        <h2 className="section-header">
          Características Principales
        </h2>
        
        <div className="feature-grid">
          {/* Servidor de Desarrollo */}
          <div className="card hover-lift">
            <div className="feature-icon primary">
              <span>🏃‍♂️</span>
            </div>
            <h3>Servidor Ultra Rápido</h3>
            <p>
              Utiliza ES modules nativos del navegador para servir archivos directamente, 
              eliminando la necesidad de bundling durante el desarrollo.
            </p>
            <ul className="feature-list">
              <li>Inicio en milisegundos</li>
              <li>No importa el tamaño del proyecto</li>
              <li>Cacheo inteligente</li>
            </ul>
          </div>

          {/* Hot Module Replacement */}
          <div className="card hover-lift">
            <div className="feature-icon success">
              <span>🔥</span>
            </div>
            <h3>Hot Module Replacement</h3>
            <p>
              Actualización instantánea de módulos sin perder el estado de la aplicación, 
              manteniendo tu flujo de desarrollo fluido.
            </p>
            <ul className="feature-list">
              <li>Preserva el estado del componente</li>
              <li>Actualización selectiva</li>
              <li>Feedback visual inmediato</li>
            </ul>
          </div>

          {/* Optimización */}
          <div className="card hover-lift">
            <div className="feature-icon warning">
              <span>⚙️</span>
            </div>
            <h3>Build Optimizado</h3>
            <p>
              Utiliza Rollup para crear builds de producción altamente optimizados 
              con tree-shaking, code-splitting y minificación.
            </p>
            <ul className="feature-list">
              <li>Tree-shaking automático</li>
              <li>Code-splitting inteligente</li>
              <li>Assets optimizados</li>
            </ul>
          </div>

          {/* TypeScript */}
          <div className="card hover-lift">
            <div className="feature-icon typescript">
              <span>TS</span>
            </div>
            <h3>Soporte TypeScript</h3>
            <p>
              Soporte nativo para TypeScript, JSX, TSX y otros lenguajes de 
              superset sin configuración adicional.
            </p>
            <ul className="feature-list">
              <li>Transpilación automática</li>
              <li>Type checking integrado</li>
              <li>Imports absolutos</li>
            </ul>
          </div>

          {/* CSS Moderno */}
          <div className="card hover-lift">
            <div className="feature-icon css">
              <span>🎨</span>
            </div>
            <h3>CSS Avanzado</h3>
            <p>
              Soporte completo para CSS Modules, PostCSS, Sass, Less y 
              CSS-in-JS sin configuración compleja.
            </p>
            <ul className="feature-list">
              <li>CSS Modules integrado</li>
              <li>PostCSS automático</li>
              <li>Importación dinámica</li>
            </ul>
          </div>

          {/* Ecosistema */}
          <div className="card hover-lift">
            <div className="feature-icon secondary">
              <span>🌐</span>
            </div>
            <h3>Ecosistema Rico</h3>
            <p>
              Amplia gama de plugins y templates oficiales para React, Vue, 
              Svelte, Vanilla JS y muchos frameworks más.
            </p>
            <ul className="feature-list">
              <li>Templates oficiales</li>
              <li>Plugin system extensible</li>
              <li>Comunidad activa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparación */}
      <section className="content-section">
        <h2 className="section-header">
          ¿Por qué elegir Vite?
        </h2>
        
        <div className="card p-6">
          <div className="comparison-grid">
            {/* Webpack vs Vite */}
            <div className="comparison-old">
              <h3>
                <span>🐌</span>
                Bundlers Tradicionales
              </h3>
              <ul className="comparison-list">
                <li>Inicio lento en proyectos grandes</li>
                <li>HMR puede ser lento</li>
                <li>Configuración compleja</li>
                <li>Rebuild completo en cambios</li>
              </ul>
            </div>
            
            <div className="comparison-new">
              <h3>
                <span>⚡</span>
                Vite
              </h3>
              <ul className="comparison-list">
                <li>Inicio instantáneo</li>
                <li>HMR ultra-rápido</li>
                <li>Configuración mínima</li>
                <li>Actualización granular</li>
              </ul>
            </div>
          </div>

          {/* Métricas de Rendimiento */}
          <div className="metrics-box">
            <h4 className="text-center">
              📊 Rendimiento Comparativo
            </h4>
            <div className="metrics-grid">
              <div>
                <div className="metric-value">
                  &lt;1s
                </div>
                <div className="metric-label">
                  Inicio dev server
                </div>
              </div>
              <div>
                <div className="metric-value">
                  &lt;50ms
                </div>
                <div className="metric-label">
                  HMR updates
                </div>
              </div>
              <div>
                <div className="metric-value">
                  90%
                </div>
                <div className="metric-label">
                  Menos tiempo build
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="content-section">
        <h2 className="section-header">
          Casos de Uso Ideales
        </h2>
        
        <div className="use-cases-grid">
          <div className="card">
            <h3 className="use-case-title">
              🎯 SPAs Modernas
            </h3>
            <p className="use-case-desc">
              Perfect para aplicaciones React, Vue, Svelte con arquitectura 
              de componentes y estado complejo.
            </p>
          </div>
          
          <div className="card">
            <h3 className="use-case-title">
              📱 PWAs
            </h3>
            <p className="use-case-desc">
              Excelente para Progressive Web Apps con plugins específicos 
              y optimización automática.
            </p>
          </div>
          
          <div className="card">
            <h3 className="use-case-title">
              🚀 Prototipos Rápidos
            </h3>
            <p className="use-case-desc">
              Ideal para proof-of-concepts y desarrollo ágil donde 
              la velocidad es crucial.
            </p>
          </div>
          
          <div className="card">
            <h3 className="use-case-title">
              🏢 Aplicaciones Empresariales
            </h3>
            <p className="use-case-desc">
              Escalable para proyectos grandes con equipos distribuidos 
              y pipelines CI/CD complejos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;