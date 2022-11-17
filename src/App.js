import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Standings from "./pages/Standings";
import Stats from "./pages/Stats";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/player-stats" element={<Stats />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
