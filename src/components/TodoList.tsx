import React from 'react'
import './style.css';
import { Todo} from '../model'
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[];
    seCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const TodoList:React.FC<Props> = ({todos, setTodos, completedTodos, seCompletedTodos }) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided, snapshort) => (
          <div className={`todos ${
            snapshort.isDraggingOver? 'dragactive': ""
          }`} 
          ref={provided.innerRef} 
          {...provided.droppableProps}> 
          <span className='todos__heading'>
            Acive Tasks
          </span>  
          {
            todos.map((todo, index) => (
              <SingleTodo 
              index={index}
              todo={todo} 
              todos={todos} 
              key={todo.id}
              setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
            </div>
          )}
      </Droppable>

      <Droppable droppableId='TodosRemove'>
        {(provided, snapshort) => (
          <div className={`todos remove ${
            snapshort.isDraggingOver? 'dragcomplete': ""
          }`} 
          ref={provided.innerRef} 
          {...provided.droppableProps}>
          <span className='todos__heading'>
          Completed Tasks
        </span>
        {
          completedTodos.map((todo, index) => (
            <SingleTodo 
            index={index}
            todo={todo} 
            todos={completedTodos} 
            key={todo.id}
            setTodos={seCompletedTodos}
            />
          ))}
          {provided.placeholder}
          </div>
          )}
      
      </Droppable>
    </div>
  )
}

export default TodoList