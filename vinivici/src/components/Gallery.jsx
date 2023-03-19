import React from 'react'

const Gallery = ({ preCats }) => {

  return (
    <div>
      <h2>Who have we seen so far?</h2>
        { 
          preCats && preCats.length > 0 ? (
            preCats.map(( pic, index )=>(
              <li key={ index } style={{listStyleType: "none"}} >
                <img src={ pic.image } alt="photo" style={{width: "100px", height: "100px", objectFit: "cover"}} />
                <p>The { pic.breedinfo[0] } cat is from { pic.breedinfo[1] } </p>
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