import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from './App';
import Dino from "./router/content/dino";
import Plasma from "./router/content/Plasma";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dino />} />
            <Route path="/Dino" element={<Dino />} />
            <Route path="/plasma" element={< Plasma/>} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

