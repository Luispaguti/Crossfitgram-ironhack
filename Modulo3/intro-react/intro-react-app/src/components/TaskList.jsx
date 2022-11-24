import Task from "./Task"
import { useState } from "react"

const tasks = ["task 1", "task 2", "task 3", "task 4", "task ERROR",]


function TaskList() {
  const [list, setList] = useState([])

  const handleClick = () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];

    setList([randomTask, ...list ]);
    
  };

  return (
    <div className="container">
      <button onClick={handleClick}  className="mb-2 btn btn-sm btn-primary">Add task</button>
      {list.length === 0 ? (
        <div className="alert alert-info">no tasks</div>
      ) : (
        <ul className="list-group">
          {list.map((task, i) => (
            <Task key={i} name={task} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList