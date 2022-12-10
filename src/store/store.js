import create from 'zustand'

function countStore(set) {
    return {
        count: 0,
        person : "safe",
        increment: () => set((state) => state.count = state.count + 1),
        decrement: () => set((state) => state.count = state.count - 1),
        changePerson: (person) => set((state) => state.person = person),
    };
}

const useStore = create(countStore)
export default useStore