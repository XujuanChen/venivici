import React from 'react';

const BanList = ({ banlist, handleRemove }) => {
  console.log(`banlist: ${banlist}`);
  return (
    <div>        
      <h2>Ban List</h2>
      <h3>Select an attribute in your listing to ban it</h3>
      {
        banlist && banlist.length > 0 ? (
          banlist.map(( btn, index )=> {
            return(
            <li key={ index } style={{listStyleType:'none', margin: "5px 0"}}>
              <button onClick={ () => handleRemove( btn ) }>{ btn }</button>
            </li>)
        }) ) : (
          <p>no button</p>
        )
      }
    </div>
  )
}

export default BanList