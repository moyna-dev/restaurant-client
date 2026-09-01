/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://restaurant-management-server-1.onrender.com/api/v1";
const TOKEN_KEY = "foodhub_token";
const USER_KEY = "foodhub_user";
// LocalStorage থেকে user তথ্য পড়বে
function readStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY)) || null;
  } catch {
    return null;
  }
}
// API request helper
async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong. Please try again."
    );
  }
  return data;
}
// Auth Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);
  // Login/Register এর পর session save করবে
  function saveSession(data) {
    if (data.token) {
      localStorage.setItem(TOKEN_KEY, data.token);
    }
    if (data.user) {
      localStorage.setItem(USER_KEY, JSON.stringify(data.user));
      setUser(data.user);
    }
  }
  // Login
  async function login(credentials) {
    const data = await request("/users/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
    saveSession(data);
    // গুরুত্বপূর্ণ:
    // Login.jsx যেন user.role পেতে পারে
    return data.user;
  }
  // Register
  async function register(details) {
    const data = await request("/users/register", {
      method: "POST",
      body: JSON.stringify(details),
    });
    saveSession(data);
    return data.user;
  }
  // Profile refresh
  async function refreshProfile() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return null;
    }
    const data = await request("/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.user) {
      localStorage.setItem(USER_KEY, JSON.stringify(data.user));
      setUser(data.user);
    }
    return data.user;
  }
  // Logout
  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
  }
  const value = {
    user,
    login,
    register,
    refreshProfile,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
// useAuth hook
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}