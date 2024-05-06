import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task.js";

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
                    due_date: "0000-00-00",
                    checked: false,
                    edit_mode: false
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
                        due_date: "0000-00-00",
                        checked: false,
                        edit_mode: false
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
        setCurrentTab("");
        setTabs(new_tabs);
    }

    function editTabText(id) {
        //
    }

    function showTaskList(id) {

        const selectedTab = tabs.find((tabs) => tabs.id === id);

        if (selectedTab === undefined) {
            return undefined;
        }

        const listOfTasks = selectedTab.tasks;

        return listOfTasks;

    }

    // saves current tab id
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
            due_date: "0000-00-00",
            checked: false,
            edit_mode: false
        }
    
        selectedTab.tasks.push(new_task);

        setTabs(new_tabs);
        
    }

    // saves any changes to tasks when switching tabs
    function saveEdit(id) {
        
        const new_tabs = [...tabs];

        if (currentTab === "") {
            setCurrentTab(id);
            return;
        }

        const selectedTab = new_tabs.find((tabs) => tabs.id === currentTab);
        const task_list = selectedTab.tasks;
        
        // checks if there are any tasks that are being edited
        var edit_flag = false;
        for (var i = 0; i < task_list.length; i++) {
            if (task_list[i].edit_mode === true) {
                edit_flag = true;
            }
        }

        if (edit_flag === false) {
            setCurrentTab(id);
        } else {
            alert("You have unsaved changes for your tasks.");
        }

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
                        onClick={() => {saveEdit(x.id)}}
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
        {showTaskList(currentTab) === undefined
        ? <div>No tabs selected</div>
        : <div className="flex justify-between p-2">
                <div className="task-title">
                    <h2 className="px-2 text-[#3C3C3C] font-bold">TASKS</h2>
                    <h3 className="text-[#3C3C3C]">{
                        showTaskList(currentTab) === undefined
                        ? 0
                        : showTaskList(currentTab).length
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
                {showTaskList(currentTab) === undefined
                ? <div></div>
                : showTaskList(currentTab).map(x => (
                    <Task tabs={tabs} setTabs={setTabs} currentTab={currentTab} task={x}/>))}
            </div>

        </div>
        </>
    );

}

export default ListOfTabs;