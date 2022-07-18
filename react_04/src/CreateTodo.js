const CreateTodo = ({ onCleate, onChange }) => {
    return (
        <>
            <input name="content" onChange={onChange}></input>
            <button onClick={onCleate}>할일 추가</button>
        </>
    )
}

export default CreateTodo;