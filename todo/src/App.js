import { useRef, useState } from "react";
import TodoList from "./TodoList";
import CreateTodolist from "./CreateTodolist";
import Wrapper from "./Wrapper";

const App = () => {
  const [todolist, setTodolist] = useState([ //변수선언[초기값,변경할값] = useState(초기값=배열이야)
    { id: 1, content: '오늘은 메로나 먹을꺼야' },
    { id: 2, content: '메로나 먹고 맥주한 잔' },
    { id: 3, content: '맥주 마시고 꿀잠자기' },
  ]);


  return (
    <Wrapper>
      <TodoList todolist={todolist} />
      <CreateTodolist todolist={todolist} setTodolist={setTodolist} />
    </Wrapper>
  )
}

export default App;