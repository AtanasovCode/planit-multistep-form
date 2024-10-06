import { create } from 'zustand'

export const useStore = create((set) => ({
  //route
  currentRoute: "/multi-step/step-one",
  changeCurrentRoute: (route) => set({ currentRoute: route }),

  //step states
  step: 1,
  changeStep: (number) => set({ step: number }),
  increaseStep: () => set((state) => ({ step: state.step + 1 })),
  decreaseStep: () => set((state) => ({ step: state.step - 1 })),

  //personal info
  name: "",
  setName: (name) => set({ name }),
  mail: "",
  setMail: (mail) => set({ mail }),
  number: "",
  setNumber: (number) => set({ number }),

  //pricing
  monthly: {"arcade": "9", "advanced": "12", "pro": "15"},
  yearly: {"arcade": "90", "advanced": "120", "pro": "150"},
  selectedModel: "monthly",
  changeSelectedModel: () => set((state) => ({ selectedModel: state.selectedModel === "monthly" ? "yearly" : "monthly" })),

  //remove all state
  removeInfo: () => set({ name: null, mail: null, number: null, step: 1 }),
}))