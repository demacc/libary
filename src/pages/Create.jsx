import React, {  useEffect, useState } from 'react';
import useFetch from "../hooks/useFetch";
import { useNavigate } from 'react-router-dom';


export default function Create() {
  let [title , setTitle] = useState('')
  let [description , setDesctiption] = useState('')
  let [newcategorise , setNewcategorise] = useState('')
  let [categories , setCategorise] = useState([])
  let{setPostData , data : book}=useFetch("http://localhost:3000/books" , "POST")
  let navigate = useNavigate()

  let addCategorise = (e)=>{
    setCategorise(prev => [newcategorise , ...prev])
    setNewcategorise('')
  }

  let pushData = (e)=>{
    e.preventDefault();

    let data = {
      title,
      description,
      categories,
    }
   setPostData(data)
    
  }

  useEffect(()=>{
    if(book){
      setTimeout(() => {
        navigate("/")
      }, 2000);
    }
  },[book])

  return (
    <form className="w-full max-w-lg mx-auto" onSubmit={pushData}>
  
  <div className="flex flex-wrap -mx-3 mb-6 space-y-3 mt-5">
    {/* book title */}
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        BOOK TITLE 
      </label>
      <input value={title} onChange={e=> setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Book Title .." />
      
    </div>
    {/* book description */}
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        BOOK DESCRIPTION 
      </label>
      <textarea value={description} onChange={e=> setDesctiption(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Book Description..." />
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
    {/* categories */}
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        CATEGORIES 
      </label>
     <div className='flex items-center justify-center'>
     <input value={newcategorise} onChange={e => setNewcategorise(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Categories.." />
     <button type='button' onClick={addCategorise}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bg-pirmary text-white  rounded-lg mb-3 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
     </button>

     </div>
     <div className="space-x-2">
                            {categories.map((c)=>(
                                <span className="text-sm text-white bg-pirmary rounded-full px-2 py-1 " key={c}>{c}</span>
                            ))}
     </div>
    </div>
    <button  className='bg-pirmary py-2 px-3 rounded-2xl text-sm  text-white flex items-center gap-1 w-[95%] mx-auto justify-center'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
         <span className='hidden md:block'>Create Book</span>
    </button>
  </div>
 
</form>
  )
}
