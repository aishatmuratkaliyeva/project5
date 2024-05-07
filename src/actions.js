export const addExpense = (name, amount) => {
  return dispatch => {
    dispatch({
      type: 'ADD_EXPENSE_START'
    });

    setTimeout(() => {
      dispatch({
        type: 'ADD_EXPENSE_SUCCESS',
        payload: {
          id: Math.random(),
          name,
          amount: parseFloat(amount),
          createdAt: Date.now()
        }
      });
    }, 1000);
  };
};

export const deleteExpense = id => {
  return {
    type: 'DELETE_EXPENSE',
    payload: {
      id
    }
  };
};

export const setFilter = filter => ({
  type: 'SET_FILTER',
  payload: filter
});

export const setSort = sortBy => ({
  type: 'SET_SORT',
  payload: sortBy
});

  
  
  
  
  
  