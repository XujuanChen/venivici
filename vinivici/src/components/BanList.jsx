import React from 'react'

const BanList = ({ cat }) => {
  const { breeds } = cat;

  return (
    <div>        
      <h2>Ban List</h2>
      <h3>Select an attribute in your listing to ban it</h3>
      {
        text &&
        <button> { text } </button>
      }
    </div>
  )
}

export default BanList