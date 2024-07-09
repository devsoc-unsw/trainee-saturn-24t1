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
        ? "h-window p-2 bg-[#302E28]"
        : "h-window p-2 bg-[#FFFDEE]"
    } >
      <div id="header" className="grid grid-cols-3 justify-around m-2 py-4 place-items-center h-1/5">
        <div className="text-3xl font-bold">
          <span className={
            isDarkMode === true
              ? "text-[#FBFBFB]"
              : "text=[#302E28]"}>Achieve</span><span className="text-[#2ADCB1]">Mint</span>
          {/* <img src=""></img> */}
        </div>

        <div id="quotes" className="">
          {/* quotes pop up when you finish a task will later implement
              prop so that quote shows up once a button is clicked */}
          <PopUpQuotes isDarkMode={isDarkMode} />
        </div>

        <div id="mode-button">
          <div className="" >
            <ModeButton isDarkMode={isDarkMode} handleModeChange={handleModeChange} />
          </div>
        </div>

      </div>

      <div id="body" className="flex justify-center">
        <div id="to-do-list" className="min-w-96 mx-2 my-4 basis-1/3">
          <ListOfTabs onData={handleData} isDarkMode={isDarkMode} />
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
          {/*button to go back to landing page,
            position is a bit weird, but will probably fix that later when we have
            ideas where to put it*/}
          <div className='w-full'>
            <button
              onClick={() => navigate('/')}
              className={
                isDarkMode === true
                  ? "bg-[#FBFBFB] font-bold text-[#302E28] rounded-xl p-3 m-auto flex items-center space-x-2"
                  : "bg-[#302E28] font-bold text-[#FFFFFF] rounded-xl p-3 m-auto flex items-center space-x-2"
              }>
              <span>&#8592;</span>
              <span>Back to Landing Page</span>
            </button>
          </div>

        </div>
      </div>


    </div >
  )
}

export default Todo;