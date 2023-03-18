import React from 'react'

const Banbtn = ({index, banlist, handleRemove }) => {
  return (
    <li style={{listStyleType:'none'}}>
        <button key={index} onClick={()=>handleRemove(index)}>{ banlist[index] }</button>
    </li>
  )
}

export default Banbtn