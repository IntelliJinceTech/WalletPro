import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext/authContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ModalProvider } from './context/ModalContext/ModalContext'
import { RoutingProvider } from './context/RoutingContext/routingContext.jsx'
import { EditingModeProvider } from './context/EditingModeContext/EditingModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RoutingProvider>
    <GoogleOAuthProvider clientId="16726005967-ahkh53ae5hqckoreqtavf712t7gb5kf3.apps.googleusercontent.com">
      <AuthProvider>
        <ModalProvider>
          <EditingModeProvider>
            <App />
          </EditingModeProvider>
        </ModalProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </RoutingProvider>
  // </React.StrictMode>
)
