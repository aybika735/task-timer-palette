import { useSelector } from "react-redux";
import Form from "./Form";
import Todo from "./Todo";
function App() {
  const todos = useSelector((state) => state);

  return (
    <div className="app">
      <div className="header">Список дел</div>;
      <Form />
      <div className="todos">
        {todos.map((todo, index) => {
          return <Todo todo={todo} index={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
