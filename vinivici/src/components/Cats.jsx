import React from 'react'
import Cat from './cat'

const Cats = ({cats}) => {
  return (
    <div>
        {
            cats.map((cat)=>{
                return <Cat key={cat.id} {...cat} />
            })
        }
    </div>
  )
}

export default Cats