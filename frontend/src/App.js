import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.css";
import Header from "./components/Header";
import Finish from "./pages/Finish";
import Home from "./pages/Home";
import Example from "./pages/Example";
import Survey from "./pages/Survey";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route name="Home" path="/:userId" element={<Home />} />
          <Route name="Example" path="/example/:userId" element={<Example />} />
          <Route name="Survey" path="/survey/:userId" element={<Survey />} />
          <Route name="Finish" path="/finish" element={<Finish />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
