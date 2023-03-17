import { useState, useEffect } from 'react'
import './App.css';
import Cat from './components/Cat';
import axios, * as others from 'axios';
import Gallery from './components/Gallery';
import BanList from './components/BanList';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [cat, setCat] = useState('');
  const [cats, setCats] = useState([]);

  const makeQuery = async() => {
      try {
        let query = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${API_KEY}&has_breeds=${true}`;
        let res = await axios.get(query);
        setCat(res.data[0]);
        console.log(cat);
        setCats((c)=>[...c, cat]);
        console.log(cats);
      } catch (error) {
        console.log(error);
      }
    }

    const handleClick = () => {
          makeQuery();
    }

  return (
    <div className="container">
      <div className=''>
        <Gallery cat={cats} />
      </div>

      <div className='cat-container'>
        <Cat key={cat.id} cat={cat} handleClick={handleClick} /> 
      </div>

      <div className=''>
        <BanList />
      </div>

    </div>
  )
}

export default App
