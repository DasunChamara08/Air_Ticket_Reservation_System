// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './main.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import React from "react";

// import ReactDOM from "react-dom/client";
// import App from "./App";
// import './main.css'
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


// index.js or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './main.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
