// a singular task component that can be edited and deleted
const Task = ({ tabs, setTabs, currentTab, task, isDarkMode }) => {

  // if "EDIT" button is clicked
  function editTask(task_id) {

    const new_tabs = [...tabs];
    const selectedTab = new_tabs.find((tabs) => tabs.id === currentTab);
    const new_task = selectedTab.tasks.find((obj) => obj.id === task_id);

    new_task.edit_mode = true;

    setTabs(new_tabs);

  }

  // if "SAVE" button is clicked
  function saveTask(task_id) {

    const new_tabs = [...tabs];
    const selectedTab = new_tabs.find((tabs) => tabs.id === currentTab);
    const new_task = selectedTab.tasks.find((obj) => obj.id === task_id);

    // updates task name
    const name = document.getElementById("task-name-edit");
    if (name.value !== "") {
      new_task.name = name.value;
    }

    // updates task description
    const description = document.getElementById("task-description-edit");
    if (description.value !== "") {
      new_task.description = description.value;
    }

    // updates due date
    const date = document.getElementById("task-due-date-edit");
    if (date.value !== "") {
      new_task.due_date = date.valueAsDate;
    }

    new_task.edit_mode = false;

    setTabs(new_tabs);

  }

  // if "DELETE" button is clicked
  function deleteTask(task_id) {

    const new_tabs = [...tabs];
    const selectedTab = new_tabs.find((tabs) => tabs.id === currentTab);
    // deletes task from current tab's task list
    const new_task = selectedTab.tasks.filter((obj) => obj.id !== task_id);
    selectedTab.tasks = new_task;
    setTabs(new_tabs);

  }

  // when you tick a checkbox
  // this makes sure that the checked state doesn't carry over to other tabs
  function setChecked(task_id) {

    const new_tabs = [...tabs];
    const selectedTab = new_tabs.find((tabs) => tabs.id === currentTab);
    const new_task = selectedTab.tasks.find((obj) => obj.id === task_id);
    // changes checked state
    new_task.checked = !new_task.checked;
    setTabs(new_tabs);

  }

  return (
    <div className="flex justify-between m-1">
      <div className="w-64">
        <div id="task-1-name"
          className={
            isDarkMode === true
              ? "flex justify-between p-2 bg-[#495253]"
              : "flex justify-between p-2 bg-[#FFE7B9]"
          }>
          {/* div that contains checkbox and task name*/}
          <div>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => setChecked(task.id)}
            ></input>
            {task.edit_mode === false
              ? <label
                id="task-name"
                className={
                  isDarkMode === true
                    ? "p-2 text-[#D7C4A9]"
                    : "p-2 text-[#302E28]"
                }
              >{task.name}</label>
              : <textarea
                id="task-name-edit"
                placeholder={task.name}
                className={
                  isDarkMode === true
                    ? "mx-2 bg-[#687172] text-[#D7C4A9]"
                    : "mx-2 bg-[#FFF2DB] text-[#302E28]"
                }
              ></textarea>}
          </div>
          {/* dropdown button that show details of the task */}
          <button
            // onClick={() => dropdown()}
            className={
              isDarkMode === true
                ? "text-[#D7C4A9]"
                : "text-[#302E28]"
            }
          >V</button>
        </div>
        <div id="task-info" className={
          isDarkMode === true
            ? "py-2 px-3 bg-[#687172]"
            : "py-2 px-3 bg-[#FFF2DB]"}>
          {/* when the task is in edit mode */}
          {task.edit_mode === false
            ? <h3
              id="task-description"
              className={
                isDarkMode === true
                  ? "text-[#D7C4A9]"
                  : "text-[#302E28]"
              }
            >Description: {task.description}</h3>
            : <div>
              <label
                className={
                  isDarkMode === true
                    ? "text-[#D7C4A9]"
                    : "text-[#302E28]"
                }
              >Description: </label>
              <textarea
                id="task-description-edit"
                placeholder={task.description}
                className={
                  isDarkMode === true
                    ? "bg-[#495253] text-[#D7C4A9]"
                    : "bg-[#FFE7B9] text-[#302E28]"}
              ></textarea>
            </div>}
          {task.edit_mode === false
            ? <h3
              id="task-due-date"
              className={
                isDarkMode === true
                  ? "text-[#D7C4A9]"
                  : "text-[#302E28]"
              }
            >Due date: {task.due_date.toDateString()}</h3>
            : <div>
              <label
                className={
                  isDarkMode === true
                    ? "text-[#D7C4A9]"
                    : "text-[#302E28]"}
              >Due date: </label>
              <input
                type="date"
                id="task-due-date-edit"
                className={
                  isDarkMode === true
                    ? "bg-[#495253] text-[#D7C4A9]"
                    : "bg-[#FFE7B9] text-[#302E28]"
                }
              ></input>
            </div>}
        </div>
      </div>
      <div className="flex flex-col">
        {/* edits current task */}
        {task.edit_mode === false
          ? <button
            onClick={() => editTask(task.id)}
            className="font-bold"
          >EDIT</button>
          : <button
            onClick={() => saveTask(task.id)}
            className="font-bold"
          >SAVE</button>}

        {/* deletes current task */}
        <button
          onClick={() => deleteTask(task.id)}
          className="font-bold"
        >DELETE</button>
      </div>
    </div>
  )
}

export default Task;