import { useRef } from 'react'
import useAnecdoteStore from '../store'
import { createNew } from '../services/anecdotes'

const AnecdoteForm = () => {
  const createAnecdote = useAnecdoteStore((state) => state.createAnecdote)
  const contentRef = useRef()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = contentRef.current.value
    contentRef.current.value = ''
    const newAnecdote = await createNew(content)
    createAnecdote(newAnecdote)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" ref={contentRef} />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm