import { useState, useEffect } from 'react'
import './App.css';
import Cat from './components/Cat';
import axios, * as others from 'axios';
import Gallery from './components/Gallery';
import BanList from './components/BanList';
// const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const breedsURL = 'https://api.thecatapi.com/v1/breeds';
  const [breeds, setBreeds] = useState('');
  const [cats, setCats] = useState('');
  const [breid, setBreid] = useState('');
  const [cat, setCat] = useState('');

  
  // fetch breed id
  const fetchData = async() => {
    try {
      const bre =  await axios.get(breedsURL);
      const rand = Math.floor(Math.random()*bre.data.length);
      setBreeds(bre.data[rand]);
      // console.log(breeds);
      setBreid(breeds.id);
      // console.log(breid);
    } catch (error) {
      console.log(error);
    }
  }

  // fetch cats under the breed id
  const fetchCats = async() => {
    try {
      fetchData();
      const NEW_URL = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breid}`;
      const res = await axios.get(NEW_URL);
      setCats(res.data);
      // console.log(cats);
    } catch (error) {
      console.log(error);
    }
  }

  // looking for the details of the cat of the specified id
  const makeQuery = async() => {
      try {
        fetchCats();
        const CAT_URL = `https://api.thecatapi.com/v1/images/${cats[0].id}`;
        const res = await axios.get(CAT_URL);
        setCat(res.data);
        console.log(cat);
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
        <Gallery cat={cat} />
      </div>

      <div className='cat-container'>
        <Cat cat={cat} handleClick={handleClick}  /> 
      </div>

      <div className=''>
        <BanList cat={cat} />
      </div>

    </div>
  )
}

export default App
