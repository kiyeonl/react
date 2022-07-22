import { useState } from "react";

const CreateTodolist = ({ todolist, setTodolist }) => {
    const [input, setInput] = useState('');
    const onChange = (e) => {
        const { name, value } = e.target;
        setInput({
            id: '1',
            [name]: value,

        })
    }

    const inputHadnler = () => {

        setTodolist([
            ...todolist,
            input
        ]);
        console.log(todolist);
    }


    return (
        <div className="CreateTodolist">
            <input name="content" onChange={onChange} />
            <button onClick={inputHadnler}>입력</button>
        </div>
    )
}

export default CreateTodolist;