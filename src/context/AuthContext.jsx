import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("essenza-user") || "null"),
  );

  function login(userData) {
    localStorage.setItem("essenza-user", JSON.stringify(userData));
    setUser(userData);
  }

  function logout() {
    localStorage.removeItem("essenza-user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}