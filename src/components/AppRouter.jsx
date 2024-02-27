import React from 'react';
import { useSelector } from 'react-redux';
import { privateRoutes, publicRoutes } from '../router';
import {Navigate, Route, Routes} from 'react-router-dom';

const AppRouter = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


    return (
        <Routes>
            {isAuthenticated
                ? (
                    privateRoutes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    ))
                )
                : (
                    publicRoutes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    ))
                )}
            <Route
                path="*"
                element={<Navigate to={isAuthenticated ? '/main_calls_table' : '/login'} />}
            />
        </Routes>
    );
};

export default AppRouter;
