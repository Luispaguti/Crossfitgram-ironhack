import React from 'react'

function Task({name, deleteFromList}) {
const handleClick = () => {
  deleteFromList(name);
};


  return (
    <li onClick={handleClick} className='list-group-item'>{name}</li>
  )
}

export default Task;