import React from 'react'
import './Button.css'


function Button({label, primary}) {
    if(primary) {
      return <div className='button primary-button hoverable'> {label}</div>
    }else {
      return <div className='button secondary-button hoverable'> {label}</div>

    }
}

export default Button