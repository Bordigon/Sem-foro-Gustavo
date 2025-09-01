import React, { useState, useEffect } from 'react'

export default function Luz (props){
    const id = parseInt(props.id)
    const color = props.color;
    const shadow = `0 0 100px 10px ${color}`;
    const inicio = props.inicio
    const [luz,setLuz] = useState(inicio)

    function ilumination (){
        if (luz==="apagado"){
            setLuz("enscendido")}
        else{
            setLuz("apagado")}
    };

    useEffect(()=>{
        const timer = setInterval(ilumination,3000);
        return()=> clearInterval(timer);
    })

    function enscendido(e){
		console.log(e.target.id)
        ilumination()
    }
    if(luz==="apagado")
        return (<div className="luz" inicio={luz} id={id} style={{background:color}}  onMouseOver={enscendido} onClick={enscendido}></div>)
    else if(luz==="enscendido")
        return (<div className="luz" inicio={luz} id={id} style={{background:color, boxShadow:shadow}}  onMouseOver={enscendido} onClick={enscendido}></div>)

}