const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = () =>
  fetch(baseUrl).then((res) => res.json())

export const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
  })
  return response.json()
}