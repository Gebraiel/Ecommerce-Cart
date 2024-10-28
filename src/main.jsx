import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import large1 from './assets/image-product-1.jpg';

import Lightbox from './components/Lightbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='relative'>
      <App />
      <Lightbox image={large1}/>
    </div>
  </StrictMode>,
)
