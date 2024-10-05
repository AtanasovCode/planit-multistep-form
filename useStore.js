import { create } from 'zustand'

export const useStore = create((set) => ({
  //step states
  step: 1,
  changeStep: (number) => set({ step: number }),
  increaseStep: () => set((state) => ({ step: state.step + 1 })),
  decreaseStep: () => set((state) => ({ step: state.step - 1 })),

  //personal info
  name: null,
  setName: (name) => set({ name }),
  mail: null,
  setMail: (mail) => set({ mail }),
  number: null,
  setNumber: (number) => set({ number }),

  //remove all state
  removeInfo: () => set({ name: null, mail: null, number: null, step: 1 }),
}))