import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import StudioGhibli from "./components/StudioGhibli";
import FilmDetails from "./components/FilmDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={StudioGhibli} />
          <Route path="/films/:id" Component={FilmDetails} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
