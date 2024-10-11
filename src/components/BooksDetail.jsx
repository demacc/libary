import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

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
                <div>
                    <h2>{books.title}</h2>
                    <p>{books.description}</p>
                    <p>{books.categories}</p>
                    <p>{books.body}</p>
                </div>
            )}
        </div>

    )
}

export default BooksDetail;