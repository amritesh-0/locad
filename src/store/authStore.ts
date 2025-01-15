import { create } from 'zustand';
import { auth } from '../lib/firebase';

interface AuthState {
  user: any | null;
  userType: 'influencer' | 'business' | null;
  setUser: (user: any) => void;
  setUserType: (type: 'influencer' | 'business' | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  userType: null,
  setUser: (user) => set({ user }),
  setUserType: (type) => set({ userType: type }),
}));