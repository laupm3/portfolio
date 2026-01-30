import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <Container className="flex flex-col min-h-screen">
        <Home />
        <Footer />
      </Container>
    </>
  )
}

export default App