import React, { useState, useEffect } from 'react';
import goalsIcon from './goals_icon.svg'
import notesIcon from './notes_icon.svg'

const GoalsNotes = (props) => {
  const [currTab, setCurrTab] = useState("goals");

  // default "Goals" content
  const [goalsContent, setGoalsContent] = useState(
    "I want to be rich \nFind a hobby \nGIMME AN HD \nFind a boyfriend..or a girlfriend"
  );

  // default "Notes" content
  const [notesContent, setNotesContent] = useState(
    "I don't think it's possible anymore..\n"
  );

  // default displayed content is "Goals" tab
  const [displayContent, setDisplayContent] = useState(goalsContent);

  // changing displayed tab between "Goals" or "Notes" tab
  useEffect(() => {
    if (currTab === "goals") {
      setDisplayContent(goalsContent);
    } else {
      setDisplayContent(notesContent);
    }
  }, [currTab, goalsContent, notesContent]);

  // if "Edit" button is clicked
  const editClicked = () => {
    var editButton = document.getElementById("editButton");
    var editBox = document.getElementById("edit-box-container");
    var content = document.getElementById(currTab);
    if (editButton.innerHTML === "Edit") {
      // turn "Edit" into "Save" when user edits the content
      editButton.innerHTML = "Save";
      // display edit box for user to change its content
      editBox.style.display = "block";
      // hide content box
      content.style.display = "none";
    } else {
      // turn "Save" to "Edit" after a user saves
      editButton.innerHTML = "Edit";
      // hide edit box
      editBox.style.display = "none";
      // display updated content box
      content.style.display = "block";
    }
  }

  // if "Goals" tab is clicked
  const goalsClicked = () => {
    var editButton = document.getElementById("editButton").innerHTML;
    if (editButton === "Save") {
      // if "Goals" is clicked when the user hasn't saved the edited content
      // an alert message pops up
      // might change the alert box style later
      alert("Warning: you have not saved your file.");
      return;
    }
    // display content related to "Goals" and hide 
    // content related to "Notes"
    document.getElementById("goals-notes-title").innerHTML = "Goals";
    document.getElementById("goals").style.display = "block";
    document.getElementById("notes").style.display = "none";
    setCurrTab("goals");
  }

  // if "Notes" tab is clicked
  const notesClicked = () => {
    var editButton = document.getElementById("editButton").innerHTML;
    if (editButton === "Save") {
      // if "Notes" is clicked when the user hasn't saved the edited content
      // an alert message pops up
      // might change the alert box style later
      alert("Warning: you have not saved your file.");
      return;
    }
    // display content related to "Notes" and hide 
    // content related to "Goals"
    document.getElementById("goals-notes-title").innerHTML = "Notes";
    document.getElementById("goals").style.display = "none";
    document.getElementById("notes").style.display = "block";
    setCurrTab("notes");
  }

  // updated content after user edited and saved
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
      {/* "Goals" and "Notes" navbar */}
      <div id="nav-goals-notes" className="flex">
        <h3 id="goals-menu"
          className={
            props.isDarkMode === true
              ? "hover:cursor-pointer flex font-bold py-2 px-3 text-[#E9E9E9] bg-[#707C87] rounded-t-xl"
              : "hover:cursor-pointer flex font-bold py-2 px-3 text-[#E9E9E9] bg-[#6AB1A0] rounded-t-xl"
          }
          onClick={goalsClicked}>Goals
          <img src={goalsIcon} className="px-1" alt="target_icon" />
        </h3>

        <h3 id="notes-menu"
          className={
            props.isDarkMode === true
              ? "hover:cursor-pointer flex font-bold py-2 px-3 text-[#3C3C3C] bg-[#B1C9DF] rounded-t-xl"
              : "hover:cursor-pointer flex font-bold py-2 px-3 text-[#3C3C3C] bg-[#FFE7B9] rounded-t-xl"
          }
          onClick={notesClicked}>Notes
          <img src={notesIcon} className="px-1" alt="notes_icon" />
        </h3>
      </div>

      <div id="goals-notes-content"
        className={
          props.isDarkMode === true
            ? "bg-[#D4DCFF] py-2 px-6 rounded-b-xl rounded-tr-xl w-full"
            : "bg-[#BEE6CC] py-2 px-6 rounded-b-xl rounded-tr-xl w-full"
        }>
        <div className="flex items-center">
          {/* default tab is "Goals", this will change if the user switches tab */}
          <h1 id="goals-notes-title" className='basis-[75%] font-bold text-4xl text-[#3C3C3C]'>
            Goals
          </h1>
          <button id="editButton"
            className={
              props.isDarkMode === true
                ? "basis-[25%] align-right px-1 py-1 bg-[#707C87] rounded-xl align-middle text-center h-9 w-12 text-[#E9E9E9] font-bold"
                : "basis-[25%] align-right px-1 py-1 bg-[#6AB1A0] rounded-xl align-middle text-center h-9 w-12 text-[#E9E9E9] font-bold"
            }
            onClick={editClicked}>
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
        {/* is hidden
                    will be displayed when user clicks "Edit" button,
                    changed value will be updated by contentChanged function */}
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
    </div >
  </>
}

export default GoalsNotes;