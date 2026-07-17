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

  it('renders only anecdotes that match the filter', () => {
        render(<AnecdoteList filter="most" />)

        const contents = screen
            .getAllByTestId('anecdote-content')
            .map((el) => el.textContent)

        expect(contents).toEqual(['most votes'])
   })

    it('renders nothing when no anecdote matches the filter', () => {
    render(<AnecdoteList filter="nonexistent" />)

    const contents = screen.queryAllByTestId('anecdote-content')

    expect(contents).toHaveLength(0)
    })
})
