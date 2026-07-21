// ===========================
// DOM Selection
// ===========================

const form = document.querySelector("#expenseForm");

const expenseName = document.querySelector("#expenseName");
const amount = document.querySelector("#amount");
const category = document.querySelector("#category");
const description = document.querySelector("#description");

const expenseList = document.querySelector("#expenseList");
const total = document.querySelector("#total");

// Filters
const searchName = document.querySelector("#searchName");
const filterDescription = document.querySelector("#filterDescription");
const filterCategory = document.querySelector("#filterCategory");
const filterMaxAmount = document.querySelector("#filterMaxAmount");
const filterDateFrom = document.querySelector("#filterDateFrom");
const filterDateTo = document.querySelector("#filterDateTo");
const clearFilters = document.querySelector("#clearFilters");

// Edit Modal
const editModal = document.querySelector("#editModal");
const editName = document.querySelector("#editName");
const editAmount = document.querySelector("#editAmount");
const editCategory = document.querySelector("#editCategory");
const editDescription = document.querySelector("#editDescription");
const saveEdit = document.querySelector("#saveEdit");
const cancelEdit = document.querySelector("#cancelEdit");

// ===========================
// State
// ===========================

let expenses =
JSON.parse(localStorage.getItem("expenses"))
|| [];

// id of the expense currently open in the edit modal
let editingId = null;

// ===========================
// Helpers
// ===========================

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function formatDate(isoDate) {
    const d = new Date(isoDate);
    return d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

// Returns the expenses array filtered according to
// whatever is currently typed/selected in the filter controls.
function getFilteredExpenses() {

    const nameQuery = searchName.value.trim().toLowerCase();
    const descQuery = filterDescription.value.trim().toLowerCase();
    const categoryQuery = filterCategory.value;
    const maxAmountQuery = filterMaxAmount.value === "" ? null : Number(filterMaxAmount.value);
    const dateFromQuery = filterDateFrom.value; // "YYYY-MM-DD" or ""
    const dateToQuery = filterDateTo.value;     // "YYYY-MM-DD" or ""

    return expenses.filter(function (expense) {

        // Substring match on name
        if (nameQuery !== "" && !expense.name.toLowerCase().includes(nameQuery)) {
            return false;
        }

        // Substring match on description
        if (descQuery !== "") {
            const desc = (expense.description || "").toLowerCase();
            if (!desc.includes(descQuery)) {
                return false;
            }
        }

        // Exact category match
        if (categoryQuery !== "" && expense.category !== categoryQuery) {
            return false;
        }

        // Max amount (e.g. "up to 500")
        if (maxAmountQuery !== null && expense.amount > maxAmountQuery) {
            return false;
        }

        // Date range
        if (dateFromQuery !== "" && expense.date < dateFromQuery) {
            return false;
        }

        if (dateToQuery !== "" && expense.date > dateToQuery) {
            return false;
        }

        return true;

    });

}

// ===========================
// Render Function
// ===========================

function renderExpenses() {

    expenseList.innerHTML = "";

    const filtered = getFilteredExpenses();

    // Total reflects ALL expenses, not just filtered ones
    let totalAmount = 0;
    expenses.forEach(function (expense) {
        totalAmount += expense.amount;
    });
    total.textContent = totalAmount;

    if (filtered.length === 0) {
        const emptyMsg = document.createElement("div");
        emptyMsg.classList.add("no-results");
        emptyMsg.textContent = expenses.length === 0
            ? "No expenses added yet."
            : "No expenses match your filters.";
        expenseList.appendChild(emptyMsg);
        return;
    }

    filtered.forEach(function (expense) {

        const div = document.createElement("div");
        div.classList.add("expense");

        div.innerHTML = `

            <h3>${expense.name}</h3>

            <p><strong>Amount:</strong> Rs.${expense.amount}</p>

            <p><strong>Category:</strong> ${expense.category}</p>

            ${expense.description
                ? `<p class="description"><strong>Description:</strong> ${expense.description}</p>`
                : ""
            }

            <p class="date">Added on ${formatDate(expense.date)}</p>

            <div class="expense-buttons">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>

        `;

        const deleteButton = div.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            expenses = expenses.filter(function (item) {
                return item.id !== expense.id;
            });
            saveExpenses();
            renderExpenses();
        });

        const editButton = div.querySelector(".edit");
        editButton.addEventListener("click", function () {
            openEditModal(expense.id);
        });

        expenseList.appendChild(div);

    });

}

// ===========================
// Edit Modal Logic
// ===========================

function openEditModal(id) {

    const expense = expenses.find(function (item) {
        return item.id === id;
    });

    if (!expense) return;

    editingId = id;

    editName.value = expense.name;
    editAmount.value = expense.amount;
    editCategory.value = expense.category;
    editDescription.value = expense.description || "";

    editModal.classList.remove("hidden");

}

function closeEditModal() {
    editingId = null;
    editModal.classList.add("hidden");
}

saveEdit.addEventListener("click", function () {

    if (editingId === null) return;

    const newName = editName.value.trim();
    const newAmount = Number(editAmount.value);
    const newCategory = editCategory.value;
    const newDescription = editDescription.value.trim();

    if (newName === "" || newAmount <= 0) {
        // Simple inline validation, no alert/prompt
        editAmount.style.borderColor = newAmount <= 0 ? "red" : "#bbb";
        editName.style.borderColor = newName === "" ? "red" : "#bbb";
        return;
    }

    expenses = expenses.map(function (item) {
        if (item.id === editingId) {
            return {
                ...item,
                name: newName,
                amount: newAmount,
                category: newCategory,
                description: newDescription
            };
        }
        return item;
    });

    saveExpenses();
    renderExpenses();
    closeEditModal();

});

cancelEdit.addEventListener("click", closeEditModal);

// Close modal if user clicks outside the modal box
editModal.addEventListener("click", function (event) {
    if (event.target === editModal) {
        closeEditModal();
    }
});

// ===========================
// Filter Listeners
// ===========================

[searchName, filterDescription, filterCategory, filterMaxAmount, filterDateFrom, filterDateTo]
    .forEach(function (el) {
        el.addEventListener("input", renderExpenses);
        el.addEventListener("change", renderExpenses);
    });

clearFilters.addEventListener("click", function () {
    searchName.value = "";
    filterDescription.value = "";
    filterCategory.value = "";
    filterMaxAmount.value = "";
    filterDateFrom.value = "";
    filterDateTo.value = "";
    renderExpenses();
});

// ===========================
// Form Submission
// ===========================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = expenseName.value.trim();
    const expenseAmount = Number(amount.value);
    const expenseCategory = category.value;
    const expenseDescription = description.value.trim();

    if (name === "" || expenseAmount <= 0) {
        alert("Please enter valid data.");
        return;
    }

    const expense = {
        id: generateId(),
        name: name,
        amount: expenseAmount,
        category: expenseCategory,
        description: expenseDescription,
        date: new Date().toISOString().split("T")[0]
    };

    expenses.push(expense);

    saveExpenses();
    renderExpenses();

    form.reset();

});

// ===========================
// Initial Render
// ===========================

renderExpenses();