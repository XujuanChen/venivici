import React from 'react'

const Gallery = ({ cat }) => {
  const { url } = cat;
  return (
    <div>
      <h2>Who have we seen so far?</h2>
        {url && (
          <div className="img-container">
            <img src={ url } alt="photo"  style={{ maxWidth: "200px", maxHeight: "200px" }} />
          </div>
        )}
    </div>
  )
}

export default Gallery