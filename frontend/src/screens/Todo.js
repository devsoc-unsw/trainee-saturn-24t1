import GoalsNotes from './GoalsNotes';
import PopUpQuotes from './PopUpQuote';
import ListOfTabs from './components-hana/ListOfTabs'
import Alerts from './components-hana/Alerts'
import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  // initial state for tabs
  const [tabs, setTabs] = useState([
    {
        id: uuidv4(),
        name: "Testing",
        tasks: [
            {
                id: uuidv4(),
                name: "New Task",
                description: "Task type",
                due_date: new Date(),
                checked: false,
                edit_mode: false,
                hidden: false
            }
        ]
    }
]);

// saves current tab id
const [currentTab, setCurrentTab] = useState("");

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

        <div id="to-do-list" className="min-w-96 mx-2 my-4 basis-1/3">

          <ListOfTabs tabs={tabs} setTabs={setTabs} currentTab={currentTab} setCurrentTab={setCurrentTab}/>

        </div>

        <div id="features" className="mx-4 basis-1/3">

          <div id="progress-bar" className="m-1 p-2 bg-[#877070]">
            {/* shows how many tasks you've completed so far */}
            PROGRESS BAR
          </div>

          <div id="alerts" className="m-2 w-full">
            {/* shows all tasks that have due dates - the earliest task is shown first */}
            <Alerts tabs={tabs} currentTab={currentTab}/>
          </div>

          <div id="goals-notes" className="m-2 w-full">
            <GoalsNotes />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Todo;