import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import RoomPage from "./pages/Room"
import Start from "./pages/Start"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <Router>
      <Nav />
      <div className=" bg-gray-dark min-h-screen flex flex-col justify-center items-center p-4">
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
