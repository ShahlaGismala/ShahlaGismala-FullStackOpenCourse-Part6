import userEvent from '@testing-library/user-event'
import * as anecdoteService from '../services/anecdotes'
import { vi } from 'vitest'

it('clicking vote increases the anecdote votes by one', async () => {
  useAnecdoteStore.setState({
    anecdotes: [{ id: '1', content: 'vote me', votes: 0 }],
  })

  vi.spyOn(anecdoteService, 'update').mockResolvedValue({
    id: '1',
    content: 'vote me',
    votes: 1,
  })

  const user = userEvent.setup()
  render(<AnecdoteList filter="" />)

  const voteButton = screen.getByText('vote')
  await user.click(voteButton)

  expect(useAnecdoteStore.getState().anecdotes[0].votes).toBe(1)
})