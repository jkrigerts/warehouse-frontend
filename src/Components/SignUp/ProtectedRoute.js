import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
  
    useEffect(() => {
      axios
        .get("/user", { withCredentials: true })
        .then(() => {
          setAuthenticated(true);
          console.log("jii ha");
        })
        .catch(() => setAuthenticated(false))
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) return <div>Loading...</div>;
  
    return authenticated ? children : <Navigate to="/login" />;
  }

export default ProtectedRoute;
