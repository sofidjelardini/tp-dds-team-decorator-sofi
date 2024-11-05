import { create } from 'zustand';

interface DashboardStore {
    isMinimized: boolean;
    toggle: () => void;
}

export const useDashboard = create<DashboardStore>(set => ({
    isMinimized: false,
    toggle: () => set(state => ({ isMinimized: !state.isMinimized }))
}));
