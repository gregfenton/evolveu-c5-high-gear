import React from 'react'

const Adder = (props) => {
    let theSetFunc = props.henry
    return <button onClick={() => theSetFunc((curr) => { return curr + 1 })}>click me 2!!</button>
}

export default Adder
