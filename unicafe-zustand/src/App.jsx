import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import useAnecdoteStore from './store'
import { getAll } from './services/anecdotes'

const App = () => {
  const setAnecdotes = useAnecdoteStore((state) => state.setAnecdotes)

  useEffect(() => {
    getAll().then((anecdotes) => setAnecdotes(anecdotes))
  }, [setAnecdotes])

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App