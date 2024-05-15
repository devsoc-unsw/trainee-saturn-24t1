import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DoneIcon from '@mui/icons-material/Done';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// a singular task component that can be edited and deleted
const Task = ({ tabs, setTabs, currentTab, task, isDarkMode }) => {

  // if "EDIT" button is clicked
  function editTask(task_id) {

    const new_tabs = [...tabs];
    const selectedTab = new_tabs.find((tabs) => tabs.id === currentTab);
    const new_task = selectedTab.tasks.find((obj) => obj.id === task_id);

    if (new_task.hidden === true) {
      new_task.hidden = false;
    }
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

  // hides and unhides the task information
  function dropdown(task_id) {

    const new_tabs = [...tabs];
    const selectedTab = new_tabs.find((tabs) => tabs.id === currentTab);
    const new_task = selectedTab.tasks.find((obj) => obj.id === task_id);

    if (new_task.hidden === true) {
      new_task.hidden = false;

    } else {
      new_task.hidden = true;
    }

    setTabs(new_tabs);

  }


  return (
    <div className="flex justify-around my-1">
      <div className="w-5/6">
        <div id="task-name" className="flex justify-between p-2 bg-[#495253] rounded-sm">
          {/* div that contains checkbox and task name*/}
          <div className='flex item-center'>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => setChecked(task.id)}
              className='mx-1'
            ></input>
            {task.edit_mode === false
              ? <label
                id="task-name"
                className="mx-2 my-1 text-[#D7C4A9] font-medium"
              >{task.name}</label>
              : <textarea
                id="task-name-edit"
                placeholder={task.name}
                className="mx-2 px-1 bg-[#687172] text-[#D7C4A9] h-6 rounded-sm"
              ></textarea>}
          </div>
          {/* dropdown button that show details of the task */}
          <button
            onClick={() => dropdown(task.id)}
            className={
              task.hidden === true
                ? 'mx-1 text-[#D7C4A9] font-semibold rotate-90'
                : 'mx-1 text-[#D7C4A9] font-semibold'
            }
          >V</button>
        </div>
        {/* hides and unhides the task information */}
        {task.hidden === true
          ? <div></div>
          : <div id="task-info" className="py-2 px-3 bg-[#687172] rounded-sm">
            {/* when the task is in edit mode */}
            {task.edit_mode === false
              ? <h3
                id="task-description"
                className="mx-1 text-[#D7C4A9]"
              >Description: {task.description}</h3>
              : <div className='mx-1 flex item-center my-1'>
                <label
                  className="text-[#D7C4A9]"
                >Description: </label>
                <textarea
                  id="task-description-edit"
                  placeholder={task.description}
                  className="mx-1 px-1 bg-[#495253] text-[#D7C4A9] h-6 rounded-sm"
                ></textarea>
              </div>}
            {task.edit_mode === false
              ? <h3
                id="task-due-date"
                className="mx-1 text-[#D7C4A9]"
              >Due date: {task.due_date.toDateString()}</h3>
              : <div className='flex item-center'>
                <label
                  className="mx-1 text-[#D7C4A9]"
                >Due date: </label>
                <input
                  type="date"
                  id="task-due-date-edit"
                  className="mx-1 px-1 bg-[#495253] text-[#D7C4A9] rounded-sm"
                ></input>
              </div>}
          </div>
        }
      </div>
      <div className="flex flex-col">
        {/* edits current task */}
        {task.edit_mode === false
          ? <button
            onClick={() => editTask(task.id)}
            className="py-1 motion-safe:hover:scale-110 hover:text-[#7C84A6]"
          ><DriveFileRenameOutlineIcon /></button>
          : <button
            onClick={() => saveTask(task.id)}
            className="py-1 motion-safe:hover:scale-110 hover:text-[#39A48B]"
          ><DoneIcon /></button>}

        {/* deletes current task */}
        <button
          onClick={() => deleteTask(task.id)}
          className="py-1 motion-safe:hover:scale-110 hover:text-[#EF5151]"
        ><DeleteOutlineIcon /></button>
      </div>
    </div>
  )
}

export default Task;