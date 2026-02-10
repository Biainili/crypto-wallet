type Session = {
  user: { email: string; name?: string };
  token: string; // пока фейковый
};

const KEY = "wallet_session";

export const authStorage = {
  get(): Session | null {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as Session;
    } catch {
      return null;
    }
  },

  set(session: Session) {
    localStorage.setItem(KEY, JSON.stringify(session));
  },

  clear() {
    localStorage.removeItem(KEY);
  },
};
