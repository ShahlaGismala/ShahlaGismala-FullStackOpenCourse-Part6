import { create } from 'zustand'
import { update } from './services/anecdotes'

const useAnecdoteStore = create((set, get) => ({
  anecdotes: [],
  setAnecdotes: (anecdotes) => set({ anecdotes }),
  vote: async (id) => {
    const anecdotes = get().anecdotes
    const anecdoteToVote = anecdotes.find((a) => a.id === id)
    if (!anecdoteToVote) return

    const updated = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
    const returnedAnecdote = await update(id, updated)

    set((state) => ({
      anecdotes: state.anecdotes.map((anecdote) =>
        anecdote.id === id ? returnedAnecdote : anecdote
      ),
    }))
  },
  createAnecdote: (anecdote) =>
    set((state) => ({
        anecdotes: [...state.anecdotes, anecdote],
  })),
}))

export default useAnecdoteStore