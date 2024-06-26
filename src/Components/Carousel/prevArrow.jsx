import React from 'react'

const PrevArrow =(props)=>{
    const {className, style, onClick} = props
    return(
        <>
        <div className={className}
        style={{...style, background: "white", display: "flex", justifyContent:"center", alignItems:"center", padding:"4px", borderRadius: "50%" }}
        onClick={onClick} >
        </div>
        </>
    )
}

export default PrevArrow;