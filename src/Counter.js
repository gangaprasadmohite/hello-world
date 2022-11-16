import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <React.Fragment>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </React.Fragment>

    )
}

export default Counter;