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
            alert('Oops! Something went wrong, please try again.');
        } else if (
          !banlist.includes(res.data[0].breeds[0].name)  &&
          !banlist.includes(res.data[0].breeds[0].origin)  &&
          !banlist.includes(res.data[0].breeds[0].weight.imperial) &&
          !banlist.includes(res.data[0].breeds[0].life_span)
          ) {
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

    const handleRemove = (index) => {
      let newList = banlist.filter((item)=>{
        item.index != index;
      })
      setBanlist(newList);
    }

  return (
    <div className="container">
      <div className='gallery-container'>
        <Gallery preCats={ preCats } />
      </div>

      <div className='cat-container'>
        <Cat key={ currCat.id } currCat={ currCat } setBanlist = { setBanlist } handleClick={ handleClick } /> 
      </div>

      <div className='banlist-container'>
        <BanList banlist = { banlist } handleRemove = { handleRemove } />
      </div>

    </div>
  )
}

export default App
