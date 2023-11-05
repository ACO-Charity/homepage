import {create, StoreApi, UseBoundStore} from 'zustand';

interface SectionStore {
    currentSection: string;
    setCurrentSection: (section: string) => void;
}

export const useSection: UseBoundStore<StoreApi<SectionStore>> = create((set) => {
    return {
        currentSection: '',
        setCurrentSection: (section: string) => set(() => ({currentSection: section}))
    };
});