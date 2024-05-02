"use client"
import { accessTokenCookieName } from '@/constants';
import { deleteCookie, setCookie } from 'cookies-next';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the shape of your context data
interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  refreshTokens: () => void;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  refreshToken: null,
  setAccessToken: () => {},
  setRefreshToken: () => {},
  refreshTokens: () => {},
  logout: () => {}
});

// Function to retrieve tokens from session storage
export const getTokenFromSessionStorage = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    const tokenData = localStorage.getItem(key);
    return tokenData ? JSON.parse(tokenData) : null;
  }
  return null;
};

// Function to store tokens in session storage
export const setTokenInSessionStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(getTokenFromSessionStorage('accessToken'));
  const [refreshToken, setRefreshToken] = useState<string | null>(getTokenFromSessionStorage('refreshToken'));

 
  const publicRoutes = ["/", "/top"]
  // Function to refresh tokens
  const refreshTokens = async () => {
    
    if(!refreshToken) {
      if (typeof window !== 'undefined' && !publicRoutes.includes(window.location.pathname)) {
        window.location.href = '/';
      }
      return;
    };
    const response = await fetch(`/api/auth/refresh?token=${refreshToken}`);
    const data = await response.json();
    if(data.error !== 0) {
      return;
    }
    const newAccessToken = data?.credential?.accessToken?.token;
    const newRefreshToken = data?.credential?.refreshToken?.token;

    await setCookie(accessTokenCookieName, newAccessToken);
    await setAccessToken(newAccessToken);
    await setRefreshToken(newRefreshToken);
    await setTokenInSessionStorage('accessToken', newAccessToken);
    await setTokenInSessionStorage('refreshToken', newRefreshToken);
    return newAccessToken;
  };

  // Effect to handle token refresh logic
  useEffect(() => {
    const fiveMinutes = 5 * 60 * 1000;
    const interval = typeof window !== 'undefined' ? setInterval(() => {
      const lastRefreshTime = getTokenFromSessionStorage('lastRefreshTime');
      const currentAccessToken = getTokenFromSessionStorage('accessToken');
      const currentTime = new Date().getTime();
      if (!currentAccessToken || !lastRefreshTime || currentTime - parseInt(lastRefreshTime) > fiveMinutes) {
        refreshTokens();
        setTokenInSessionStorage('lastRefreshTime', currentTime.toString());
      }
    }, 3000) : null;

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const logout = () => {
    deleteCookie(accessTokenCookieName);
    setTokenInSessionStorage('accessToken', null);
    setTokenInSessionStorage('refreshToken', null);

    setAccessToken(null);
    setRefreshToken(null);
  }

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, setAccessToken, setRefreshToken, refreshTokens, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);