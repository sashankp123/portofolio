import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PrelineInit from './components/PrelineInit'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrelineInit />
    <App />
  </StrictMode>,
)
