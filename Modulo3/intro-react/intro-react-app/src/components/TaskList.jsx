const tasks = ["task 1", "task 2", "task 3", "task 4", "task ERROR",]


function TaskList() {

return (
  <div className="container">
    <ul className="list-group">
      {tasks.map((task, i) => (
        <li key={i} className="list-group-item">
          {task}
          </li>))}
    </ul>
  </div>
)
}

export default TaskList