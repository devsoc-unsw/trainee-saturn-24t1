import GoalsNotes from './GoalsNotes';
import PopUpQuotes from '../PopUpQuote';
function Todo() {
  return (
    <div className="h-screen p-2 bg-[#302E28]">
      <div id="header" className="flex justify-start justify-around m-2 py-4">

        <h1 className="text-3xl font-bold">
          <span className="text-zinc-200">Achieve</span><span className="text-[#2ADCB1]">Mint</span>
          {/* <img src=""></img> */}
        </h1>

        <div id="quotes" className="mx-4 py-2 px-5 bg-[#80CDBB] rounded-lg">
          {/* quotes pop up when you finish a task */}
          <p className="text-[#3C3C3C]" id="quote-content"><PopUpQuotes /></p>
        </div>

        <div id="dark-mode">
          <button className="text-zinc-200 font-bold">BUTTON</button>
        </div>

      </div>

      <div id="body" className="flex justify-center">

        <div id="to-do-list" className="min-w-96 m-4 basis-1/3">

          <div id="nav-tasks" className="flex">
            {/* be able to add and delete categories */}
            <h3 className="py-2 px-4 text-[#E9E9E9] bg-[#707C87] rounded-t-lg">TASKS</h3>
            <h3 className="py-2 px-4 text-[#3C3C3C] bg-[#B1C9DF] rounded-t-lg">+</h3>
          </div>

          <div id="tasks" className="p-4 bg-[#80CDBB]">
            {/* a list of tasks you can check off */}

            <div className="flex justify-between p-2">
              <div className="task-title">
                <h2 className="px-2 text-[#3C3C3C] font-bold">TASKS</h2>
                <h3 className="text-[#3C3C3C]">3 tasks left</h3>
              </div>
              <div className="add-task">
                <button className="m-2 p-2 bg-[#707C87] text-[#E9E9E9] rounded-lg">ADD TASK</button>
                <button className="m-2 p-2 bg-[#707C87] text-[#E9E9E9] rounded-lg">SETTINGS</button>
              </div>
            </div>

            {/* could be its own component */}
            <div id="task-1">
              <div id="task-1-name" className="flex justify-between p-2 bg-[#495253]">
                <div>
                  <input type="checkbox" id="checkbox-1"></input>
                  <label for="checkbox-1" className="p-2 text-[#D7C4A9]">
                    Finish this project
                  </label>
                </div>
                <button type="radio" className="text-[#D7C4A9]">V</button>
              </div>
              <div id="task-1-info" className="py-2 px-3 bg-[#687172]">
                <h3 id="task-1-description" className="text-[#D7C4A9]">Description: Report</h3>
                <h3 id="task-1-due-date" className="text-[#D7C4A9]">Due date: December 21st</h3>
              </div>
              {/* <h3 id=""></h3> */}
            </div>

          </div>

        </div>

        <div id="features" className="mx-4 basis-1/3">

          <div id="progress-bar" className="m-1 p-2 bg-[#877070]">
            {/* shows how many tasks you've completed so far */}
            PROGRESS BAR
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
  );
}

export default Todo;