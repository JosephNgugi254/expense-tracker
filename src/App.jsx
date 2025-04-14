import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [expense, setExpense] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    day: ''
  });
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: 'Groceries',
      description: 'Weekly supermarket shopping',
      category: 'Food',
      amount: '75.50',
      day: '2025-04-10'
    },
    {
      id: 2,
      name: 'Internet Bill',
      description: 'Monthly broadband service',
      category: 'Utilities',
      amount: '59.99',
      day: '2025-04-05'
    },
    {
      id: 3,
      name: 'Coffee Shop',
      description: 'Morning latte',
      category: 'Dining',
      amount: '4.50',
      day: '2025-04-12'
    },
    {
      id: 4,
      name: 'Gas',
      description: 'Car fuel',
      category: 'Transportation',
      amount: '45.00',
      day: '2025-04-11'
    },
    {
      id: 5,
      name: 'Movie Tickets',
      description: 'Cinema night',
      category: 'Entertainment',
      amount: '30.00',
      day: '2025-04-09'
    }
  ]);
  const [search, setSearch] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.name && expense.amount) {
      const newExpense = {
        id: expenses.length + 1,
        ...expense,
        amount: parseFloat(expense.amount).toFixed(2)
      };
      setExpenses([...expenses, newExpense]);
      setExpense({
        name: '',
        description: '',
        category: '',
        amount: '',
        day: ''
      });
    }
  };

  // Handle search
  useEffect(() => {
    const filtered = expenses.filter(exp =>
      exp.name.toLowerCase().includes(search.toLowerCase()) ||
      exp.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredExpenses(filtered);
  }, [search, expenses]);

  return (
    <>
      <div id="header-div">
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances and life. Record, categorize, and analyze your spending.</p>
      </div>
      <div id="container">
        <div id="form-div">
          <form id="expense-form" onSubmit={handleSubmit}>
            <h3>Add Expense</h3>
            <p>Enter your expense details below</p>

            <input
              type="text"
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

        <div id="search-div">
          <div id="search-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            {/* <input
              type="text"
              id="search-bar"
              name="search"
              placeholder="Search expenses"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            /> */}
          </div>
          <div id="expense-list">
            <table>
              <thead>
                <tr>
                  <th>Expense</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map((exp) => (
                  <tr key={exp.id}>
                    <td>{exp.name}</td>
                    <td>{exp.description}</td>
                    <td>{exp.category}</td>
                    <td>${exp.amount}</td>
                    <td>{exp.day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;