/** Expenses reducer default state */
const expensesReducerDefaultState = [];

/** Specifies how the application's state changes in response to actions sent
 * to the store. Remember that actions only describe the fact that something
 * happened, but don't describe how the application's state changes.
 */
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;
      });
    case 'SET_EXPENSES':
      return action.expenses;
    default:
      return state;
  }
};
