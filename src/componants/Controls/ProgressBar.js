import React from 'react'

const ProgressBar = (props) => {
    return (
        <div className={props.className} style={{ width: props.progress }} />
    )
}

export default ProgressBar
