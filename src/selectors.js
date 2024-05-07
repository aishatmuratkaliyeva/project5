import { createSelector } from 'reselect';

const getExpenses = state => state.expenses;
const getFilter = state => state.filter;
const getSortBy = state => state.sortBy;

export const getFilteredAndSortedExpenses = createSelector(
  [getExpenses, getFilter, getSortBy],
  (expenses, filter, sortBy) => {
    const filteredExpenses = expenses.filter(expense => expense.name.toLowerCase().includes(filter.toLowerCase()));

    if (sortBy === 'asc') {
      return filteredExpenses.sort((a, b) => a.amount - b.amount);
    } else if (sortBy === 'desc') {
      return filteredExpenses.sort((a, b) => b.amount - a.amount);
    }

    return filteredExpenses;
  }
);

