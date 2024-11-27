import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import StudioGhibli from "./pages/studio-ghibli/StudioGhibli";
import FilmDetails from "./pages/film-details/FilmDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<StudioGhibli />} />
          <Route path="/films/:id" element={<FilmDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
