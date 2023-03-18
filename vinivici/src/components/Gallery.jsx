import React from 'react'

const Gallery = ({ preCats }) => {
  
  return (
    <div>
      <h2>Who have we seen so far?</h2>

        { 
          preCats && preCats.length > 0 ? (
            preCats.map(( pic )=>(
              <li style={{listStyleType: "none"}} >
                <img src={ pic.url } alt="photo" style={{width: "150px", height: "150px", objectFit: "cover"}} />
                <p>A { pic.breeds[0].name } cat from { pic.breeds[0].origin} </p>
              </li>
            ))
          ) : (
            <p>no image</p>
          )
        }
        
    </div>
  )
}

export default Gallery