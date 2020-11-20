import React, {useState} from 'react'
import './App.css';
import Form from './components/Form'
import Todo from './components/Todo'

function App(){

const [text, setText] = useState("")
const [todo, setTodo] = useState([])

return(
    <div className="container"> 
        <div className="content" id="name">
            <Form text={text} setText={setText} todo= {todo} setTodo={setTodo}/>
            <Todo todo= {todo} setTodo={setTodo}/>
        </div> 
    </div>
)

}

export default App;