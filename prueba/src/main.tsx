import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Button from './components/Button.tsx'
import Encabezado1 from './components/Encabezado1.tsx'
import Image from './components/Image.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Encabezado1/>
    <Image/>
    <Button/>
    <Button/>
    <Button/>
    <Button/>
  </StrictMode>,
)
