import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories/:idc" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
