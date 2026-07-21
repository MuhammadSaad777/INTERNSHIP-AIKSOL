// =========================
// DOM Selection
// =========================

const form = document.querySelector("#noteForm");
const textarea = document.querySelector("#noteInput");
const notesContainer = document.querySelector("#notesContainer");
const clearAllBtn = document.querySelector("#clearAllBtn");

const searchInput = document.querySelector("#searchInput");
const dateFilterInput = document.querySelector("#dateFilterInput");
const clearFiltersBtn = document.querySelector("#clearFiltersBtn");

const editModal = document.querySelector("#editModal");
const editTextarea = document.querySelector("#editTextarea");
const saveEditBtn = document.querySelector("#saveEditBtn");
const cancelEditBtn = document.querySelector("#cancelEditBtn");

// =========================
// State
// =========================

let notes = [];
let currentEditIndex = null;

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
// Helper: escape HTML (avoid broken markup / injection from note text)
// =========================

function escapeHTML(str){

    const div = document.createElement("div");

    div.textContent = str;

    return div.innerHTML;

}

// =========================
// Helper: get notes filtered by search + date
// =========================

function getFilteredNotes(){

    const searchTerm = searchInput.value.trim().toLowerCase();
    const dateTerm = dateFilterInput.value; // yyyy-mm-dd from <input type="date">

    return notes

        .map(function(note, idx){
            return Object.assign({}, note, { idx: idx });
        })

        .filter(function(note){

            const matchesSearch =
                searchTerm === "" ||
                note.text.toLowerCase().includes(searchTerm);

            const matchesDate =
                dateTerm === "" ||
                note.isoDate === dateTerm;

            return matchesSearch && matchesDate;

        });

}

// =========================
// Render Notes
// =========================

function renderNotes(){

    notesContainer.innerHTML = "";

    if(notes.length === 0){

        notesContainer.innerHTML =
        `<p class="empty-message">
            No Notes Available
        </p>`;

        return;

    }

    const filteredNotes = getFilteredNotes();

    if(filteredNotes.length === 0){

        notesContainer.innerHTML =
        `<p class="empty-message">
            No notes match your search/filter
        </p>`;

        return;

    }

    filteredNotes.forEach(function(note){

        const noteDiv = document.createElement("div");

        noteDiv.classList.add("note");

        noteDiv.innerHTML = `

        <p class="note-text">${escapeHTML(note.text)}</p>

        <p class="note-date">
            ${note.date}
        </p>

        <div class="actions">

            <button class="edit-btn" onclick="editNote(${note.idx})">
                Edit
            </button>

            <button class="delete-btn" onclick="deleteNote(${note.idx})">
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

    const savedNotes = localStorage.getItem("notes");

    if(savedNotes){

        notes = JSON.parse(savedNotes);

    }

    renderNotes();

}

// =========================
// Add Note
// =========================

form.addEventListener("submit", function(event){

    event.preventDefault();

    const text = textarea.value.trim();

    if(text === ""){

        alert("Please write a note.");

        return;

    }

    const currentDate = new Date();

    const noteObject = {

        text: text,

        date: currentDate.toLocaleString(),

        isoDate: currentDate.toISOString().slice(0, 10) // yyyy-mm-dd, used for date filtering

    };

    notes.unshift(noteObject);

    saveNotes();

    renderNotes();

    textarea.value = "";

});

// =========================
// Delete
// =========================

function deleteNote(index){

    const confirmDelete = confirm(
        "Delete this note?"
    );

    if(!confirmDelete){

        return;

    }

    notes.splice(index, 1);

    saveNotes();

    renderNotes();

}

// =========================
// Edit (custom modal instead of prompt())
// =========================

function editNote(index){

    currentEditIndex = index;

    editTextarea.value = notes[index].text;

    editModal.style.display = "flex";

    editTextarea.focus();

}

function closeEditModal(){

    editModal.style.display = "none";

    currentEditIndex = null;

}

saveEditBtn.addEventListener("click", function(){

    const updatedText = editTextarea.value.trim();

    if(updatedText === ""){

        alert("Note cannot be empty.");

        return;

    }

    const now = new Date();

    notes[currentEditIndex].text = updatedText;

    notes[currentEditIndex].date = "Edited: " + now.toLocaleString();

    notes[currentEditIndex].isoDate = now.toISOString().slice(0, 10);

    saveNotes();

    renderNotes();

    closeEditModal();

});

cancelEditBtn.addEventListener("click", function(){

    closeEditModal();

});

// Close modal when clicking outside the box
editModal.addEventListener("click", function(event){

    if(event.target === editModal){

        closeEditModal();

    }

});

// =========================
// Search & Date Filter
// =========================

searchInput.addEventListener("input", renderNotes);

dateFilterInput.addEventListener("input", renderNotes);

clearFiltersBtn.addEventListener("click", function(){

    searchInput.value = "";
    dateFilterInput.value = "";

    renderNotes();

});

// =========================
// Clear All
// =========================

clearAllBtn.addEventListener("click", function(){

    if(notes.length === 0){

        alert("No notes to clear.");

        return;

    }

    const answer = confirm(
        "Delete all notes?"
    );

    if(!answer){

        return;

    }

    notes = [];

    saveNotes();

    renderNotes();

});

// =========================
// Start App
// =========================

initialize();
