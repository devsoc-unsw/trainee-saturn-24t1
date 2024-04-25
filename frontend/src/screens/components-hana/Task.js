import { useState } from "react";

const Task = (tabs, setTabs, currentTab, task) => {

    function deleteTask(task_id) {

        const new_tabs = [...tabs];
        const selectedTab = new_tabs.find((tabs) => tabs.id === currentTab);
        const new_task = selectedTab.tasks.filter((obj) => obj.id !== task_id);
        selectedTab.tasks = new_task;
        setTabs(new_tabs);

    }

    function setChecked(task_id) {
        
        const new_tabs = [...tabs];
        const selectedTab = new_tabs.find((tabs) => tabs.id === currentTab);
        const new_task = selectedTab.tasks.find((obj) => obj.id === task_id);
        new_task.checked = !new_task.checked;
        setTabs(new_tabs);

    }
    
    return (
        <div className="flex justify-between m-1">
            <div className="w-64">
                <div id="task-1-name" className="flex justify-between p-2 bg-[#495253]">
                    <div>
                        <input
                            type="checkbox"
                            checked={task.checked}
                            onChange={() => setChecked(task.id)}
                        ></input>
                        <label className="p-2 text-[#D7C4A9]">
                            {task.name}
                        </label>
                        </div>
                        <button
                            // onClick={() => dropdown()}
                            className="text-[#D7C4A9]"
                        >V</button>
                    </div>
                <div id="task-1-info" className="py-2 px-3 bg-[#687172]">
                    <h3 id="task-1-description" className="text-[#D7C4A9]">Description: {task.description}</h3>
                    <h3 id="task-1-due-date" className="text-[#D7C4A9]">Due date: {task.due_date}</h3>
                </div>
            </div>
            <div className="flex flex-col">
                <button>EDIT</button>
                <button
                    onClick={() => deleteTask(task.id)}
                >DELETE</button>
            </div>
        </div>
    )
}

export default Task;