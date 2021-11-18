import React from 'react';
import Index from '../pages/index'
import {Route, BrowserRouter, Router} from "react-router-dom";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Index />} />
            </Router>
        </BrowserRouter>
    )
}

export default Rotas