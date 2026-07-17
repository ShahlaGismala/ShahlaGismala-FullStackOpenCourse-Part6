import { useState, useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import useAnecdoteStore from './store'
import { getAll } from './services/anecdotes'

const App = () => {
  const [filter, setFilter] = useState('')
  const setAnecdotes = useAnecdoteStore((state) => state.setAnecdotes)

  useEffect(() => {
    getAll().then((anecdotes) => setAnecdotes(anecdotes))
  }, [setAnecdotes])

  return (
    <div>
      <Filter onChange={setFilter} />
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList filter={filter} />
      <AnecdoteForm />
    </div>
  )
}

export default App