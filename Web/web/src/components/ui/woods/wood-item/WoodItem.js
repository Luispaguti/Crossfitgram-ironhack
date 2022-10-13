import React from "react";
import { Link } from "react-router-dom";


function WoodItem({ title, scaled, image, categories, id ,author, description, exercise,location,reps,weight,time,kcal,score,effort,classType }) {


  return (
    <Link to={`/wood/${id}`}>
      <div className="d-flex stream-item flex-column">
      <p className="m-0 fs-4 fw-lighter">{author.name}</p>
        <div className="d-flex mt-1 justify-content-between align-items-baseline">
          <p className="m-0 fs-4 fw-lighter">{scaled}</p>
          <p className="m-0 fs-4 fw-lighter">{categories}</p>
          <p className="m-0 fs-4 fw-lighter">{exercise}</p>
          <p className="m-0 fs-4 fw-lighter">{image}</p>
          <p className="m-0 fs-4 fw-lighter">{reps}</p>
          <p className="m-0 fs-4 fw-lighter">{weight}</p>
          <p className="m-0 fs-4 fw-lighter">{time}</p>
          <p className="m-0 fs-4 fw-lighter">{kcal}</p>
          <p className="m-0 fs-4 fw-lighter">{score}</p>
          <p className="m-0 fs-4 fw-lighter">{description}</p>
          <p className="m-0 fs-4 fw-lighter">{location}</p>
          <p className="m-0 fs-4 fw-lighter">{effort}</p>
          <p className="m-0 fs-4 fw-lighter">{classType}</p> 

          </div>
        </div>
    </Link>
  );
}

export default WoodItem;