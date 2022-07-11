import { useState } from "react";

const SetCount = () => {
    const [num, setNum] = useState(0);
    //contst[초기값,함수] = useState(초기값으로 넣고 싶은 값)
    const plusNum = () => {
        setNum(num + 1)
    }

    const minusNum = () => {
        setNum(num - 1)
    }
    return (
        <div>
            {num}
            <button onClick={plusNum}>숫자올리기</button>
            <button onClick={minusNum}>숫자내리기</button>

        </div>
    )
}

export default SetCount;