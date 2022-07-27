import { useState } from "react";

const HeartCount = () => {
    const [num, setnum] = useState(0);
    return (
        <>
            <i className="xi-heart" onClick={() => setnum(num + 1)}></i> {num}
        </>
    )

}

export default HeartCount;