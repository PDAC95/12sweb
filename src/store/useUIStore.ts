import { create } from 'zustand';

interface UIState {
  // Modals
  isCreateBetModalOpen: boolean;
  isWalletModalOpen: boolean;
  
  // Notifications
  notifications: Notification[];
  
  // Loading states
  globalLoading: boolean;
  loadingMessage: string;
  
  // Actions
  openCreateBetModal: () => void;
  closeCreateBetModal: () => void;
  openWalletModal: () => void;
  closeWalletModal: () => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  setGlobalLoading: (loading: boolean, message?: string) => void;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

export const useUIStore = create<UIState>((set) => ({
  // Modal states
  isCreateBetModalOpen: false,
  isWalletModalOpen: false,
  
  // Notifications
  notifications: [],
  
  // Loading
  globalLoading: false,
  loadingMessage: '',

  // Modal actions
  openCreateBetModal: () => set({ isCreateBetModalOpen: true }),
  closeCreateBetModal: () => set({ isCreateBetModalOpen: false }),
  openWalletModal: () => set({ isWalletModalOpen: true }),
  closeWalletModal: () => set({ isWalletModalOpen: false }),

  // Notification actions
  addNotification: (notification) => {
    const id = Date.now().toString();
    const newNotification = { ...notification, id };
    
    set((state) => ({
      notifications: [...state.notifications, newNotification],
    }));

    // Auto remove after duration
    if (notification.duration !== 0) {
      setTimeout(() => {
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        }));
      }, notification.duration || 5000);
    }
  },

  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },

  // Loading actions
  setGlobalLoading: (loading, message = '') => {
    set({ globalLoading: loading, loadingMessage: message });
  },
}));