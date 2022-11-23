
function BtnIcon( {mode, children, icon, small}) {
  let smallCss = small ? 'btn-sm' : '';
  
  return (
    <button className= {`btn btn-${mode} ${smallCss}`}>
      <i className={`fa fa-${icon} me-1`}></i>
      {children}
      </button>
  );
 
  }

  BtnIcon.defaultProps = {
    mode: 'primary',
    small: false
  }

export default BtnIcon;