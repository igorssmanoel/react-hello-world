import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0)
    return <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>Contagem:</span> {count}
    </div>
}

export default App;