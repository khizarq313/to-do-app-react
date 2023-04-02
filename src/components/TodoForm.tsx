import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState,useRef} from 'react'

type TodoType = {
    id: string,
    task: string,
    isComplete: boolean
}

type Props = {
    addTodo: (todo: TodoType) => void;
}

export const TodoForm = (props: Props) => {
    const {addTodo} = props;
    const [value, setValue] = useState("");
    const [taskStatus, setTaskStatus] = useState<boolean>(false);
    const checkboxRef = useRef<HTMLInputElement>(null);
    const enterBtnRef = useRef<HTMLButtonElement>(null);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskStatus(event.target.checked);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim()) {
            addTodo({id: "",
                    task: value.trim(),
                    isComplete: taskStatus}
                );
            setValue("");
            setTaskStatus(false);
          }
    }

    const updateTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const updateTaskStatus = (e: React.FormEvent) => {
        e.preventDefault();
        checkboxRef.current?.click();
      };

      const handleKeyEvent = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            enterBtnRef.current?.click();
        }
      }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
            <div onClick={updateTaskStatus} className={taskStatus ? "checkbox highlight" : "checkbox border-white"}>
                {
                    taskStatus && 
                    <FontAwesomeIcon icon={faCheck} />
                }
            </div>
        <input type="checkbox" 
                checked={taskStatus} 
                onChange={handleCheckboxChange} 
                ref={checkboxRef}
                className="hidden" />
        <input type="text" className='todo-input' 
            placeholder='Enter your task here.' 
            value={value} onChange={updateTask}
            onKeyDown={handleKeyEvent}/>
        <button type='submit' className='todo-btn' ref={enterBtnRef}>
            Add Task
        </button>
    </form>
  )
}