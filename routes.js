import Simulations from './modules/Simulations';
import Models from './modules/Models';
import React from 'react';
import {Route, Routes} from 'react-router-native';

export const AppRoutes = () => (
    <Routes>
        <Route path="/simulations" element={<Simulations />} />
        <Route path="/models" element={<Models />} />
    </Routes>
);
