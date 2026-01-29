export default function Hero() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-slate-400 text-lg sm:text-xl mb-2">
          Hola, soy
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 mb-4">
          Laura Prieto
        </h1>
        <p className="text-xl sm:text-2xl text-accent font-semibold mb-6">
          Frontend Developer
        </p>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
          Desarrollo interfaces modernas, accesibles y optimizadas,
          usando tecnologías como JavaScript, React y Tailwind CSS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-slate-600 text-slate-100 hover:bg-slate-800 hover:border-slate-500 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
