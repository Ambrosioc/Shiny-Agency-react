import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/error/NotFound";
import Nav from "./Components/Header/Nav";
import { Home, Survey } from "./pages";
import Freelances from "./pages/Freelances/Freelances";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<div>Resultats</div>} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
