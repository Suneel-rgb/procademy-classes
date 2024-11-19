import React from 'react'


function Button(props) {
    return <button onClick={props.eventHandler} className='btn btn-primary mx-3'>{props.children}</button>
}

export default Button;