// =========================
// DOM Selection
// =========================

const form = document.querySelector("#noteForm");
const textarea = document.querySelector("#noteInput");
const notesContainer = document.querySelector("#notesContainer");
const clearAllBtn = document.querySelector("#clearAllBtn");

// =========================
// State
// =========================

let notes = [];

// =========================
// Save to Local Storage
// =========================

function saveNotes(){

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

}

// =========================
// Render Notes
// =========================

function renderNotes(){

    notesContainer.innerHTML = "";

    if(notes.length===0){

        notesContainer.innerHTML=
        `<p class="empty-message">
            No Notes Available
        </p>`;

        return;

    }

    notes.forEach(function(note,index){

        const noteDiv=document.createElement("div");

        noteDiv.classList.add("note");

        noteDiv.innerHTML=`

        <p class="note-text">${note.text}</p>

        <p class="note-date">
            ${note.date}
        </p>

        <div class="actions">

            <button class="edit-btn" onclick="editNote(${index})">
                Edit
            </button>

            <button class="delete-btn" onclick="deleteNote(${index})">
                Delete
            </button>

        </div>

        `;

        notesContainer.appendChild(noteDiv);

    });

}

// =========================
// Initialize
// =========================

function initialize(){

    const savedNotes=localStorage.getItem("notes");

    if(savedNotes){

        notes=JSON.parse(savedNotes);

    }

    renderNotes();

}

// =========================
// Add Note
// =========================

form.addEventListener("submit",function(event){

    event.preventDefault();

    const text=textarea.value.trim();

    if(text===""){

        alert("Please write a note.");

        return;

    }

    const currentDate=new Date();

    const noteObject={

        text:text,

        date:currentDate.toLocaleString()

    };

    notes.unshift(noteObject);

    saveNotes();

    renderNotes();

    textarea.value="";

});

// =========================
// Delete
// =========================

function deleteNote(index){

    const confirmDelete=confirm(
        "Delete this note?"
    );

    if(!confirmDelete){

        return;

    }

    notes.splice(index,1);

    saveNotes();

    renderNotes();

}

// =========================
// Edit
// =========================

function editNote(index){

    const updatedText=prompt(
        "Edit your note:",
        notes[index].text
    );

    if(updatedText===null){

        return;

    }

    if(updatedText.trim()===""){

        alert("Note cannot be empty.");

        return;

    }

    notes[index].text=updatedText.trim();

    notes[index].date=
    "Edited: "+new Date().toLocaleString();

    saveNotes();

    renderNotes();

}

// =========================
// Clear All
// =========================

clearAllBtn.addEventListener("click",function(){

    if(notes.length===0){

        alert("No notes to clear.");

        return;

    }

    const answer=confirm(
        "Delete all notes?"
    );

    if(!answer){

        return;

    }

    notes=[];

    saveNotes();

    renderNotes();

});

// =========================
// Start App
// =========================

initialize();