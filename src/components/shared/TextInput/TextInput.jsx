import React from 'react'
import styles from './TextInput.css'

const TextInput = (props) => {
    return (
        <div>
            <input className='input' {...props} />
        </div>
    )
}

export default TextInput