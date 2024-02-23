import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/Redux/store/asyncThunkStore.js'
import { fetchUsers } from './app/Redux/features/async-thunk/userSlice.js'

store.dispatch(fetchUsers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
)