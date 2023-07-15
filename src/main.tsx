import './index.css'
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'

import { GlobalStyles } from '@/styles/_boilerplate.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>
)
