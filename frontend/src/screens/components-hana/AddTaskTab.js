import { useState } from "react";
import ReactDOM from "react-dom/client";

// a component used to add and create a new tab for tasks
const AddTaskTab = () => {
    let arr = [];

    const [taskBar, editTaskTab] = useState("");

    function addTaskTab() {
        addTaskTab(taskBar => taskBar)
    }

    return(
        <>
        <div className="border-t-2 border-x-2">
            <button className="py-2 px-3 text-[#E9E9E9] bg-[#707C87]">
                New Tab
            </button>
            <button className="py-2 px-3 text-[#E9E9E9] bg-[#707C87]">
                x
            </button>
        </div>
        <button
            onClick={() => addTaskTab()}
            className="py-2 px-4 text-[#3C3C3C] bg-[#B1C9DF] rounded-t-lg"
        >+</button>
        </>
    );
}

export default AddTaskTab;