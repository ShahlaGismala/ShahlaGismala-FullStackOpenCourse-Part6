import { useRef } from 'react'
import useAnecdoteStore from './store'

const App = () => {
  const anecdotes = useAnecdoteStore((state) => state.anecdotes)
  const vote = useAnecdoteStore((state) => state.vote)
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
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}

      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" ref={contentRef} />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App