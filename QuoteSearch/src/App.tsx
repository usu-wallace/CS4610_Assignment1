import { useEffect, useState } from 'react'

export function App() {
  const [inputQuote, setInputQuote] = useState("");
  const [quotes, setQuotes] = useState("");
  const [randQuote, setRandQuote] = useState("");

  useEffect(() => {
    getRandom();
  }, []);

  const submit = e => {
    e.preventDefault();
    console.log("submitted");
    getRandom();
    getSearchResults();
  }

  async function getRandom() {
    const randQuote = await fetch("https://usu-quotes-mimic.vercel.app/api/random")
    //console.log(await randQuote.json());
    setRandQuote(await randQuote.json());
  }

  async function getSearchResults() {
    let query = "https://usu-quotes-mimic.vercel.app/api/search?query=" + inputQuote;

    console.log(query);
    //TODO: doesn't seem to work
    const quotes = await fetch(query)
    console.log(await quotes.json());
    //setQuotes(await quotes.json());
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
