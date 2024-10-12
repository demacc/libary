import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import bookImg from "../assets/book.jpg"

function BooksDetail(){

    let params = useParams();
    let url = "http://localhost:3000/books/" + params.id;
    let {data : books , loading , error} = useFetch(url)
    if(error) {
        return <p>{error}</p>
    }
    return (
        <div>
            {loading && <div>Loading ..</div>}
            {!!books && (
                <div className="grid grid-cols-2">
                    <div>
                        <img src={bookImg} alt="" className="w-[80%] h-[420px]"/>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold text-3xl">{books.title}</h1>
                        <div className="space-x-2">
                            {books.categories.map((c)=>(
                                <span className="text-sm text-white bg-blue-400 rounded-full px-2 py-1 " key={c}>{c}</span>
                            ))}
                        </div>
                        <div>
                            {books.description}
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default BooksDetail;