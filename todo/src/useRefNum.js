import { useState } from "react";

const App = () => {
    const [toggle, setToggle] = useState(true);//변수를 선언했다는 뜻 초기값이 트루임
    console.log(toggle)
    return (
        <>
            <div>{toggle ? <span> 나는 메인이지롱.. </span> : <li>나는 메롱이지롱..</li>}???</div>
            <button onClick={() => setToggle(!toggle)}>Click</button>
        </>
    )
}

export default App;