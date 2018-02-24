import uuid from 'uuid';

/** Expenses Actions
 *
 * Actions are payloads of information that send data from your
 * application to your store. They are the only source of information
 * for the store. You send them to the store using store.dispatch().
 */

// ADD_EXPENSE
export const addExpense = ({
 description = '', note = '', amount = 0, createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
