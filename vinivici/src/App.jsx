import { useState, useEffect } from 'react'
import './App.css';
import axios, * as others from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const ex_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';
  const URL = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=API_KEY';
  const [cats, setCats] = useState('');
  const [num, setNum] = useState(0);


    useEffect(()=>{
      const fetchData = async() => {
        const res = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
        const rand = Math.floor(Math.random()*res.data.length);
        setNum(rand);
        setCats(res.data[num]);
        // console.log(res.data);
        // console.log(cats.breeds[0].weight.imperial)
      }
      fetchData();
    },[])
    
    
  return (
    <div className="container">
      <div className=''>
        <h2>Who have we seen so far?</h2>
      </div>

      <div className=''>
        <h1>Trippin' on Cats</h1>
        <h2>Discover cats from your wildest dreams!</h2>
        <h2>😺😸😹😻😼😽🙀😿😾</h2>
        {/* <h2>Name: {cats.breeds[0].name}</h2> */}
        <div className='button-container'>
          <button>1</button>
          {/* <button>{cats.breeds[0].weight.imperial} lbs </button>
          <button>{cats.breeds[0].origin} </button>
          <button>{cats.breeds[0].life_span} years </button> */}
        </div>
        <div className='img-container'>
          {
            <img src={cats.url} alt="" />
          }
        </div>
          {/* <p>{cats.breeds[0].description}</p> */}
        <button>Discover</button>
      </div>

      <div className=''>
        <h2>Ban List</h2>
        <h3>Select an attribute in your listing to ban it</h3>
      </div>

    </div>
  )
}

export default App
