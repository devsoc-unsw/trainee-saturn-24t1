import GoalsNotes from './GoalsNotes';
import PopUpQuotes from './PopUpQuote';
import ListOfTabs from './components-hana/ListOfTabs'
import ProgressBar from './components-hana/ProgressBar';
import ModeButton from './components-hana/ModeToggleButton';
import Alerts from './components-hana/Alerts'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Todo({ isDarkMode, handleModeChange }) {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState("");

  const handleData = (data) => {
    setTabs(data.data1);
    setCurrentTab(data.data2);
  };

  return (
    <div className={
      isDarkMode === true
        ? "flex flex-col place-items-center w-full p-2 bg-[#302E28]"
        : "flex flex-col place-items-center w-full p-2 bg-[#FFFDEE]"
    } >
      <div id="header" className="static w-screen grid sm:grid-cols-3 grid-cols-2 m-2 p-4 place-items-center 
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

      <div id="body" className="grid md:grid-cols-2 max-w-max justify-center">
        <div className="min-w-96 basis-1/3">
          {/*button to go back to landing page,
          position is a bit weird, but will probably fix that later when we have
          ideas where to put it*/}
          <div className='w-full mx-2'>
            <button
              onClick={() => navigate('/')}
              className={
                isDarkMode === true
                  ? "bg-[#D4DCFF] font-bold text-[#3C3C3C] rounded-xl py-2 px-3 m-auto space-x-2"
                  : "bg-[#BEE6CC] font-bold text-[#3C3C3C] rounded-xl py-2 px-3 m-auto space-x-2"
              }>
              <span>&#8592;</span>
              <span>Back to Landing Page</span>
            </button>
          </div>

          <div id="to-do-list" className="min-w-96 mx-2 my-4 basis-1/3">
            <ListOfTabs onData={handleData} isDarkMode={isDarkMode} />
          </div>
        </div>

        <div id="features" className="mx-4 basis-1/3">
          <div id="progress-bar" className="m-1 p-2 ">
            {/* shows how many tasks you've completed so far */}
            <ProgressBar tabs={tabs} currentTab={currentTab} isDarkMode={isDarkMode} />
          </div>

          <div id="alerts" className="m-2 w-full">
            {/* shows all tasks that have due dates - the earliest task is shown first */}
            <Alerts tabs={tabs} currentTab={currentTab} isDarkMode={isDarkMode} />
          </div>

          <div id="goals-notes" className="m-2 w-full">
            <GoalsNotes isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>


    </div >
  )
}

export default Todo;