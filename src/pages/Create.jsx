import React, { useState } from 'react'

export default function Create() {
  let [title , setTitle] = useState('')
  let [description , setDesctiption] = useState('')
  let [newcategorise , setNewcategorise] = useState('')

  return (
    <form class="w-full max-w-lg mx-auto">
  
  <div class="flex flex-wrap -mx-3 mb-6 space-y-3 mt-5">
    {/* book title */}
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        BOOK TITLE 
      </label>
      <input value={title} onChange={e=> setTitle(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Book Title .." />
      
    </div>
    {/* book description */}
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        BOOK DESCRIPTION 
      </label>
      <textarea value={description} onChange={e=> setDesctiption(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Book Description..." />
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
    {/* categories */}
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        CATEGORIES 
      </label>
     <div className='flex items-center justify-center'>
     <input value={newcategorise} onChange={e => setNewcategorise(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Categories.." />
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bg-pirmary text-white  rounded-lg mb-3 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
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
