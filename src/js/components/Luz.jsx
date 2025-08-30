import React, { useState, useEffect } from 'react'

export default function Luz (props){
    const color = props.color;
    const id = props.id;

    function apagado(e){
     //   e.target.style.boxShadow = '0 0 0 0 rgba(242, 255, 0, 0.884)'
    }

    function enscendido(e){
		console.log(e.target.id)
        e.target.style.boxShadow = '0 0 100px 10px rgba(242, 255, 0, 0.884)';
        return apagado(e)
    }
    return (
        <div className="luz" id={id} style={{background:color}}  onMouseMove={enscendido}></div>
    )
}