import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// a component used to add and delete tabs for tasks
const ListOfTabs = () => {
    
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
                    due_date: "none",
                    checked: false
                }
            ]
        }
    ]);

    // number of tabs limited to 3
    function addTab() {
        if (tabs.length < 3) {
            const new_tab = {
                id: uuidv4(),
                name: "New Tab",
                tasks: [
                    {
                        id: uuidv4(),
                        name: "New Task",
                        description: "Task type",
                        due_date: "none",
                        checked: false
                    }
                ]
            }
    
            const new_tabs = [...tabs];
            new_tabs.push(new_tab);
            setTabs(new_tabs);
        }
    }

    function deleteTab(id) {
        const new_tabs = [...tabs].filter((obj) => obj.id !== id);
        setTabs(new_tabs);
    }

    function editTabText(id) {
        //
    }

    function ShowTaskList(id) {

        const selectedTab = tabs.find((tabs) => tabs.id === id);

        if (selectedTab === undefined) {
            return undefined;
        }

        const listOfTasks = selectedTab.tasks;

        return listOfTasks;

    }

    const [currentTab, setCurrentTab] = useState("");

    function addTask() {

        const new_tabs = [...tabs];
        const selectedTab = new_tabs.find((tabs) => tabs.id === currentTab);
        
        if (selectedTab === undefined) {
            return undefined;
        }

        const new_task = {
            id: uuidv4(),
            name: "New Task",
            description: "Task type",
            due_date: "none"
        }
    
        selectedTab.tasks.push(new_task);

        setTabs(new_tabs);
        
    }

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


    return(
        <>
        <div id="nav-tasks" className="flex">
            {tabs.map(x => (
                <div
                    className={
                        x.id === currentTab
                        ? "py-1 px-3 text-[#3C3C3C] bg-[#80CDBB] font-bold rounded-t-lg"
                        : "py-1 px-3 text-[#3C3C3C] bg-[#62A193] rounded-t-lg"
                    }
                >
                <button
                    onClick={() => {setCurrentTab(x.id)}}
                    onDoubleClick={() => editTabText(x.id)}
                >{x.name}</button>
                <button
                    onClick={() => deleteTab(x.id)}
                    className={
                        x.id === currentTab
                        ? "py-1 px-3 text-[#3C3C3C] bg-[#80CDBB] rounded-t-lg"
                        : "py-1 px-3 text-[#3C3C3C] bg-[#62A193] rounded-t-lg"
                    }
                >x</button>
            </div>))}
            <button
                onClick={() => addTab()}
                className="py-2 px-4 text-[#3C3C3C] bg-[#B1C9DF] font-bold rounded-t-lg"
            >+</button>
        </div>
        
        <div id="tasks-info" className="p-4 bg-[#80CDBB]">
        {ShowTaskList(currentTab) === undefined
        ? <div>No tabs selected</div>
        : <div className="flex justify-between p-2">
                <div className="task-title">
                    <h2 className="px-2 text-[#3C3C3C] font-bold">TASKS</h2>
                    <h3 className="text-[#3C3C3C]">{
                        ShowTaskList(currentTab) === undefined
                        ? 0
                        : ShowTaskList(currentTab).length
                    } tasks left</h3>
                </div>
                <div className="add-task">
                    <button
                        onClick={() => addTask()}
                        className="m-1 p-2 bg-[#707C87] text-[#E9E9E9] rounded-lg"
                    >ADD TASKS</button>
                </div>
            </div>}

            <div id="tasks">
                {ShowTaskList(currentTab) === undefined
                ? <div>No tasks available</div>
                : ShowTaskList(currentTab).map(x => (
                    <div className="flex justify-between m-1">
                        <div className="w-64">
                            <div id="task-1-name" className="flex justify-between p-2 bg-[#495253]">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="checkbox-1"
                                        defaultChecked={x.checked}
                                        onChange={() => setChecked(x.id)}
                                    ></input>
                                    <label for="checkbox-1" className="p-2 text-[#D7C4A9]">
                                        {x.name}
                                    </label>
                                    </div>
                                    <button
                                        // onClick={() => dropdown()}
                                        className="text-[#D7C4A9]"
                                    >V</button>
                                </div>
                            <div id="task-1-info" className="py-2 px-3 bg-[#687172]">
                                <h3 id="task-1-description" className="text-[#D7C4A9]">Description: {x.description}</h3>
                                <h3 id="task-1-due-date" className="text-[#D7C4A9]">Due date: {x.due_date}</h3>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <button>EDIT</button>
                            <button
                                onClick={() => deleteTask(x.id)}
                            >DELETE</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        </>
    );

}

export default ListOfTabs;