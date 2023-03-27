import { useState, useEffect } from 'react'
import './App.css';
import Cat from './components/Cat';
import axios, * as others from 'axios';
import Gallery from './components/Gallery';
import BanList from './components/BanList';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [isLoading, setLoading] = useState(false);
  const [currCat, setCurrCat] = useState(null);
  const [preCats, setPreCats] = useState([]);
  const [banlist, setBanlist] = useState([]);
  let query = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${API_KEY}&has_breeds=${true}`;
  
  const makeQuery = async() => {
      try {
        setLoading(true);
        const res = await axios.get(query);
        const rand = Math.floor(Math.random()*res.data.length)
        let data = res.data[rand];
        if (data == null) {
          alert('Oops! Something went wrong, please try again.');
        } else {
          const breed = data.breeds[0];
          // console.log(breed);
          const currCat = {
            id: data.id,
            name: breed.id,
            image: data.url,
            breedinfo: [
              breed.name,
              breed.origin,
              breed.weight.imperial + " lbs",
              breed.life_span + " years"
            ]
          }

          if (banlist.includes(currCat.breedinfo[0]) || 
              banlist.includes(currCat.breedinfo[1]) ||
              banlist.includes(currCat.breedinfo[2]) ||
              banlist.includes(currCat.breedinfo[3]) ) {
            return makeQuery();
          }
  
          setCurrCat(currCat);
          // console.log(currCat);
          setPreCats(prev => [...prev, currCat]);
          setLoading(false);
        }

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    // useEffect (()=>{
    //   makeQuery()
    // },[])

    const handleClick = () => {
          makeQuery();
    }

    const handleRemove = ( btn ) => {
      const filtered = banlist.filter((prev)=>{
        return (prev != btn)
      })
      setBanlist(filtered);

      // setBanlist(
      //   prev => {
      //     const newList = [...prev];
      //     let i = 0;
      //     while (i < newList.length) {
      //       if (newList[i] === btn) {
      //         newList.splice(i, 1);
      //       } else {
      //         i++;
      //       }
      //     }
      //     return newList;
      //   }
      // );
    }

  return (
    <div className="container">
      
      <div className='gallery-container'>
        <Gallery preCats={ preCats } />
      </div>

      <div className='cat-container'>
        <Cat currCat={ currCat } setBanlist = { setBanlist } handleClick={ handleClick }/>
      </div>

      <div className='banlist-container'>
        <BanList banlist = { banlist } handleRemove = { handleRemove } />
      </div>

    </div>
  )
}

export default App
