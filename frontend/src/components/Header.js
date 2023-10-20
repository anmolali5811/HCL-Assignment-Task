import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header({setSearch}) {
  const [query, setQuery] = useState('')
  const handleSubmit = () => {
    setSearch(query)
  } 

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="text-2xl font-bold leading-7 text-teal-500 sm:truncate sm:text-3xl sm:tracking-tight">
            HCL Projects
          </Link>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input name='search' value={query} onChange={(e) => setQuery(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search..." aria-label="Full name" />
            <button onClick={handleSubmit} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <button onClick={()=>{setSearch(''); setQuery('');}} className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </form>
        </div>
      </nav>
    </header>
  )
}
