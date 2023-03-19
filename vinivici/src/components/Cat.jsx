import React from "react";
import "./Cat.css";

const Cat = ({ currCat, setBanlist, handleClick}) => {

  return (
    <div>
      <h1>Trippin' on Cats</h1>
      <h3> Discover cats from your wildest dreams!</h3>
      <h3>😺😸😹😻😼😽🙀😿😾</h3>
      {
        currCat &&      
        <div key={currCat.id}>
          <div>
          <h2> { currCat.name } </h2> 
          <div className="button-container">
              {
                currCat.breedinfo.map(
                  (item) => (
                    <button className="btn" key={ item } 
                      onClick={ () => setBanlist( prev => [...prev, item] ) } > 
                      { item }
                    </button>
                  )
                )
              } 
          </div>
        </div>
        <br />
        <div className="img-container">
          <img src={ currCat.image } alt="photo" />
        </div>
        <br />
      </div>
      }
      <button
        type="discover"
        className="discover-btn"
        onClick={() => handleClick()}
      >
        🔀 Discover!
      </button>

    </div>
  );
};

export default Cat;
