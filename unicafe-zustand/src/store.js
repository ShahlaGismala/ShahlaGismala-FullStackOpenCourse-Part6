import { create } from 'zustand'

const useAnecdoteStore = create((set) => ({
  anecdotes: [],
  setAnecdotes: (anecdotes) => set({ anecdotes }),
  vote: (id) =>
    set((state) => ({
      anecdotes: state.anecdotes.map((anecdote) =>
        anecdote.id === id
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      ),
    })),
  createAnecdote: (anecdote) =>
    set((state) => ({
        anecdotes: [...state.anecdotes, anecdote],
  })),
}))

export default useAnecdoteStore