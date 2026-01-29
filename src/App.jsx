import Container from './components/layout/Container'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App