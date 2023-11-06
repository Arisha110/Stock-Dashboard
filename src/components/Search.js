import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
import SearchResults from './SearchResults'
import { searchSymbols } from '../api/stock-api'
import {AiOutlineClose} from 'react-icons/ai'


const API_KEY = `${process.env.REACT_APP_API_KEY}`
const Search = () => {

  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);


  const updateBestMatches = async () => {
   try{
       if(input){
        const response = await searchSymbols(input);
        const result= response.result;
        console.log(result)
        setBestMatches(result);
       }
   }
   catch(err){
    setBestMatches([]);
    console.log(err)
   }
  };

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  return (
    <div className='flex items-center my-4 border-2 rounded-md relative z-50 w-80 sm:w-96 
    bg-gray-900 text-gray-300'>
      <input className='w-full px-4 py-2 focus:outline-none rounded-md bg-gray-900'
        type='text'
        value={input}
        placeholder="Search stock..."
        onChange={e => setInput(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      {input && (
        <button onClick={clear} className="m-1">
          {/* <GrFormClose className='h-4 w-4 fill-white'></GrFormClose> */}
          <AiOutlineClose></AiOutlineClose>
        </button>
      )}
      <button
        onClick={updateBestMatches }
        
        className="h-8 w-8 bg-indigo-500 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
      >
        <BsSearch color="white" className='h-4 w-4 fill-white'></BsSearch>
      </button>
      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches}></SearchResults>
      ) : null}

    </div>
  )
}

export default Search