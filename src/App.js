import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import TotalExpenses from './TotalExpenses';
import FilterAndSort from './FilterAndSort';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Task 6</h1>
        <AddExpenseForm />
        <FilterAndSort />
        <ExpenseList />
        <TotalExpenses />
      </div>
    </Provider>
  );
}

export default App;
