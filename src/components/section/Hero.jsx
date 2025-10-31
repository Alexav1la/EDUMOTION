import Button from '../common/Button';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 pt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Aprende las habilidades del futuro, <span className="text-blue-200">hoy</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Cursos innovadores en tecnología, habilidades digitales y emprendimiento. Transforma tu carrera con educación de calidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="outline" size="lg" onClick={() => document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' })}>
                Explorar Cursos
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}>
                Contactar
              </Button>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-200">5,000+</p>
                <p className="text-sm text-blue-100">Estudiantes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-200">50+</p>
                <p className="text-sm text-blue-100">Cursos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-200">95%</p>
                <p className="text-sm text-blue-100">Satisfacción</p>
              </div>
            </div>
          </div>

          {/* Ilustración/Imagen */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Estudiantes aprendiendo" 
                className="rounded-2xl shadow-lg w-full"
              />
              {/* Elemento decorativo flotante */}
              <div className="absolute -top-6 -right-6 bg-blue-400 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
                <p className="text-sm font-semibold">✨ 100% Online</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg">
                <p className="text-sm font-semibold">🎓 Certificados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <a href="#nosotros" className="inline-block text-white hover:text-blue-200 transition-colors">
            <svg className="w-6 h-6 animate-bounce mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-sm mt-2">Descubre más</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;