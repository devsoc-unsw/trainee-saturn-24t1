import GoalsNotes from './GoalsNotes';
import PopUpQuotes from './PopUpQuote';
import ListOfTabs from './components-hana/ListOfTabs'
import ProgressBar from './components-hana/ProgressBar';
import { useState } from "react";

function Todo() {
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState("");

  const handleData = (data) => {
    setTabs(data.data1);
    setCurrentTab(data.data2);
  };

  return (
    <div className="h-screen p-2 bg-[#302E28]">
      <div id="header" className="grid grid-cols-3 justify-around m-2 py-4
        place-items-center h-1/5">
        <h1 className="text-3xl font-bold">
          <span className="text-zinc-200">Achieve</span><span className="text-[#2ADCB1]">Mint</span>
          {/* <img src=""></img> */}
        </h1>

        <div id="quotes" className="">
          {/* quotes pop up when you finish a task will later implement
              prop so that quote shows up once a button is clicked */}
          <PopUpQuotes />
        </div>

        <div id="dark-mode">
          <button className="text-zinc-200 font-bold">BUTTON</button>
        </div>

      </div>

      <div id="body" className="flex justify-center">

        <div id="to-do-list" className="min-w-96 m-4 basis-1/3">

          <ListOfTabs onData={handleData} />

        </div>

        <div id="features" className="mx-4 basis-1/3">
          <div id="progress-bar" className="m-1 p-2 ">
            {/* shows how many tasks you've completed so far */}
            <ProgressBar tabs={tabs} currentTab={currentTab} />
          </div>

          <div id="alerts" className="m-2 py-3 px-5 bg-[#D4DCFF] rounded-lg">
            {/* shows all tasks that have due dates - the earliest task is shown first */}
            {/* <img></img> */}
            <p>TASK is due in X days!</p>
          </div>

          <div id="goals-notes" className="m-2 w-full">
            <GoalsNotes />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Todo;