import React from 'react';
import book from "../assets/book.jpg"
import useFetch from '../hooks/useFetch';

export default function BookList() {
    let {data : books , loading , error} = useFetch("http://localhost:3000/books")

    if(error){
        return <p>{error}</p>
    }
  return (
   <div>
    {loading && <div>Loading ..</div>}
  {!!books && (
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 my-3 ">
      {books.map((b)=>(
          <div key={b.id}>
          {/* image */}
          <img src={book} alt=""  className="h-[320px] w-[320px]"/>
          {/* description */}
          <div className="text-center space-y-2 mt-3 ">
              <h1>{b.title}</h1>
              <p>{b.description}</p>
              {/* geners */}
              <div className="flex flex-wrap">
              {b.categories.map((gener)=>(
              <span className="mx-1 my-1 bg-blue-600 text-white rounded-full py-1 px-2 " key={Math.random()}>{gener}</span>
              ))}
              </div>
          </div>
          </div>
      ))}
      </div>

  )}
    </div>
  )}

