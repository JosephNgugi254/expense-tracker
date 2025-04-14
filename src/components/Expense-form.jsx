import React from "react";

function ExpenseForm({ expense, handleInputChange, handleSubmit }) {
     return (
        <div id="form-div">
            <form id="expense-form" onSubmit={handleSubmit}>
                <h3>Add Expense</h3>
                <p>Enter your expense details below</p>

                <input type="text"
                    id="name"
                    name="name"
                    placeholder="Enter expense name"
                    value={expense.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Enter expense description"
                    value={expense.description}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Enter expense category"
                    value={expense.category}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Enter amount"
                    value={expense.amount}
                    onChange={handleInputChange}
                    step="0.01"
                />
                <input
                    type="date"
                    id="day"
                    name="day"
                    placeholder="Enter date"
                    value={expense.day}
                    onChange={handleInputChange}
                />
                <button type="submit" id="button">Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm;