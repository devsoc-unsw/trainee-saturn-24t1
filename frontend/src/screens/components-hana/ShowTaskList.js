// import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// a component used to add and create a new tab for tasks
const ShowTaskList = ({id}) => {
    
    let selectedTab = document.getElementById(id);

    function editTask() {
        //
    }

    function addTask(id_tab) {
        const new_task = {
            id: uuidv4(),
            name: "New Task",
            description: "Task type",
            due_date: "none"
        }

        document.getElementById(id_tab).tasks.push(new_task);
    }

    // function deleteTask(id_tab, id_task) {
    //     document.getElementById(id_tab).tasks.filter(id_task)
    // }

    return(
        <>
        <div id="tasks" className="p-4 bg-[#80CDBB]">
            <div className="flex justify-between p-2">
                <div className="task-title">
                    <h2 className="px-2 text-[#3C3C3C] font-bold">TASKS</h2>
                    <h3 className="text-[#3C3C3C]">3 tasks left</h3>
                </div>
                <div className="add-task">
                    <button
                        onClick={() => editTask()}
                        className="m-1 p-2 bg-[#707C87] text-[#E9E9E9] rounded-lg"
                    >EDIT TASKS</button>
                </div>
            </div>

            {selectedTab.map(x => (<div className="flex justify-between p-2">
                <div className="task-title">
                    <h2 className="px-2 text-[#3C3C3C] font-bold">{x.tasks.name}</h2>
                    <h3 className="text-[#3C3C3C]">3 tasks left</h3>
                </div>
            </div>))}

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
        </>
    );
}

export default ShowTaskList;

// function editTask() {
//     //
// }


// function deleteTask(id_tab, id_task) {
//     document.getElementById(id_tab).tasks.filter(id_task)
// }
