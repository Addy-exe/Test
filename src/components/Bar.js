import React , { useState } from 'react'

const Bar = ({ data }) => {

    const [isclick, setIsclick] = useState(false);

    const handleClick = () => {
        setIsclick(!isclick)
    }
    
    return (
        <div
            key={data}
            className={`bar ${isclick ? "active" : ""}`}
            onClick={handleClick}
        >
            <p>{data}</p>
        </div>
    )
}

export default Bar