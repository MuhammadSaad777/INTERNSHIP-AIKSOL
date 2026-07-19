// ===========================
// DOM Selection
// ===========================

const form = document.querySelector("#expenseForm");

const expenseName = document.querySelector("#expenseName");

const amount = document.querySelector("#amount");

const category = document.querySelector("#category");

const expenseList = document.querySelector("#expenseList");

const total = document.querySelector("#total");

// ===========================
// State
// ===========================

let expenses =
JSON.parse(localStorage.getItem("expenses"))
|| [];

// ===========================
// Render Function
// ===========================

function renderExpenses(){

    expenseList.innerHTML = "";

    let totalAmount = 0;

    expenses.forEach(function(expense,index){

        totalAmount += expense.amount;

        const div = document.createElement("div");

        div.classList.add("expense");

        div.innerHTML = `

            <h3>${expense.name}</h3>

            <p><strong>Amount:</strong> Rs.${expense.amount}</p>

            <p><strong>Category:</strong> ${expense.category}</p>

            <button class="delete">
                Delete
            </button>

        `;

        const deleteButton =
        div.querySelector(".delete");

        deleteButton.addEventListener("click",function(){

            expenses.splice(index,1);

            localStorage.setItem(
                "expenses",
                JSON.stringify(expenses)
            );

            renderExpenses();

        });

        expenseList.appendChild(div);

    });

    total.textContent = totalAmount;

}

// ===========================
// Form Submission
// ===========================

form.addEventListener("submit",function(event){

    event.preventDefault();

    const name = expenseName.value.trim();

    const expenseAmount = Number(amount.value);

    const expenseCategory = category.value;

    if(name === "" || expenseAmount <= 0){

        alert("Please enter valid data.");

        return;

    }

    const expense = {

        name:name,

        amount:expenseAmount,

        category:expenseCategory

    };

    expenses.push(expense);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    renderExpenses();

    form.reset();

});

// ===========================
// Initial Render
// ===========================

renderExpenses();