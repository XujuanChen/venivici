import React from 'react'

const BanList = ({ currCat, banlist }) => {
  const { id, breeds, url } = currCat;

  return (
    <div key={id}>        
      <h2>Ban List</h2>
      <h3>Select an attribute in your listing to ban it</h3>
      {
        banlist && banlist.length > 0 ? (
          banlist.map(( btn )=>(
            <li style={{listStyleType: "none", marginBottom:"10px"}} >
              <button> { btn } </button>
            </li>
          ))
        ) : (
          <p>no image</p>
        )
      }
    </div>
  )
}

export default BanList