import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingScreen from "./screens/LandingScreen";
import GlaucomaDetectionScreen from "./screens/GlaucomaDetectionScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<GlaucomaDetectionScreen />} />
      </Routes>
    </Router>
  )
}

export default App