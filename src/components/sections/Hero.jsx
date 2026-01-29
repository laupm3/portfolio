export default function Hero() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="max-w-2xl">
        <p className="text-slate-400 text-lg sm:text-xl mb-3 tracking-wide">
          Hola, soy
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 mb-4 tracking-tight leading-tight">
          Laura Prieto
        </h1>
        <p className="text-xl sm:text-2xl text-accent font-semibold mb-8 tracking-tight">
          Frontend Developer
        </p>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-12 max-w-xl">
          Desarrollo interfaces modernas, accesibles y optimizadas,
          usando tecnologías como JavaScript, React y Tailwind CSS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 px-7 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-slate-600 text-slate-100 hover:bg-slate-800/50 hover:border-slate-500 font-semibold py-3.5 px-7 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
