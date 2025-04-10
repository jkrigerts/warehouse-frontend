import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    // Check if user is logged in (e.g., check for token or user state)
    const isAuthenticated = Boolean(localStorage.getItem('auth_token')); // Modify this as per your auth logic

    if (!isAuthenticated) {
        // Redirect if not authenticated
        return <Navigate to="/login" />;
    }

    return element; // Render the protected component if authenticated
};

export default ProtectedRoute;
