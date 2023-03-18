import React, { useState } from "react";
import "./Cat.css";

const Cat = ({ currCat, handleClick, setBanlist }) => {
    const { id, breeds, url } = currCat;

    const handleName = () => {
      setBanlist((btn)=>[...btn, breeds[0].name] );
    }

    const handleOrigin = () => {
      setBanlist((btn)=>[...btn, breeds[0].origin] );
    }

    const handleWeight = () => {
      setBanlist((btn)=>[...btn, breeds[0].weight.imperial]);
    }

    const handleLifespan = () => {
      setBanlist((btn)=>[...btn, breeds[0].life_span]);
    }

  return (
    <div key={ id } >
      <h1>Trippin' on Cats</h1>
      <h3> Discover cats from your wildest dreams!</h3>
      <h3>😺😸😹😻😼😽🙀😿😾</h3>
      <div>

        { breeds &&
                <div>
                <h2>{ breeds[0].id } </h2> 
                <div className="button-container">
                    <button className="btn" onClick={handleName} >{ breeds[0].name }</button>
                    <button className="btn" onClick={handleOrigin} >{ breeds[0].origin }</button>
                    <button className="btn" onClick={handleWeight}>{ breeds[0].weight.imperial } lbs</button>
                    <button className="btn" onClick={handleLifespan}>{ breeds[0].life_span } years</button>
                </div>
              </div>
        }
        <br />

        {url && (
          <div className="img-container">
            <img src={ url } alt="photo" />
          </div>
        )}

        <br />
      </div>
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
