import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Landing from './screens/Landing';
import Todo from './screens/Todo';
import Rest from './screens/Rest';
import { useState } from "react"

function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  function handleModeChange(newMode) {
    setDarkMode(newMode);
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing isDarkMode={isDarkMode} handleModeChange={handleModeChange} />} />
        <Route path='/todo' element={<Todo isDarkMode={isDarkMode} handleModeChange={handleModeChange} />} />
        <Route path='/rest' element={<Rest isDarkMode={isDarkMode} handleModeChange={handleModeChange} />} />
      </Routes>
    </div>
  );
}

export default App;
