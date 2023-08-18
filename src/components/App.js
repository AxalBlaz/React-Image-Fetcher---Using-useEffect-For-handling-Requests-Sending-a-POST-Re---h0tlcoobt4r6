import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { Loader } from "./Loader";
import { PhotoFrame } from "./PhotoFrame";
const App = () => {
  const [id, setId] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  async function getData() {
    setLoading(true);
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      const json = await resp.json();
      setData(json);
    } catch(err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if(id !== null){
      getData();
    }
  }, [id]);
  return (
    <>
      <label>Id Number</label>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      {id===null ? <></> : loading ? <Loader /> : <PhotoFrame url={data.url} title={data.title} />}
    </>
  );
};
​
export default App;
