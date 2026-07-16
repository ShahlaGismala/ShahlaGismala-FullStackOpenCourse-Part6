const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = () =>
  fetch(baseUrl).then((res) => res.json())