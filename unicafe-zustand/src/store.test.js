import { describe, it, expect, vi, beforeEach } from 'vitest'
import useAnecdoteStore from './store'
import * as anecdoteService from './services/anecdotes'

describe('anecdote store', () => {
  beforeEach(() => {
    useAnecdoteStore.setState({ anecdotes: [] })
  })

  it('initializes state with the anecdotes returned by the backend', async () => {
    const mockAnecdotes = [
      { id: '1', content: 'first anecdote', votes: 3 },
      { id: '2', content: 'second anecdote', votes: 5 },
    ]

    vi.spyOn(anecdoteService, 'getAll').mockResolvedValue(mockAnecdotes)

    const fetched = await anecdoteService.getAll()
    useAnecdoteStore.getState().setAnecdotes(fetched)

    expect(useAnecdoteStore.getState().anecdotes).toEqual(mockAnecdotes)
  })
})