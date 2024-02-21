import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { userStore } from './app/Dave-Gray/store/userStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Provider store={userStore}>
      <App />
    </Provider>
  </React.Fragment>,
)