import React from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {

  const [input, setInput] = React.useState()
  const [isFetched, setIsFetched] = React.useState()

  React.useEffect(()=>{
    setIsFetched()
    fetch(`https://jsonplaceholder.typicode.com/photos/${input}`)
    .then((response)=>{return response.json()})
    .then((result)=>{setIsFetched(result)})
  },[input])

  console.log(isFetched, input)

  function handleOnChange(value){
    if(value>5000 || value<1) return
    setInput(value)
  }

  return(
    <>
      <label>Id number </label>
      <input type="number" value={input} onChange={(e)=>handleOnChange(e.target.value)}/>
      {isFetched && <PhotoFrame url={isFetched.url} title={isFetched.title} />}
      {!isFetched && <Loader />}
    </>
  )
}

export default App;
