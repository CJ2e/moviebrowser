import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutView from './components/AboutView';
// import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;