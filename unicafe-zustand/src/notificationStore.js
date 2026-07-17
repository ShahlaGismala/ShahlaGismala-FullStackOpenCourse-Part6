import { create } from 'zustand'

let timeoutId = null

const useNotificationStore = create((set) => ({
  message: '',
  setNotification: (message, seconds) => {
    if (timeoutId) clearTimeout(timeoutId)
    set({ message })
    timeoutId = setTimeout(() => {
      set({ message: '' })
    }, seconds * 1000)
  },
}))

export default useNotificationStore