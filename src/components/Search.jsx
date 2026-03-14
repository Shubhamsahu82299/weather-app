import React ,{useRef} from 'react'

const Search = (props) => {
  return (
    <div className='flex items-center gap-2 shadow-xl mb-10 p-4 rounded-xl bg-white border border-gray-100'>
      <input 
        type="search" 
        // Seedha props ki value use karein
        value={props.searchData} 
        // event.target.value se direct data bhejein
        onChange={(e) => props.eventHandler(e.target.value)} 
        placeholder='Search city...' 
        className='w-[190px] md:flex-1 border border-gray-300 p-3 text-xl rounded-lg outline-none focus:border-slate-500 transition-all' 
      />

      <button 
        onClick={props.searchWeather} 
        className='bg-slate-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-slate-800 duration-200 font-medium shadow-md'
      >
        Search
      </button>
    </div>
  )
}

export default Search
