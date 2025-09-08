import { create } from 'zustand';
import { User, Wallet, Reputation } from '@/types';
import apiClient from '@/services/api/client';

interface UserState {
  user: User | null;
  wallet: Wallet | null;
  reputation: Reputation | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchUser: (userId: string) => Promise<void>;
  updateWallet: (wallet: Partial<Wallet>) => void;
  reset: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  wallet: null,
  reputation: null,
  isLoading: false,
  error: null,

  fetchUser: async (userId: string) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await apiClient.get(`/users/${userId}`);
      set({
        user: data,
        wallet: data.wallet,
        reputation: data.reputation,
        isLoading: false,
      });
    } catch (_error) {
      set({ 
        error: 'Failed to fetch user data', 
        isLoading: false 
      });
    }
  },

  updateWallet: (wallet) => {
    set((state) => ({
      wallet: state.wallet ? { ...state.wallet, ...wallet } : null
    }));
  },

  reset: () => {
    set({
      user: null,
      wallet: null,
      reputation: null,
      isLoading: false,
      error: null,
    });
  },
}));