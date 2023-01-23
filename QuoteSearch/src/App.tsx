import { useEffect, useState } from 'react'

export function App() {
  const [inputQuote, setInputQuote] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [randQuote, setRandQuote] = useState(Object);

  useEffect(() => {
    getRandom();
  }, []);

  const submit = (e: any) => {
    e.preventDefault();

    console.log("submitted");
    getRandom();
    getSearchResults();
    console.log(randQuote);
  }

  async function getRandom() {
    const randQuote = await fetch("https://usu-quotes-mimic.vercel.app/api/random")
    setRandQuote(await randQuote.json());
  }

  async function getSearchResults() {
    let query = "https://usu-quotes-mimic.vercel.app/api/search?query=" + inputQuote;

    console.log(query);
    fetch(query)
    .then(r => r.json())
    .then(quote => setQuotes(quote['results']));
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
        {Object.keys(quotes).map((key: any) => (
            <div>
              <p className='quote'>{(quotes[key]['content'])}</p>
              <p>- {(quotes[key]['author'])}</p>
            </div>
        ))}
      </div>

    </div>
  )
}
