import useAnecdoteStore from '../store'
import useNotificationStore from '../notificationStore'
import { remove } from '../services/anecdotes'

const AnecdoteList = () => {
  const anecdotes = useAnecdoteStore((state) => state.anecdotes)
  const vote = useAnecdoteStore((state) => state.vote)
  const removeAnecdote = useAnecdoteStore((state) => state.removeAnecdote)
  const setNotification = useNotificationStore((state) => state.setNotification)

  const sortedAnecdotes = anecdotes.toSorted((a, b) => b.votes - a.votes)

  const handleVote = (anecdote) => {
    vote(anecdote.id)
    setNotification(`You voted '${anecdote.content}'`, 5)
  }

  const handleDelete = async (anecdote) => {
    await remove(anecdote.id)
    removeAnecdote(anecdote.id)
    setNotification(`You deleted '${anecdote.content}'`, 5)
  }

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div data-testid="anecdote-content">{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
            {anecdote.votes === 0 && (
              <button onClick={() => handleDelete(anecdote)}>delete</button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList