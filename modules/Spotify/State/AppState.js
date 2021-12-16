import create from 'zustand';

export const useStore = create(set => ({
    study: null,
    setStudy: study => set(state => ({study})),
    simulation: null,
    setSimulation: simulation => set(state => ({simulation})),
}));
