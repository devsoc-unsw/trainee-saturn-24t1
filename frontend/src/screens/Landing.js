import { useEffect } from 'react';
// import axios from 'axios';
import {
  useNavigate,
} from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   let fn = async () => {
  //     let tasks = await test();
  //     console.log(tasks);
  //   };
  //   fn();
  // }, []);

  // const test = async () => {
  //   const body = {
  //     name: "sleep",
  //     checked: false,
  //   }
  //   try {
  //     await axios.post(`http://localhost:5001/testmake`, body);
  //     let tasks = await axios.get(`http://localhost:5001/testget`);
  //     return tasks;
  //   } catch (err) {
  //     alert(err.response.data.error);
  //     return("error");
  //   }
  // };


  return (
    <div className="p-3 flex flex-col bg-[#302E28] items-center text-center h-screen align-middle">
      <div className="w-full text-left font-bold text-3xl">
        <span className="text-white">Achieve</span>
        <span className="text-[#80CDBB]">Mint</span>
      </div>
      <div className="m-auto p-3 bg-[#80CDBB] h-3/5 w-3/5 text-center rounded-xl justify-center items-center align-middle">
        <div className="w-4/5 m-auto">
          {/* welcome message */}
          <p className="font-bold text-[#3C3C3C] text-lg mt-10 mb-10">
            Welcome to AchieveMint! This is a web application that helps you with tracking your
            tasks and goals. Are you here to:
          </p>
        </div>

        {/* buttons to navigate to To-do Page or Rest Page */}
        <div className="grid justify-items-center">
          <button className="font-bold text-[#3C3C3C] bg-white rounded-xl p-3 m-1.5" onClick={() => navigate('Todo')}>Click here to see your tasks!</button>
          <button className="font-bold text-[#3C3C3C] bg-white rounded-xl p-3 m-1.5" onClick={() => navigate('Rest')}>Click here to rest!</button>
        </div>
      </div>

    </div>
  );
}

export default Landing;