import React, { useState } from "react";
import "./Cat.css";

const Cat = ({ currCat, handleClick }) => {
    const { id, breeds, url } = currCat;
  return (
    <div key={id}>
      <h1>Trippin' on Cats</h1>
      <h3> Discover cats from your wildest dreams!</h3>
      <h3>😺😸😹😻😼😽🙀😿😾</h3>
      <div>

        { breeds &&
                <div>
                <h2>{ breeds[0].id } </h2> 
                <div className="button-container">
                    <button className="btn">{ breeds[0].name }</button>
                    <button className="btn">{ breeds[0].origin }</button>
                    <button className="btn">{ breeds[0].weight.imperial } lbs</button>
                    <button className="btn">{ breeds[0].life_span } years</button>
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
