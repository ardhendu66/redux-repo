import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './app/RTK_Query/api/apiSlice.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.Fragment>,
)


// import { Provider } from 'react-redux'
// import { store } from './app/blog-app/features/store.js'
// import { fetchUsers } from './app/Redux/features/async-thunk/userSlice.js'
// store.dispatch(fetchUsers)
{/* <Provider store={store}>
  <App />
</Provider> */}