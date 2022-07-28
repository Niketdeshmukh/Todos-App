import { useState } from "react";
import Head from "next/head";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
const todo = () => {
  const [todos, setTodos] = useState([
    {
      text: "Complete your todos list 😊",
      isDone: false,
    },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.text}
        </span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>
            ✓
          </Button>{" "}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>
            ✕
          </Button>
        </div>
      </div>
    );
  }
  function FormTodo({addTodo}){
    const [value, setValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("")
    };
    return(
    
        <Form onSubmit={handleSubmit}> 
    <Form.Group>
        
      <Form.Label><b style={{color: "#ccc"}}>Add Todo</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      
    </Form.Group>
    <Button variant="primary mb-3" type="submit" style={{marginTop:"12px"}}>
      Submit
    </Button>
  </Form>
    )
  }
  return (
    <>
    <Head>
        <title>Todo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="image__styling"></div>
      <div className="app">
      <div className="code-editor">
        <div className="top-bar">
                <ul className="control">
                  <li className="button" onclick="closeTab()"></li>
                  <li className="button"></li>
                  <li className="button"></li>
                </ul>
                <div className="file-path">~/Users/NIKET/todosList</div>
              </div>
        <div className="container" style={{    padding: "0px 100px 0px 100px"}} >
          <h1 className="text-center mb-4" style={{color:"#f0ffffc9"}}>Todo List</h1>
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <Card style={{marginBottom:"30px"}}>
                <Card.Body>
                  <Todo 
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default todo;
