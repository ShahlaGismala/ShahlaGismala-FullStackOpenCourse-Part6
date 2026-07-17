import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import AnecdoteList from './AnecdoteList'
import useAnecdoteStore from '../store'

describe('<AnecdoteList />', () => {
  beforeEach(() => {
    useAnecdoteStore.setState({
      anecdotes: [
        { id: '1', content: 'few votes', votes: 1 },
        { id: '2', content: 'most votes', votes: 10 },
        { id: '3', content: 'no votes', votes: 0 },
      ],
    })
  })

  it('renders anecdotes sorted by votes, descending', () => {
    render(<AnecdoteList filter="" />)

    const contents = screen
      .getAllByTestId('anecdote-content')
      .map((el) => el.textContent)

    expect(contents).toEqual(['most votes', 'few votes', 'no votes'])
  })
})
