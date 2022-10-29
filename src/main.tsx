import './style.scss'
import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
const App = lazy(() => import('./App'))
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>

  </React.StrictMode>
)
