import { useEffect, useState } from "react";

function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLodaing] = useState(false);
  let [error, setError] = useState(null);
  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    setLodaing(true);
    fetch(url, {
      signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Something went wrong!!");
        }
        return res.json();
      })
      .then((d) => {
        setLodaing(false);
        setData(d);
      })
      .catch((e) => setError(e.message));

    //cleanup function
    return () => {
      abortController.abort();
    };
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
