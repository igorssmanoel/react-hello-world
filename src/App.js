import { useEffect, useState } from "react";

const App = () => {
    const [number, setNumber] = useState();
    const multNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const gerarBotoes = () => {
        return <div>
            <button onClick={() => setNumber(1)}>1</button>
            <button onClick={() => setNumber(2)}>2</button>
            <button>3</button>
            <br />
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <br />
            <button>7</button>
            <button>8</button>
            <button>9</button>
        </div>
    }
    return <div>
        {/* <input
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            placeholder="Digite um número"></input> */}

        {gerarBotoes()}
        {number && multNumbers.map(item => <div>{item} X {number} = {item * number}</div>)}
    </div>
}

export default App;