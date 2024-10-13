import { useEffect, useState } from "react";

function useFetch(url, method = "GET") {
  let [data, setData] = useState(null);
  let [loading, setLodaing] = useState(false);
  let [postData, setPostData] = useState(null);
  let [error, setError] = useState(null);
  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    setLodaing(true);
    let options = {
      signal,
      method,
    };

    let fetchData = () => {
      fetch(url, options)
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
    };

    if (method === "POST" && postData) {
      options = {
        ...options,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };
      fetchData();
    }
    if (method === "GET") {
      fetchData();
    }

    //cleanup function
    return () => {
      abortController.abort();
    };
  }, [url, postData]);
  return { setPostData, data, loading, error };
}

export default useFetch;
