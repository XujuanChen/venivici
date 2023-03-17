import React from 'react'

const Gallery = ({ cats }) => {
  
  return (
    <div>
      <h2>Who have we seen so far?</h2>

        { 
          cats && 
            cats.map((cat)=>{
              cat.url ? (
                <img src={cat.url} alt="cat" />
              ) : (
                <p>no image</p>
              )
            })
        }
        
    </div>
  )
}

export default Gallery