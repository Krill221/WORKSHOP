import { useRef, useState } from "react"
import { MeiliSearch } from 'meilisearch'

const client = new MeiliSearch({
  host: 'http://localhost:7700',
  apiKey: 'masterKey',
})

function useDebounce(fn: Function, ms: number) {
  const timer: any = useRef();
  return (...args: any[]) => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      fn(...args)
    }, ms)
  }
}

export default function Index() {

  const [text, setText] = useState('')
  const [data, setData] = useState([])

  const fetchSearch = useDebounce(async (text: any) => {
    console.log(text)
    if (text === '') {
      setData(null)
      return
    }

    const index = client.index('new')
    const search: any = await index.search(
      text,
      {
        attributesToHighlight: ['*'],
        facets: [],
        attributesToHighlight: ["*"],
        highlightPreTag: "<ais-highlight-0000000000>",
        highlightPostTag: "</ais-highlight-0000000000>",
        limit: 21,
        offset: 0,
      }
    )
    setData(search.hits)


  }, 0)

  const handleSearch = (e: any) => {
    setText(e.target.value)
    fetchSearch(e.target.value)
  }

  return (<div>
    <header className="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
      <div className="group relative">
        <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
        <input onChange={handleSearch} value={text} placeholder="search news" className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"></input>
      </div>
    </header>
    <section className="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
      <div className="flex flex-col gap-2 items-start" >
        {
          data && data.map(item => <div key={item.id} className="w-full rounded-md p-3 ring-1 ring-slate-200 shadow-sm" >
            <div className=""> title: {item.title}</div>
            <div>desc: {item.desc}</div>
          </div>)
        }
      </div>
    </section>
  </div>
  )
}
