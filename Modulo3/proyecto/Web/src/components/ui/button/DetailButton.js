import React from 'react'
import { Link } from "react-router-dom";

function DetailButton({path,title,}) {
  return (
    <div className="detailback">
      <Link to={path} className="linkdetail"><p class="descriptiondetail">{title}</p></Link>
    </div>
  )
}

export default DetailButton