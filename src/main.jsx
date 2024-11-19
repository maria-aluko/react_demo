import { StrictMode } from 'react' // this is with a capital letter => it's a component
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// a component will be written as an element, with self-closing tags => <something />
// a variable will be written as {something}
