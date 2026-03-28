import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TabApp from './table.jsx'
import UserApp from './UserList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TabApp />
    <UserApp />
  </StrictMode>,
)
