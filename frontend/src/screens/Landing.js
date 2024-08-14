// import { useEffect } from 'react';
import ModeButton from './components-hana/ModeToggleButton'
// import axios from 'axios';
import {
  useNavigate,
} from 'react-router-dom';

function Landing({ isDarkMode, handleModeChange }) {
  const navigate = useNavigate();

  return (
    <div id="hide-scrollbar" className={
      isDarkMode === true
        ? "p-2 bg-[#302E28] items-center text-center h-screen w-screen align-middle"
        : "p-2 bg-[#FFFDEE] items-center text-center h-screen w-screen align-middle"}
    >
      <div id="header" className="w-screen grid sm:grid-cols-3 grid-cols-2 m-2 p-4 place-items-center 
        justify-between mb-10 sm:mb-0 sm:min-h-[150px]">
        <div className="text-3xl font-bold sm:justify-self-auto justify-self-start">
          <span className={
            isDarkMode === true
              ? "text-[#FBFBFB]"
              : "text=[#302E28]"}>Achieve</span><span className="text-[#2ADCB1]">Mint</span>
          {/* <img src=""></img> */}
        </div>
        <div className='hidden sm:block'>
          {/*empty div */}
        </div>

        <div id="mode-button" className="sm:justify-self-auto justify-self-end">
          <div>
            <ModeButton isDarkMode={isDarkMode} handleModeChange={handleModeChange} />
          </div>
        </div>
      </div>

      <div className={
        isDarkMode === true
          ? "m-auto p-3 bg-[#80CDBB] sm:w-3/5 sm:max-w-none max-w-80 text-center rounded-xl justify-center items-center align-middle"
          : "m-auto p-3 bg-[#BEE6CC] sm:w-3/5 sm:max-w-none max-w-80 text-center rounded-xl justify-center items-center align-middle"
      }>
        <div className="w-4/5 m-auto ">
          {/* welcome message */}
          <p className={
            isDarkMode === true
              ? "font-bold text-[#3C3C3C] text-lg mt-10 mb-10"
              : "font-bold text-[#3C3C3C] text-lg mt-10 mb-10"
          }>
            Welcome to AchieveMint! This is a web application that helps you with tracking your
            tasks and goals. Are you here to:
          </p>
        </div>

        {/* buttons to navigate to To-do Page or Rest Page */}
        <div className="grid justify-items-center">
          <button className="font-bold text-[#3C3C3C] bg-white rounded-xl p-3 m-1.5" onClick={() => navigate('Todo')}>Click here to see your tasks!</button>
          <button className="font-bold text-[#3C3C3C] bg-white rounded-xl mb-10 p-3 m-1.5" onClick={() => navigate('Rest')}>Click here to rest!</button>
        </div>
      </div>
    </div >
  );
}

export default Landing;