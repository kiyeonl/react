const TodoList = ({ todolist }) => {
    return (
        <ul className="TodoList">
            {
                todolist.map(el => <li key={el.id}>{el.content}</li>)
            }
        </ul>
    )
}

export default TodoList;