import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { postStore } from './app/Dave-Gray/store/postStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Provider store={postStore}>
      <App />
    </Provider>
  </React.Fragment>,
)