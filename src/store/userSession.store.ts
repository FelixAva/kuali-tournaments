import { create } from 'zustand';

const useUserSession = create(( set ) => ({
  userSession: false,
  signIn: () => set(() => ({ userSession: true })),
  signOut: () => set(() => ({ userSession: false }))
}));
