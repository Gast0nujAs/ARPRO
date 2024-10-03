import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";
import { Novedades } from "./pages/Novedades";

function App() {
  return (
    <BrowserRouter>
      <main className="px-5 ">
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/novedades" element={<Novedades />} />


        </Routes>
        

      </main>
      <Footer />

    </BrowserRouter>


  );
}

export default App;

