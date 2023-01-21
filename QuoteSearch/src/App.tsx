import { useState } from 'react'

export function App() {
  const [inputQuote, setInputQuote] = useState("");

  function submit() {
    console.log("submitted");
    //TODO: add API request
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={submit}>
          <input value={inputQuote} onChange={e => setInputQuote(e.target.value)} placeholder='Albert Einstein' type="text"/>
        </form>
      </div>
    </div>
  )
}
