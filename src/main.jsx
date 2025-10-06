import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <App />
      </div>
      <footer>
        <p>This project was coded by <a href="https://github.com/orla-rey" target='blank'>Orla Reynolds</a>, and is <a href="https://github.com/orla-rey/weather-react-2.0.git" target='blank'>open-sourced on GitHub.</a></p>
      </footer>
    </div>
  </StrictMode>
);