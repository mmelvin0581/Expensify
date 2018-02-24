import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

/** Creates a Redux store that holds the complete state tree of your app.
 There should only be a single store in your app.

 createStore(reducer, [preloadedState], [enhancer])

 1. reducer (function): A reducing function that returns the next state tree,
    given the current state tree and an action to handle.
 2. [preloadedState] (any): The initial state. You may optionally specify it
    to hydrate the state from the server in universal apps, or to restore a
    previously serialized user session. If you produced reducer with combineReducers,
    this must be a plain object with the same shape as the keys passed to it. Otherwise,
    you are free to pass anything that your reducer can understand.
 3. [enhancer] (Function): The store enhancer. You may optionally specify it to enhance
    the store with third-party capabilities such as middleware, time travel, persistence,
    etc. The only store enhancer that ships with Redux is applyMiddleware().

 Returns (Store): An object that holds the complete state of your app. The only way to
 change its state is by dispatching actions. You may also subscribe to the changes to its
 state to update the UI. */

export default () => {
  const store = createStore(combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }));

  return store;
};
