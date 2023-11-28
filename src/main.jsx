import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App'
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import {register  as registerSwiper} from 'swiper/element/bundle'

registerSwiper();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
