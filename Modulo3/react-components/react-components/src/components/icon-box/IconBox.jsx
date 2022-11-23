import './IconBox.css'

function IconBox({ image, title, className }) {
  return(
    <div className= {`icon-box d-flex justify-content-center rounded ${className}` }style ={{
      backgroundImage: `url(${image})`}}>
      <h6 className="mb-1 align-self-end">{title}</h6>
    </div>
  )
}

export default IconBox;