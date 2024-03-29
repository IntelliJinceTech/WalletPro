import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext/authContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ModalProvider } from './context/ModalContext/ModalContext'
import { EditingModeProvider } from './context/EditingModeContext/EditingModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // <GoogleOAuthProvider clientId="16726005967-ahkh53ae5hqckoreqtavf712t7gb5kf3.apps.googleusercontent.com"> */}
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <EditingModeProvider>
            <App />
          </EditingModeProvider>
        </ModalProvider>
      </AuthProvider>
      {/* // </GoogleOAuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
)
