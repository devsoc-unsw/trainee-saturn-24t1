import React, { useState, useEffect } from 'react';
import goalsIcon from './goals_icon.svg'
import notesIcon from './notes_icon.svg'

function GoalsNotes() {
    const [currTab, setCurrTab] = useState("goals");
    const [goalsContent, setGoalsContent] = useState(
        "I want to be rich \nFind a hobby \nGIMME AN HD \nFind a boyfriend..or a girlfriend"
    );

    const [notesContent, setNotesContent] = useState(
        "I don't think it's possible anymore..\n"
    );

    const [displayContent, setDisplayContent] = useState(goalsContent);

    useEffect(() => {
        if (currTab === "goals") {
            setDisplayContent(goalsContent);
        } else {
            setDisplayContent(notesContent);
        }
    }, [currTab, goalsContent, notesContent]);

    const editClicked = () => {
        var editButton = document.getElementById("editButton");
        var editBox = document.getElementById("edit-box-container");
        var content = document.getElementById(currTab);
        if (editButton.innerHTML === "Edit") {
            editButton.innerHTML = "Save";
            editBox.style.display = "block";
            content.style.display = "none";
        } else {
            editButton.innerHTML = "Edit";
            editBox.style.display = "none";
            content.style.display = "block";
        }
    }

    const goalsClicked = () => {
        var editButton = document.getElementById("editButton").innerHTML;
        if (editButton === "Save") {
            alert("Warning: you have not saved your file.");
            return;
        }
        document.getElementById("goals-notes-title").innerHTML = "Goals";
        document.getElementById("goals").style.display = "block";
        document.getElementById("notes").style.display = "none";
        setCurrTab("goals");
    }

    const notesClicked = () => {
        var editButton = document.getElementById("editButton").innerHTML;
        if (editButton === "Save") {
            alert("Warning: you have not saved your file.");
            return;
        }
        document.getElementById("goals-notes-title").innerHTML = "Notes";
        document.getElementById("goals").style.display = "none";
        document.getElementById("notes").style.display = "block";
        setCurrTab("notes");
    }

    const contentChanged = () => {
        var editBox = document.getElementById("edit-box").value;
        if (currTab === "goals") {
            setGoalsContent(editBox);
        } else {
            setNotesContent(editBox);;
        }
    }

    return <>
        <div id="goals-notes" className="m-2">
            <div id="nav-goals-notes" className="flex">
                <h3 id="goals-menu" className="hover:cursor-pointer flex font-bold py-2 px-3 text-[#E9E9E9] 
                bg-[#707C87] rounded-t-xl" onClick={goalsClicked}>Goals
                    <img src={goalsIcon} className="px-1" alt="target_icon" />
                </h3>

                <h3 id="notes-menu" className="hover:cursor-pointer flex font-bold py-2 px-3 text-[#3C3C3C] 
                bg-[#B1C9DF] rounded-t-xl" onClick={notesClicked}>Notes
                    <img src={notesIcon} className="px-1" alt="notes_icon" />
                </h3>
            </div>

            <div id="goals-notes-content" className="bg-[#D4DCFF] py-2 px-6 rounded-b-xl rounded-tr-xl w-full">
                <div className="flex items-center">
                    <h1 id="goals-notes-title" className='basis-[75%] font-bold text-4xl text-[#3C3C3C]'>Goals</h1>
                    <button id="editButton" className="basis-[25%] align-right px-1 py-1 bg-[#707C87] 
                            rounded-xl align-middle text-center h-9 w-12 text-[#E9E9E9] font-bold" onClick={editClicked}>
                        Edit
                    </button>
                </div>
                <div id="goals" className='content'>
                    {/* change between "goals-content" and "notes-content" */}
                    <div id="goals-content" className="whitespace-pre place-content-between align-top py-1 
                    justify-between">
                        {goalsContent}
                    </div>
                </div>

                <div id="notes" className='hidden content'>
                    {/* change between "goals-content" and "notes-content" */}
                    <div id="goals-content" className="whitespace-pre place-content-between align-top py-1">
                        {notesContent}
                    </div>
                </div>
                <div id="edit-box-container" className='hidden'>
                    <textarea
                        value={displayContent}
                        type="text"
                        id="edit-box"
                        className="my-2 p-2 min-h-32 w-full align-top rounded-xl"
                        onChange={contentChanged}
                    >
                    </textarea>
                </div>
            </div>
        </div>
    </>
}

export default GoalsNotes;