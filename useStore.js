import { create } from 'zustand'

//importing icons for each pricing plan
import arcadeIcon from './src/assets/icon-arcade.svg';
import proIcon from './src/assets/icon-pro.svg';
import advancedIcon from './src/assets/icon-advanced.svg';

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
          price: 9,
          icon: arcadeIcon,
        },
        {
          name: "advanced",
          price: 12,
          icon: advancedIcon,
        },
        {
          name: "pro",
          price: 15,
          icon: proIcon,
        }
      ],
    },
    {
      type: "yearly",
      plans: [
        {
          name: "arcade",
          price: 90,
          icon: arcadeIcon,
        },
        {
          name: "advanced",
          price: 120,
          icon: advancedIcon,
        },
        {
          name: "pro",
          price: 150,
          icon: proIcon,
        }
      ],
    },
  ],

  //pricing model
  selectedModel: "monthly",
  changeSelectedModel: () => set((state) => ({ selectedModel: state.selectedModel === "monthly" ? "yearly" : "monthly" })),

  //selected plan
  selectedPlan: "",
  changeSelectedPlan: (value) => set({ selectedPlan: value }),

  addons: [
    {
      id: 1,
      name: "Online service",
      description: "Access to multiplayer games",
      checked: false,
      pricing: [
        {
          type: "yearly",
          price: 10,
        },
        {
          type: "monthly",
          price: 1,
        }
      ]
    },
    {
      id: 2,
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      checked: false,
      pricing: [
        {
          type: "yearly",
          price: 20,
        },
        {
          type: "monthly",
          price: 2,
        }
      ]
    },
    {
      id: 3,
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      checked: false,
      pricing: [
        {
          type: "yearly",
          price: 20,
        },
        {
          type: "monthly",
          price: 2,
        }
      ]
    },
  ],

  checkAddon: (id) => set((state) => ({
    addons: state.addons.map((addon) =>
      addon.id === id ? { ...addon, checked: !addon.checked } : addon
    )
  })),

  //finishing up
  checkedAddons: [],
  saveCheckedAddons: (addons) => set({ checkedAddons: addons }),


  //remove all values
  removeInfo: () => set({
    name: null,
    mail: null,
    number: null,
    step: 1
  }),

}))