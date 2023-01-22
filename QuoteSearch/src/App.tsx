import { useEffect, useState } from 'react'

export function App() {
  const [inputQuote, setInputQuote] = useState("");
  const [quotes, setQuotes] = useState("");
  const [randQuote, setRandQuote] = useState("");
  const [submitted, setSubmitted] = useState(Boolean);

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
    const quotes = await fetch(query)
    //console.log(await quotes.json());
    setQuotes(await quotes.json());
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
        {/* 
          Code below only works AFTER being submitted, but it breaks site from being able to be submitted
          Object.keys - turns an object into an array
          map() - runs a function over each part of an array
        */}
        {Object.keys(quotes.results).map((key) => (
            <div>
              <p className='quote'>{(quotes.results[key]['content'])}</p>
              <p>- {(quotes.results[key]['author'])}</p>
            </div>
        ))}
      </div>

    </div>
  )
}
