import Todo from './Todo';
import Rest from './Rest';
import {
  useNavigate,
} from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="p-3 flex flex-col bg-[#302E28] items-center text-center h-screen align-middle">
      <div className="w-full text-left font-bold text-3xl">
        <span className="text-white">Achieve</span>
        <span className="text-[#80CDBB]">Mint</span>
      </div>
      <div className="m-auto p-3 bg-[#80CDBB] h-3/5 w-3/5 text-center rounded-xl justify-center items-center align-middle">
        <div className="w-4/5 m-auto">
          <p className="font-bold text-[#3C3C3C] text-lg mt-10 mb-10">
            Welcome to AchieveMint! This is a web application that helps you with tracking your
            tasks and goals. Are you here to:
          </p>
        </div>

        <div className="grid justify-items-center">
          <button className="font-bold text-[#3C3C3C] bg-white rounded-xl p-3 m-1.5" onClick={() => navigate('Todo')}>Click here to see your tasks!</button>
          <button className="font-bold text-[#3C3C3C] bg-white rounded-xl p-3 m-1.5" onClick={() => navigate('Rest')}>Click here to rest!</button>
        </div>
      </div>

    </div>
  );
}

export default Landing;