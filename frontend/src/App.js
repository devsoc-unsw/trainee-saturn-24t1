import './App.css';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Landing from './screens/Landing';
import Todo from './screens/Todo';
import Rest from './screens/Rest';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='flex justify-evenly'>
        <button className="nav-button" onClick={() => navigate('/todo')}>TO DO</button>
        <button className="nav-button" onClick={() => navigate('/')}>LANDING</button>
        <button className="nav-button" onClick={() => navigate('/rest')}>REST</button>
      </div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/rest' element={<Rest />} />
      </Routes>
    </div>
  );
}

export default App;
