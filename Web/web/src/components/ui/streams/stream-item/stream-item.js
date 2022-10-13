import React from "react";
import { Link } from "react-router-dom";


function StreamItem({ title, image, views, id ,author, description }) {


  return (
    <Link to={`/stream/${id}`}>
      <div className="d-flex stream-item flex-column">
        <img className="w-100 rounded-1" src={image} alt={title} />
        <div className="d-flex mt-1 justify-content-between align-items-baseline">
          <p className="m-0 fs-4 fw-lighter">{author.name}</p>
          <p className="m-0 fs-4 fw-lighter">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default StreamItem;