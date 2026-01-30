import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Container className="flex flex-col min-h-screen">
        <Home />
        <Footer />
      </Container>
    </>
  )
}

export default App