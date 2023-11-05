import {create} from 'zustand';

export interface ScrollPositionStore {
    scrollPosY: number;
    setScrollPosition: (newPosition: number) => void;
}

export const useScrollPosition = create<ScrollPositionStore>((set) => {
    return {
        scrollPosY: 0,
        setScrollPosition: (newPosition: number) => set(() => ({scrollPosY: newPosition}))
    };
});