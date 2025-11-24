import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acomponent from "./components/Acomponent";
import Header from "./components/Header";
import DisciplineDetail from "./components/DisciplineDetail";
import Footer from "./components/Footer";
import ConnectionButton from "./components/ConnectionButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Acomponent />} />
        <Route path="/discipline/:name" element={<DisciplineDetail />} />
      </Routes>
      
      <Footer />
      <ConnectionButton />
    </BrowserRouter>
  );
}

export default App
