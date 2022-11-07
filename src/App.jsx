
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Character from './components/pages/Character';
import CharacterDetail from './components/pages/CharacterDetail';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path= "" element={<Home />}>/</Route>
        <Route path= "about" element={<About />}>/</Route>
        <Route path= "characters" element={<Character />}>/</Route>
        <Route path= "characters/:id" element={<CharacterDetail />}>/</Route>
        </Routes>      
    </div>
  );
}

export default App;
