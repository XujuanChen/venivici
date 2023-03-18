import React, {useState} from 'react'
import { v1 as uuidv1 } from 'uuid';


const BanList = ({ banlist, setBanlist }) => {

  const handleRemove = () => {
    let newlist = banlist.filter(btn => btn.index != index)
    setBanlist(newlist)
  }

  return (
    <div>        
      <h2>Ban List</h2>
      <h3>Select an attribute in your listing to ban it</h3>
      {
        banlist && banlist.length > 0 ? (
          banlist.map(( btn, index )=>
          <li style={{listStyleType:'none'}}>
            <button key={index} onClick={handleRemove}>{ btn }</button>
          </li>
        ) ) : (
          <p>no button</p>
        )
      }
    </div>
  )
}

export default BanList