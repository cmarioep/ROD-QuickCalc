import create from 'zustand';


export const useActiveModuleStore = create((set) => ({
    activeModule: 'Hola, mundo!',
    setActiveModule: (activeModule) => set({ activeModule }),
}));