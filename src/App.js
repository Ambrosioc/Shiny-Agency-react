import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Header/Nav';
import NotFound from './Components/error/NotFound';
import Footer from './Components/footer/Footer';
import { Home, Results, Survey } from './pages';
import Freelances from './pages/freelances/Freelances';
import ProfileContainer from './Components/ProfileContainer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/profile/:id" element={<ProfileContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
