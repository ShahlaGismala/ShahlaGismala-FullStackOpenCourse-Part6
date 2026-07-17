import { useRef } from 'react'
import useAnecdoteStore from '../store'
import useNotificationStore from '../notificationStore'
import { createNew } from '../services/anecdotes'

const AnecdoteForm = () => {
  const createAnecdote = useAnecdoteStore((state) => state.createAnecdote)
  const setNotification = useNotificationStore((state) => state.setNotification)
  const contentRef = useRef()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = contentRef.current.value
    contentRef.current.value = ''
    const newAnecdote = await createNew(content)
    createAnecdote(newAnecdote)
    setNotification(`You created '${content}'`, 5)
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