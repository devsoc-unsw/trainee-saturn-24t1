import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Landing from './screens/Landing';
import Todo from './screens/Todo';
import Rest from './screens/Rest';
import { useState, useEffect } from "react"

function App() {
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  function handleModeChange(newMode) {
    setDarkMode(newMode);
  }

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className={
      isDarkMode
        ? 'h-full bg-[#302E28]'
        : 'h-full bg-[#FFFDEE]'
    }>
      <Routes>
        <Route path='/' element={<Landing isDarkMode={isDarkMode} handleModeChange={handleModeChange} />} />
        <Route path='/todo' element={<Todo isDarkMode={isDarkMode} handleModeChange={handleModeChange} />} />
        <Route path='/rest' element={<Rest isDarkMode={isDarkMode} handleModeChange={handleModeChange} />} />
      </Routes>
    </div>
  );
}

export default App;
