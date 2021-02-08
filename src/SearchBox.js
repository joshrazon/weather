import React, { useState } from 'react'
import './weather.css'

function SearchBox(props) {
  const [input, setInput] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.updateCity(input)
    setInput('')
  }
  return (
    <div>
      <form className="search-box" onSubmit={handleSubmit}>
        <input type="text" value={input} onInput={e => setInput(e.target.value)} placeholder="Enter a city name..." />
      </form>
    </div>
  )
}

export default SearchBox;