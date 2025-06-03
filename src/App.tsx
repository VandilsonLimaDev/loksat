import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Header } from "./components/Header"
import { QuemSomos } from "./components/QuemSomos"
import { Suporte } from "./components/Suporte"
import { Servicos } from "./components/Servicos"
import { Contatos } from "./components/Contatos"
import { Footer } from "./components/Footer"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
