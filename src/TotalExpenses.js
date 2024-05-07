import React from 'react';
import { connect } from 'react-redux';

function TotalExpenses({ total }) {
  return (
    <div className="total-expenses">
      <h2>Total Expenses: {total}$</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  total: state.expenses.reduce((acc, expense) => acc + Number(expense.amount), 0)
});



export default connect(mapStateToProps)(TotalExpenses);
