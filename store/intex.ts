import { defineStore } from 'pinia';

export interface RootState {}

export const useStore = defineStore('root', {
    state: () => {
        return {} as RootState;
    },
});
