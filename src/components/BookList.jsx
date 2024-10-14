import React from "react";
import book from "../assets/book.jpg";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";

export default function BookList() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let search = params.get("search");

  let {
    data: books,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ""}`);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {loading && <div>Loading ..</div>}
      {!!books && (
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 my-3 ">
          {books.map((b) => (
            <Link key={b.id} to={"/books/" + b.id}>
              {/* image */}
              <img src={book} alt="" className="h-[320px] w-[320px]" />
              {/* description */}
              <div className="text-center space-y-2 mt-3 ">
                <h1>{b.title}</h1>
                <p>{b.description}</p>
                {/* geners */}
                <div className="flex flex-wrap">
                  {b.categories.map((gener) => (
                    <span
                      className="mx-1 my-1 bg-blue-600 text-white rounded-full py-1 px-2 "
                      key={Math.random()}
                    >
                      {gener}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {search && !books.length && (
        <p className=" text-center text-2xl font-bold font-mono text-pirmary">
          No Search Result Found ...
        </p>
      )}
    </div>
  );
}
