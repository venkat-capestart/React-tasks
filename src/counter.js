function Counter({countVariable, setCount})  {
    const increment = () => setCount(countVariable+1);
    const decrement = () => {
        if(countVariable > 0){
            setCount(countVariable-1)
        }
    };
    const reset =() => setCount(0);
    return (
        <div>
            <p>Counter: {countVariable}</p>
            <button className="increment-btn" onClick={increment}>Increment</button>
            <button className="decrement-btn" onClick={decrement}>Decrement</button>
            <button className="reset-btn" onClick={reset}>Reset</button>
        </div>
    )

}
export default Counter;