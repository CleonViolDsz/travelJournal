import React from "react";

export default function Journal(props){
  return(
    <div className="journal">
      <div className="img-div">
      <img className="place-image" src={`public/images/${props.url}`} alt="" />
      </div>
      
      <h3 className="place-name">{props.placeName}</h3>
      <h4 className="country-name">{props.countryName}</h4>
      <p className="journal-desc">{props.journal}</p>
    </div>
  )
}