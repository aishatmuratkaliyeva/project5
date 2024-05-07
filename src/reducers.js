const initialState = {
    expenses: [],
    loading: false,
    filter: '',
    sortBy: ''
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE_START':
        return {
          ...state,
          loading: true
        };
      case 'ADD_EXPENSE_SUCCESS':
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
          loading: false
        };
      case 'DELETE_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };
      case 'SET_SORT':
        return {
          ...state,
          sortBy: action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  