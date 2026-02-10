import React, { createContext, useContext, useMemo, useState } from "react";
import { authStorage } from "../services/authStorage";

type User = { email: string; name?: string };

type AuthState = {
  user: User | null;
  isAuthed: boolean;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => authStorage.get()?.user ?? null);

  const value = useMemo<AuthState>(() => {
    return {
      user,
      isAuthed: !!user,

      login: (email: string) => {
        const session = { user: { email }, token: "demo-token" };
        authStorage.set(session);
        setUser(session.user);
      },

      register: (name: string, email: string) => {
        const session = { user: { name, email }, token: "demo-token" };
        authStorage.set(session);
        setUser(session.user);
      },

      logout: () => {
        authStorage.clear();
        setUser(null);
      },
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
