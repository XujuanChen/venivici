import React from 'react'

const Cat = ({id, url}) => {
  return (
    <div>
        <img src={url} alt="" />
    </div>
  )
}

export default Cat