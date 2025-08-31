import React, { useState, useEffect } from 'react'

export default function Luz (props){
    const color = props.color;
    const id = props.id;

    const apagado = ()=>{ return (<div className="luz" id={id} style={{background:color}}  onMouseMove={enscendido}></div>)}

    const [luz, setLuz] = useState(apagado)


    function enscendido(e){
		console.log(e.target.id)
        e.target.style.boxShadow = '0 0 100px 10px rgba(242, 255, 0, 0.884)';
 
    }
    return (
        luz
    )
}