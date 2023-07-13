import { create } from "zustand";

interface AuthCredential {
  email: string;
  name: string;
  token: string;
}

interface AuthStore {
  profile: AuthCredential;
  setCredential: (value: AuthCredential) => void;
  sendLogout: () => void;
}

const useAuth = create<AuthStore>((set) => ({
  profile: JSON.parse(localStorage.getItem("_profile") as string) ?? {
    email: "",
    name: "",
    token: "",
  },
  setCredential: (value: AuthCredential) => {
    localStorage.setItem("_profile", JSON.stringify(value));
    set({ profile: JSON.parse(localStorage.getItem("_profile") as string) });
  },
  sendLogout: () => {
    localStorage.removeItem("_profile");
    set({
      profile: {
        email: "",
        name: "",
        token: "",
      },
    });
  },
}));

export default useAuth;
