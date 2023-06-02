import React from 'react'
import styles from './TextInput.css'

const TextInput = (props) => {
    return (
        <div>
            <input className='input' {...props} style={{width:props.fullwidth === 'true' ? '100%' : 'inherit'}}/>
        </div>
    )
}

export default TextInput