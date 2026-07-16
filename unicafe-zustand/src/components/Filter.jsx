const Filter = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter