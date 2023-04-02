import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState, useRef } from 'react'
import image from "../images/relaxed.jpg";

type TodoType = {
  id: string,
  task: string,
  isComplete: boolean
}

type Props = {
  todoList: TodoType[],
  activeTasks: TodoType[],
  completedTasks: TodoType[],
  deleteTask: (taskID: string) => void;
  updateTaskStatus: (taskID: string) => void;
}

export const Todo = (props: Props) => {
  const {todoList,activeTasks,completedTasks,deleteTask,updateTaskStatus} = props
  const [panel,setPanel] = useState<string>("all");
  const [currentList,setCurrentList] = useState<TodoType[]>(todoList);
  const checkboxRefs = useRef<(HTMLInputElement | null)[]>([]);

  const changePanel = (panel: string) => {
    setPanel(panel);
  }
  useEffect(() => {
    switch (panel) {
      case "all":
        setCurrentList(todoList);
        break;
      case "active":
        setCurrentList(activeTasks);
        break;
      case "completed":
        setCurrentList(completedTasks);
        break;
      default:
        setCurrentList(todoList);
        break;
    }
  }, [panel,todoList,activeTasks,completedTasks])

  const updateTodoStatus = (index: number) => {
    checkboxRefs.current[index]?.click();
  };

  return (
    <div className='Todo'>
        <div className='task-list'>
        { 
          currentList.length === 0
           && 
          <div className='w-full text-lg'>
            <img className='h-80' src={image} alt="" />
            <p  className='border-b-2 border-black mt-20'>No tasks in list, add some new</p>
          </div>
        }
        {
          currentList.map((todo,index) => (
            <div key={todo.id} className='task'>
              <button onClick={() => updateTodoStatus(index)} 
                      className={todo.isComplete ? "checkbox highlight" : "checkbox border-black"}>
                {
                    todo.isComplete && 
                    <FontAwesomeIcon icon={faCheck} />
                }
            </button>
              <input type="checkbox" 
                    checked={todo.isComplete} 
                    onChange={() => updateTaskStatus(todo.id)} 
                    ref={el => (checkboxRefs.current[index] = el)}
                    className="hidden" />
              <p className={todo.isComplete ? 'completed task-data': 'task-data'} 
                  onClick={() => updateTaskStatus(todo.id)}> 
                  {todo.task} 
              </p>
              <button onClick={() => deleteTask(todo.id)}
                  className='hover:text-red-500 pr-2'>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))
        }
        </div>
        <div className='panel-btns'>
          <button className={panel === 'all'? 'text-my-purple' : 'text-gray-500'} 
            onClick={() => (changePanel("all"))}>
            All
          </button>
          <button className={panel === 'active'? 'text-my-purple' : 'text-gray-500'} 
            onClick={() => (changePanel("active"))}>
            Active
          </button>
          <button className={panel === 'completed'? 'text-my-purple' : 'text-gray-500'} 
            onClick={() => (changePanel("completed"))}>
            Completed
          </button>
        </div>
    </div>
  )
}