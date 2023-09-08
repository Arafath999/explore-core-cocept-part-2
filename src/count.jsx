import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCountReduce = count - 1;
        setCount(newCountReduce)
    }

    return (
        <div style={{ border: '2px solid yellow rounded-xl'}}>
            <h3>Allahu:{count}</h3>
            <button onClick={handleAdd}>count please</button>
            <button onClick={handleReduce}>reduce please</button>
        </div>
    )
}