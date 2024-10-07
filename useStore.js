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
  name: "John Doe",
  setName: (name) => set({ name }),
  mail: "doe@mail.com",
  setMail: (mail) => set({ mail }),
  number: "124556",
  setNumber: (number) => set({ number }),

  //error handling
  nameErr: false,
  setNameErr: (value) => set({ nameErr: value }),
  numberErr: false,
  setNumberErr: (value) => set({ numberErr: value }),
  mailErr: false,
  setMailErr: (value) => set({ mailErr: value }),

  //input validity
  isInputValid: false,
  setIsInputValid: (value) => set({ isInputValid: value }),

  //pricing
  pricing: [
    {
      type: "monthly",
      plans: [
        {
          name: "arcade",
          price: "9",
        },
        {
          name: "advanced",
          price: "12"
        },
        {
          name: "pro",
          price: "15",
        }
      ],
    },
    {
      type: "yearly",
      plans: [
        {
          name: "arcade",
          price: "90",
        },
        {
          name: "advanced",
          price: "120"
        },
        {
          name: "pro",
          price: "150",
        }
      ],
    },
  ],

  //pricing model
  selectedModel: "monthly",
  changeSelectedModel: () => set((state) => ({ selectedModel: state.selectedModel === "monthly" ? "yearly" : "monthly" })),

  //selected plan
  selectedPlan: "arcade",
  changeSelectedPlan: (value) => set({ selectedPlan: value }),



  //remove all values
  removeInfo: () => set({
    name: null,
    mail: null,
    number: null,
    step: 1
  }),

}))