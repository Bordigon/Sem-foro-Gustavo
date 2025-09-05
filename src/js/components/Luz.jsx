import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

export default function Luz (props){
    const color = [`hola`,`red`,`yellow`,`green`]
    const shadow = `0 0 100px 10px`;
    const inicio = props.inicio
    const [luz,setLuz] = useState(inicio)
    const [inicioAux, setInicioAux] = useState([shadow,shadow,shadow])

    function iluminationAux (id){
        let array0=[]
        for(let t=1;t<=inicioAux.length;t++){
            let arrayDeFor;
            if(t==id){
                let arrayDeIf = (shadow + ` ` + color[t])
                arrayDeFor = array0.concat(arrayDeIf);
            }
            else{
                let arrayDeElse = shadow
                arrayDeFor = array0.concat(arrayDeElse)
            }
            array0 = arrayDeFor;
        }
        return setInicioAux(array0)
    }

    function ilumination (){
        if (luz==="apagado"){
            setLuz("enscendido")}
        else{
            setLuz("apagado")}
    };
    
    function enscendido(e){
        let id = e.target.id-1;
        console.log(id)
        if(inicioAux[id]===shadow)
            iluminationAux(e.target.id)
        else
            iluminationAux(4)
    }

  /*  if(luz==="apagado")
        return (<div className="luz" inicio={luz} id={id} style={{background:color}}  onClick={enscendido}></div>)
    else if(luz==="enscendido")
        return (<div className="luz" inicio={luz} id={id} style={{background:color, boxShadow:shadow}}  onClick={enscendido}></div>)
    */

console.log(color)
console.log(inicioAux)
    return (
        <>
        <div className="luz" color="red" id="1" style={{background:'red', boxShadow:inicioAux[0]}}  onClick={enscendido}></div>
        <div className="luz" color="yellow" id="2" style={{background:'yellow', boxShadow:inicioAux[1]}}  onClick={enscendido}></div>
        <div className="luz" color="green" id="3" style={{background:'green', boxShadow:inicioAux[2]}}  onClick={enscendido}></div>
        </>
    )

}