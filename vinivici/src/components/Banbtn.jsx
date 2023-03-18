import React from 'react'

const Banbtn = ({handleRemove}) => {
  return (
    <div>
        <button onClick={()=>handleRemove()}>{btn}</button>
    </div>
  )
}

export default Banbtn