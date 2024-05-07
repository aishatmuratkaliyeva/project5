import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpense } from './actions';

function AddExpenseForm({ dispatch }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addExpense(name, amount));
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default connect()(AddExpenseForm);