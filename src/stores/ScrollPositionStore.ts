import {create, StoreApi, UseBoundStore} from 'zustand';

export interface ScrollPositionStore {
    scrollPosY: number;
    setScrollPosition: (newPosition: number) => void;
}

export const useScrollPosition: UseBoundStore<StoreApi<ScrollPositionStore>> = create((set) => {
    return {
        scrollPosY: 0,
        setScrollPosition: (newPosition: number) => set(() => ({scrollPosY: newPosition}))
    };
});