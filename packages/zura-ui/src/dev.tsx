import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { Main } from './Main'
import { RouterPreview } from './dev/RouterPreview'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterPreview />
  </React.StrictMode>
)
