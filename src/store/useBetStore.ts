import { create } from 'zustand';
import { Bet } from '@/types';
import apiClient from '@/services/api/client';

interface BetState {
  activeBets: Bet[];
  pastBets: Bet[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchActiveBets: () => Promise<void>;
  fetchPastBets: () => Promise<void>;
  createBet: (bet: Partial<Bet>) => Promise<void>;
  updateBet: (betId: string, updates: Partial<Bet>) => void;
}

export const useBetStore = create<BetState>((set, get) => ({
  activeBets: [],
  pastBets: [],
  isLoading: false,
  error: null,

  fetchActiveBets: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await apiClient.get('/bets/active');
      set({ activeBets: data, isLoading: false });
    } catch (_error) {
      set({ 
        error: 'Failed to fetch active bets', 
        isLoading: false 
      });
    }
  },

  fetchPastBets: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await apiClient.get('/bets/past');
      set({ pastBets: data, isLoading: false });
    } catch (_error) {
      set({ 
        error: 'Failed to fetch past bets', 
        isLoading: false 
      });
    }
  },

  createBet: async (bet) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await apiClient.post('/bets', bet);
      set((state) => ({
        activeBets: [...state.activeBets, data],
        isLoading: false,
      }));
    } catch (_error) {
      set({ 
        error: 'Failed to create bet', 
        isLoading: false 
      });
      throw _error;
    }
  },

  updateBet: (betId, updates) => {
    set((state) => ({
      activeBets: state.activeBets.map((bet) =>
        bet.id === betId ? { ...bet, ...updates } : bet
      ),
    }));
  },
}));