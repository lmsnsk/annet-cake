import { Routes, Route } from "react-router-dom";

import stl from "./App.module.scss";
import Header from "./components/Header/Header";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/About";
import Assortiment from "./pages/Assortiment";

function App() {
  return (
    <div className={stl.wrapper}>
      <Header />
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/assortiment" element={<Assortiment />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
