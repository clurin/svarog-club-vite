import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acomponent from "./components/Acomponent";
import Header from "./components/Header";
import DisciplineDetail from "./components/DisciplineDetail";
import Footer from "./components/Footer";
import ConnectionButton from "./components/ConnectionButton";
import ScrollToTop from "./components/ScrollToTop";
import GymDetail from "./components/Gym/GymDetail";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Acomponent />} />
        <Route path="/discipline/:name" element={<DisciplineDetail />} />
        <Route path="/gym/:name" element={<GymDetail />} />
      </Routes>

      <Footer />
      <ConnectionButton />
    </BrowserRouter>
  );
}

export default App
