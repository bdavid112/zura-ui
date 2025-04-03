import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { Button } from './components/Button/Button'
import { Main } from './main'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main></Main>
  </React.StrictMode>
)
