import React, { useState, useEffect } from 'react'

export default function Luz (props){
    const id = parseInt(props.id)
    const shadow = '0 0 100px 10px rgba(242, 255, 0, 0.884)';
    const color = props.color;
    const inicio = props.inicio
    const [luz,setLuz] = useState(inicio)


    console.log(luz)

    useEffect(()=>{
        const ilumination = ()=>{
        if (luz==="apagado"){
            setLuz("enscendido");console.log(luz)}
        else{
            setLuz("apagado");console.log(luz)}
        };

        const timer = setInterval(ilumination,3000);
        return()=> clearInterval(timer);
    })



    function enscendido(e){
		console.log(e.target.id)
      //  e.target.style.boxShadow = '0 0 100px 10px rgba(242, 255, 0, 0.884)';
        setLuz("enscendido")
    }

         /*   if(globalTimer===3)
            setGlobalTimer(1)
        else
            setGlobalTimer(globalTimer+1)
        
         
        
        */

        if(luz==="apagado")
            return (<div className="luz" inicio={luz} id={id} style={{background:color}}  onMouseMove={enscendido}></div>)
        else if(luz==="enscendido")
            return (<div className="luz" inicio={luz} id={id} style={{background:color, boxShadow:shadow}}  onMouseMove={enscendido}></div>)

}