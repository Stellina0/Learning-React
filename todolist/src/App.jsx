import { useState } from 'react'
import Input from './components/TodoList/Input'

import Showlist from './components/TodoList/Showlist'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');

  function setTexts(e) {
    setText(e.target.value);
  }

  function AddTask() {
    setTodoList([
      ...todoList,
      text
    ])

    setText('')
  }

  function Delete_task(index){
    let todo = [...todoList]

    todo.splice(index,1)
    setTodoList([
      ...todo
    ])
  }
  return (
    <>
    <div className="container mx-auto">
      <Input setTexts={setTexts} texts={text} AddTasks={AddTask} />
      <Showlist List={todoList} Delete={Delete_task} />
    </div>
    </>
  )
}

export default App