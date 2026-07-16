import { create } from 'zustand'

const useFeedbackStore = create((set) => ({
  good: 0,
  neutral: 0,
  bad: 0,
  goodClick: () => set((state) => ({ good: state.good + 1 })),
  neutralClick: () => set((state) => ({ neutral: state.neutral + 1 })),
  badClick: () => set((state) => ({ bad: state.bad + 1 })),
}))

export default useFeedbackStore