const Inicio = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section fade-in">
        <h1 className="hero-title">
          Aprende React desde Cero
        </h1>
        <p className="hero-subtitle">
          Domina los conceptos fundamentales de React, desde componentes básicos hasta 
          técnicas avanzadas de desarrollo web moderno.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-2 gap-6 content-section">
        
        {/* Componentes React */}
        <div className="card hover-lift">
          <h2 className="flex items-center gap-2">
            <span>⚛️</span>
            Componentes React
          </h2>
          <p>Los componentes son los bloques de construcción fundamentales de React. 
          Son funciones JavaScript que retornan elementos JSX.</p>
          
          <h3>Tipos de Componentes:</h3>
          <ul>
            <li><strong>Funcionales:</strong> Más simples y modernos (con Hooks)</li>
            <li><strong>De Clase:</strong> Tradicionales, menos usados actualmente</li>
            <li><strong>Pures:</strong> Optimizados para rendimiento</li>
            <li><strong>HOC:</strong> Componentes de orden superior</li>
          </ul>
          
          <div className="tip-box">
            <p className="tip-text">
              💡 <strong>Tip:</strong> Los componentes funcionales con Hooks son la forma 
              recomendada en React moderno.
            </p>
          </div>
        </div>

        {/* Layout */}
        <div className="card hover-lift">
          <h2 className="flex items-center gap-2">
            <span>🏗️</span>
            Layout y Estructura
          </h2>
          <p>El Layout define cómo se organizan y distribuyen los elementos en tu aplicación React.</p>
          
          <h3>Elementos Comunes:</h3>
          <ul>
            <li><strong>Header:</strong> Navegación y branding</li>
            <li><strong>Main:</strong> Contenido principal</li>
            <li><strong>Sidebar:</strong> Navegación secundaria</li>
            <li><strong>Footer:</strong> Información adicional</li>
          </ul>
          
          <h3>Técnicas de Layout:</h3>
          <ul>
            <li>CSS Grid para layouts complejos</li>
            <li>Flexbox para alineación</li>
            <li>CSS Modules o Styled Components</li>
          </ul>
        </div>

        {/* JSX */}
        <div className="card hover-lift">
          <h2 className="flex items-center gap-2">
            <span>📝</span>
            ¿Qué es JSX?
          </h2>
          <p>JSX (JavaScript XML) es una extensión de sintaxis que permite escribir 
          código similar a HTML dentro de JavaScript.</p>
          
          <h3>Características Principales:</h3>
          <ul>
            <li>Combina HTML y JavaScript de forma natural</li>
            <li>Permite expresiones JavaScript con <code>{'{}'}</code></li>
            <li>Se compila a llamadas React.createElement()</li>
            <li>Facilita la lectura y escritura de componentes</li>
          </ul>
          
          <div className="code-snippet">
            <div className="code-comment">// Ejemplo JSX:</div>
            <div className="code-line">const elemento = &lt;h1&gt;¡Hola Mundo!&lt;/h1&gt;</div>
          </div>
        </div>

        {/* Diferencias JS vs JSX */}
        <div className="card hover-lift">
          <h2 className="flex items-center gap-2">
            <span>⚡</span>
            JavaScript vs JSX
          </h2>
          <p>Aunque JSX parece HTML, tiene algunas diferencias importantes que debes conocer.</p>
          
          <h3>Diferencias Clave:</h3>
          <ul>
            <li><code>className</code> en lugar de <code>class</code></li>
            <li><code>htmlFor</code> en lugar de <code>for</code></li>
            <li>Todas las etiquetas deben cerrarse</li>
            <li>CamelCase para atributos: <code>onClick</code></li>
            <li>Debe retornar un elemento raíz único</li>
          </ul>
          
          <h3>Soluciones Modernas:</h3>
          <ul>
            <li><strong>React.Fragment:</strong> <code>&lt;&gt;...&lt;/&gt;</code></li>
            <li><strong>Fragments:</strong> Evitan divs innecesarios</li>
            <li><strong>Keys:</strong> Para listas dinámicas</li>
          </ul>
        </div>
      </div>

      {/* Conceptos Adicionales */}
      <section className="slide-in content-section">
        <h2 className="section-header">
          Conceptos Avanzados
        </h2>
        
        <div className="concepts-grid">
          {/* Props */}
          <div className="card">
            <h3 className="concept-icon">
              <span>📦</span>
              Props
            </h3>
            <p className="concept-desc">
              Las props son argumentos que se pasan a los componentes React, 
              como los atributos en HTML.
            </p>
            <ul className="concept-list">
              <li>Son inmutables (solo lectura)</li>
              <li>Permiten reutilización</li>
              <li>Pueden ser cualquier tipo de dato</li>
            </ul>
          </div>

          {/* State */}
          <div className="card">
            <h3 className="concept-icon">
              <span>🔄</span>
              State
            </h3>
            <p className="concept-desc">
              El estado es un objeto que almacena datos que pueden cambiar 
              durante el ciclo de vida del componente.
            </p>
            <ul className="concept-list">
              <li>Mutable y reactivo</li>
              <li>Maneja con useState Hook</li>
              <li>Provoca re-renderizado</li>
            </ul>
          </div>

          {/* Hooks */}
          <div className="card">
            <h3 className="concept-icon">
              <span>🎣</span>
              Hooks
            </h3>
            <p className="concept-desc">
              Los Hooks permiten usar estado y otras características de React 
              en componentes funcionales.
            </p>
            <ul className="concept-list">
              <li>useState: Maneja estado local</li>
              <li>useEffect: Efectos secundarios</li>
              <li>useContext: Consume contexto</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;