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
  // hello

  return (
    <div>
      <div className='flex justify-evenly'>
        <button onClick={() => navigate('/todo')}>To do</button>
        <button onClick={() => navigate('/')}>Landing</button>
        <button onClick={() => navigate('/rest')}>Rest</button>
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
