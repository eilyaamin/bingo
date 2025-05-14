import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import RoomPage from "./pages/Room"
import Start from "./pages/Start"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className="min-h-screen" >
        <Nav />
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/room/:id" element={<RoomPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
