import Container from '../layout/Container'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 border-t border-border/40">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-foreground mb-6">
            Sobre mí
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
            Me dedico al desarrollo frontend con foco en interfaces claras, accesibles y rápidas.
            Me gusta aprender nuevas herramientas y trabajar en equipo para llevar ideas al producto.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Disfruto transformar diseños en interfaces funcionales, optimizadas y accesibles, y seguir aprendiendo nuevas herramientas del ecosistema frontend.
          </p>
        </div>
      </Container>
    </section>
  )
}
