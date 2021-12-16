import create from 'zustand';

export const useStore = create(set => ({
    selectedStudy: null,
    setSelectedStudy: study => set(state => ({selectedStudy: study})),
    selectedSimulation: null,
    setSelectedSimulation: simulation =>
        set(state => ({selectedSimulation: simulation})),
}));
