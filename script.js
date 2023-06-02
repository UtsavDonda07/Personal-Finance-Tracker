let expenses = [];

class Expense {
    constructor(title, amount, date) {
        this.title = title;
        this.amount = amount;
        this.date = date;
    }
}

function addExpense(title, amount, date) {
    let expense = new Expense(title, amount, date);
    expenses.push(expense);
    display();
}

function display() {
    let tableBody = document.getElementById("tbody");
    tableBody.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        let expense = expenses[i];
        // add space between delete and edit buttons

        let row = document.createElement("tr");
        let titleCell = document.createElement("td");
        let amountCell = document.createElement("td");
        let dateCell = document.createElement("td");
        let actionCell = document.createElement("td");
        let editButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        titleCell.textContent = expense.title;
        amountCell.textContent = expense.amount;
        dateCell.textContent = expense.date;


        editButton.textContent = "Edit";
        editButton.className = "btn btn-primary btn-sm";
        editButton.onclick = function () {
            editExpense(i);
        };


        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.onclick = function () {
            deleteExpense(i);
        };

        editButton.style.marginRight = "20px";

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(titleCell);
        row.appendChild(amountCell);
        row.appendChild(dateCell);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    }
}

function submit() {
    let titleInput = document.getElementById("titleInput");
    let amountInput = document.getElementById("amountInput");
    let dateInput = document.getElementById("dateInput");

    let title = titleInput.value;
    let amount = amountInput.value;
    let date = dateInput.value;

    addExpense(title, amount, date);

    // Clear input values
    titleInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
}

function editExpense(index) {
    let expense = expenses[index];
    let newTitle = prompt("Enter a new title:", expense.title);
    let newAmount = prompt("Enter a new amount:", expense.amount);
    let newDate = prompt("Enter a new date:", expense.date);

    // Update the expense object
    expense.title = newTitle;
    expense.amount = newAmount;
    expense.date = newDate;

    display();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    display();
}

display();
