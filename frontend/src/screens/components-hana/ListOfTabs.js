import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task.js";
import PopUpAlert from "../PopUpAlert.js";

// a component used to add and delete tabs for tasks
const ListOfTabs = (props) => {

  const textareaRefs = useRef({});
  // state of editing, receive id as argument
  const [isEditing, setIsEditing] = useState(null);
  const [emptyTab, setEmptyTab] = useState(false);
  // initial state for tabs
  const [tabs, setTabs] = useState([
    {
      id: uuidv4(),
      name: "New Tab",
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

  // number of tabs limited to 3
  function addTab() {
    if (emptyTab === true) {
      editTabText(currentTab);
      return;
    }

    if (tabs.length < 3) {
      const new_tab = {
        id: uuidv4(),
        name: "New Tab",
        tasks: []
      }

      const new_tabs = [...tabs];
      new_tabs.push(new_tab);
      setTabs(new_tabs);
    }
  }

  function deleteTab(id) {
    if (currentTab === id && emptyTab === true) {
      // can delete current empty tab
      setEmptyTab(false);
    } else if (currentTab !== id && emptyTab === true) {
      // cannot delete another tab while currentTab is empty
      editTabText(currentTab);
      return;
    }

    const new_tabs = [...tabs].filter((obj) => obj.id !== id);
    // if the tab being deleted is the current tab
    if (id === currentTab) {
      setCurrentTab("");
    }
    setTabs(new_tabs);
  }

  function editTabText(id) {
    if (emptyTab === true) {
      id = currentTab;
    }

    setIsEditing(id);
    // change to edit mode (edit box appears)
    const tabNameEditBox = textareaRefs.current[id];
    tabNameEditBox.style.display = "flex";

    // auto focus when user is in edit mode
    tabNameEditBox.focus();
    // put cursor to end of text
    tabNameEditBox.setSelectionRange(tabNameEditBox.value.length, tabNameEditBox.value.length);
  }

  function handleChangeTab(id) {
    if (emptyTab === false) {
      // can only change tab when there is no emptyTab
      saveEdit(id);
    } else {
      editTabText(currentTab);
    }
  }

  function tabNameChanged(id) {
    // update tab name changes
    const updated_tabs = [...tabs];
    const selectedTab = updated_tabs.find((tabs) => tabs.id === id);
    const tabNameEditBox = textareaRefs.current[id];
    selectedTab.name = tabNameEditBox.value;
  }

  function closeTabNameEditBox(event, id, flag) {
    const all_tabs = [...tabs];
    const selectedTab = all_tabs.find((tabs) => tabs.id === currentTab);

    if (event.keyCode === 13 || flag) {
      if (selectedTab.name === "") {
        setEmptyTab(true);
        // force user to type in non-empty tab name
        editTabText(id);
        return;
      }
      setEmptyTab(false);
      // if key = enter or flag = 1, edit box is closed
      setIsEditing(null);
      const tabNameEditBox = textareaRefs.current[id];
      tabNameEditBox.style.display = "none";

    }
  }

  function showTaskList(id) {

    const selectedTab = tabs.find((tabs) => tabs.id === id);

    if (selectedTab === undefined) {
      return undefined;
    }

    const listOfTasks = selectedTab.tasks;

    return listOfTasks;

  }

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
      due_date: new Date(),
      checked: false,
      edit_mode: false,
      hidden: false
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

  const sendData = () => {
    const data = {
      data1: tabs,
      data2: currentTab
    };
    props.onData(data);
  };

  return (
    <>
      <div id="alert" className={
        emptyTab === true
          ? "my-2 rounded-lg"
          : "hidden my-2 rounded-lg"
      }>
        <PopUpAlert msg="Tab name cannot be empty" />
      </div>
      <div id="nav-tasks" className="flex">
        {tabs.map(x => (
          <div
            className={
              x.id === currentTab
                ? "py-1 px-3 text-[#3C3C3C] bg-[#80CDBB] font-bold rounded-t-xl"
                : "py-1 px-3 text-[#3C3C3C] bg-[#62A193] rounded-t-xl"
            }
          >
            <button
              onClick={() => handleChangeTab(x.id)}
              onDoubleClick={() => editTabText(x.id)}
            >
              {currentTab === x.id ? (
                <input
                  id="tab-name-edit-box"
                  ref={(element) => (textareaRefs.current[x.id] = element)}
                  className="bg-inherit hidden resize-none rounded-lg px-1 
                                            border-none focus:outline-none"
                  type="text"
                  size="4"
                  defaultValue={x.name}
                  onChange={() => tabNameChanged(x.id)}
                  onKeyDown={(event) => closeTabNameEditBox(event, x.id)}
                  onBlur={(event) => closeTabNameEditBox(event, x.id, 1)}
                />
              ) : null}

              <div
                className={
                  isEditing === x.id
                    ? "hidden"
                    : "flex"
                }>
                {x.name}
              </div>
            </button>
            <button
              onClick={() => deleteTab(x.id)}
              className={
                x.id === currentTab
                  ? "py-1 px-3 text-[#3C3C3C] bg-[#80CDBB]"
                  : "py-1 px-3 text-[#3C3C3C] bg-[#62A193]"
              }
            >x</button>
          </div >))
        }
        <button
          onClick={() => addTab()}
          className="py-2 px-4 text-[#3C3C3C] bg-[#B1C9DF] font-bold rounded-t-xl"
        >+</button>
      </div >

      <div id="tasks-info" className="px-4 py-6 bg-[#80CDBB] rounded-b-md rounded-tr-md max-h-screen
        overflow-y-scroll">
        {showTaskList(currentTab) === undefined
          ? <div>No tabs selected</div>
          : <div className="flex justify-between p-2 pb-3">
            <div className="mx-3">
              <h2 className="text-[#3C3C3C] text-2xl font-bold">TASKS</h2>
              <h3 className="text-[#3C3C3C]">{
                showTaskList(currentTab) === undefined
                  ? 0
                  : showTaskList(currentTab).length
              } tasks left</h3>
            </div>
            <div className="add-task">
              <button
                onClick={() => addTask()}
                className="mx-2 my-1 px-3 py-1 bg-[#707C87] text-[#E9E9E9] text-sm rounded-2xl font-semibold hover:bg-[#5B656D]"
              >ADD TASK +</button>
            </div>
          </div>}

        <div id="tasks">
          {showTaskList(currentTab) === undefined
            ? <div></div>
            : showTaskList(currentTab).map(x => (
              <Task tabs={tabs} setTabs={setTabs} currentTab={currentTab} task={x} isDarkMode={props.isDarkMode} />))}
        </div>
      </div>
      {sendData()}
    </>
  );

}

export default ListOfTabs;