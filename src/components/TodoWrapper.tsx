import {useEffect, useState} from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm"
import { Clock } from "./Clock";

type TodoType = {
  id: string,
  task: string,
  isComplete: boolean
}

export const TodoWrapper = () => {

  const [todoList, settodoList] = useState<TodoType[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TodoType[]>([]);
  const [activeTasks, setActiveTasks] = useState<TodoType[]>([]);

  useEffect(() => {
    const completedTasksList = todoList.filter(todo => todo.isComplete);
    setCompletedTasks(completedTasksList);
  }, [todoList]);

  useEffect(() => {
    const activeTasksList = todoList.filter(todo => !todo.isComplete);
    setActiveTasks(activeTasksList);
  }, [todoList]);

  const getTaskID = function() {
    return Date.now().toString();
  } 

  const addTodo = (todo: TodoType) => {
    todo.id = getTaskID();
    settodoList((initialTasks) => [{ 
       id:todo.id,
       task: todo.task,
       isComplete: todo.isComplete}, 
       ...initialTasks]);
    // settodoList([{task:todo.task},...todoList])
  }

  const updateTaskStatus = (taskID: string) => {
    const updatedTodoList = [...todoList];
    const todoIndex = updatedTodoList.findIndex(todo => todo.id === taskID);
    const updatedTodo = { ...updatedTodoList[todoIndex] };
    updatedTodo.isComplete = !updatedTodo.isComplete;
    updatedTodoList[todoIndex] = updatedTodo;
    settodoList(updatedTodoList);
  }

  const deleteTask = (taskID: string) => {
    settodoList(todoList.filter(task => (task.id !== taskID)));
  }

  return (
    <div className="TodoWrapper">
        <Clock />
        <TodoForm addTodo={addTodo} />
        <Todo todoList={todoList} 
              activeTasks={activeTasks}
              completedTasks={completedTasks}
              deleteTask={deleteTask} 
              updateTaskStatus={updateTaskStatus}/>
    </div>
  )
}
