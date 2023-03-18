import { useState, useEffect } from 'react'
import './App.css';
import Cat from './components/Cat';
import axios, * as others from 'axios';
import Gallery from './components/Gallery';
import BanList from './components/BanList';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [currCat, setCurrCat] = useState('');
  const [preCats, setPreCats] = useState([]);
  const [banlist, setBanlist] = useState([]);

  const makeQuery = async() => {
      try {
        let query = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${API_KEY}&has_breeds=${true}`;
        let res = await axios.get(query);

        if ( res.data[0] == null ) {
          alert("Oops! Something went wrong with that query, let's try again!");
        } else {
          setCurrCat(res.data[0]);
          setPreCats((images)=>[...images, res.data[0]]);
          console.log(preCats);
        }

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
        <Gallery preCats={ preCats } />
      </div>

      <div className='cat-container'>
        <Cat key={ currCat.id } currCat={ currCat } setBanlist = { setBanlist } handleClick={ handleClick } /> 
      </div>

      <div className=''>
        <BanList key={ currCat.id } currCat={ currCat } banlist = { banlist }/>
      </div>

    </div>
  )
}

export default App
