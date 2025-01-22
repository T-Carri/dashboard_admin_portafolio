/* import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './config/auth';
import React, { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const authenticated = await isAuthenticated();
        console.log(authenticated);
        setLoggedIn(authenticated);
      } catch (error) {
        console.error('Error while checking authentication:', error);
        setLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    // Initial check
    checkAuthentication();

    // Set interval to check every hour (3600000 milliseconds)
    const intervalId = setInterval(checkAuthentication, 3600000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  console.log('Tell me who you are:', isLoggedIn);

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute; */