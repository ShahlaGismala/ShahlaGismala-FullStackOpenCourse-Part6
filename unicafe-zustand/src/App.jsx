import { useState } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'

const App = () => {
  const [filter, setFilter] = useState('')

  return (
    <div>
      <Filter onChange={setFilter} />
      <h2>Anecdotes</h2>
      <AnecdoteList filter={filter} />
      <AnecdoteForm />
    </div>
  )
}

export default App