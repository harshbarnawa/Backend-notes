import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/data')
    .then((response) => {
      setData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])


  return (
    <>
    <h1>Backend data</h1>
    <p>Data: {data.length}</p>

    {
      data.map((data, index) => (
        <div key={(data.id)}>
          <h3>{data.name}</h3> 
          <p>{data.content}</p>
        </div>
      ))
    }



    </>
  )
}

export default App
