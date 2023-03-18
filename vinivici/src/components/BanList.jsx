import React, {useState} from 'react'
// import Banbtn from './Banbtn'

const BanList = ({ banlist, handleRemove }) => {

  return (
    <div>        
      <h2>Ban List</h2>
      <h3>Select an attribute in your listing to ban it</h3>
      {
        banlist && banlist.length > 0 ? (
          banlist.map(( btn, index )=>
          <li key={btn.index} style={{listStyleType:'none'}}>
            <button {...btn} onClick={()=>handleRemove(index)}>{ btn }</button>
          </li>
        //   <Banbtn key={btn.index} {...btn} handleRemove={handleRemove} />
        ) ) : (
          <p>no button</p>
        )
      }
    </div>
  )
}

export default BanList