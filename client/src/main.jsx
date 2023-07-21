import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {GoogleOAuthProvider} from '@react-oauth/google'
import {ModalProvider} from './context/ModalContext/ModalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="16726005967-ahkh53ae5hqckoreqtavf712t7gb5kf3.apps.googleusercontent.com">
      <ModalProvider>
        <App />
      </ModalProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
