import GoalsNotes from './GoalsNotes';

import AddTaskTab from './components-hana/AddTaskTab'

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
          <p className="text-[#3C3C3C]">You've done something, that's great! You're doing a good job!</p>
        </div>

        <div id="dark-mode">
          <button className="text-zinc-200 font-bold">BUTTON</button>
        </div>

      </div>

      <div id="body" className="flex justify-center">

        <div id="to-do-list" className="min-w-96 m-4 basis-1/3">

          <AddTaskTab/>

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