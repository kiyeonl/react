import { useEffect } from "react"

const TodoList = ({ todolist, setTodolist }) => {
    const onDelete = (num) => {
        console.log(num)
        setTodolist(todolist.filter(el => el.id !== num))
    }

    useEffect(() => {
        console.log('마운트 되었을 때 /업데이트 되었을 때')
    })
    return (
        <div className="TodoListWrap">
            <h2>{todolist.length ? <strong>오늘 할 일은 {todolist.length}건 입니다.</strong> : <span>오늘 할일은 없습니다.</span>}</h2>
            <hr></hr>
            <ul className="TodoList">
                {
                    todolist.map(el => <li key={el.id}>{el.content}<i className="xi-close closeBtn" onClick={() => onDelete(el.id)}></i></li>)
                }
            </ul>
        </div>
    )
}

export default TodoList;