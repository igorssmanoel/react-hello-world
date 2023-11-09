import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    return <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>Contagem:</span> {count}
        <div>Digite o nome: </div>
        <input onChange={(event) => setName(event.target.value)} ></input>
        <div>Meu nome é : {name}</div>
    </div>
}

export default App;