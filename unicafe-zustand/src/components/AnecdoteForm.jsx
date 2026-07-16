import { useRef } from 'react'
import useAnecdoteStore from '../store'

const AnecdoteForm = () => {
  const createAnecdote = useAnecdoteStore((state) => state.createAnecdote)
  const contentRef = useRef()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = contentRef.current.value
    contentRef.current.value = ''
    createAnecdote(content)
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