import defaultAxios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch, trigger };
};

const App = () => {
  const { loading, data, error, refetch, trigger } = useAxios({
    url: "https://jsonplaceholder.typicode.com/posts/1"
  });
  console.log(
    `Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(
      data
    )}\nTrigger: ${trigger}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
