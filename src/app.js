import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './store/selectors/expenses'
import {addExpense} from './store/actions/expenses'
import {setTextFilter} from './store/actions/filters'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();
console.log(store.getState())

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));
//store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))