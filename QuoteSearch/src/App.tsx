import { useEffect, useState } from 'react'

export function App() {
  const [inputQuote, setInputQuote] = useState("");
  const [quotes, setQuotes] = useState("");
  const [randQuote, setRandQuote] = useState("");

  useEffect(() => {
    getRandom();
  }, []);

  function submit() {
    console.log("submitted");
    getRandom();
    getSearchResults();
  }

  function getRandom() {
    fetch("https://usu-quotes-mimic.vercel.app/api/random")
    .then(r => r.json())
    .then(quote => setRandQuote(quote));
  }

  function getSearchResults() {
    let queryInput = inputQuote.replace(" ", "+");
    let query = "https://usu-quotes-mimic.vercel.app/api/search?query=" + queryInput;

    //TODO: doesn't seem to work
    fetch(query)
    .then(r => r.json())
    .then(quotes => setQuotes(quotes));
  }

  return (
    <div className="App">
      <div className="Submit">
        <header>Quote Search</header>
        <form onSubmit={submit}>
          <input value={inputQuote} onChange={e => setInputQuote(e.target.value)} placeholder='Albert Einstein' type="text"/>
        </form>
      </div>

      <div className='Random'>
        <p className='quote'>{randQuote.content}</p>
        <p>- {randQuote.author}</p>
      </div>

      <div className="Results">
      </div>
    </div>
  )
}
