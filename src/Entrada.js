import { useState } from "react";

export default function Entrada({name}){
    const[Volume, setVolume] = useState(0);

    const diminuir = () => {
        if(Volume !== 0){
            setVolume(Volume - 1);
        }
    }

    const aumentar = () => {
        if(Volume < 10){
            setVolume(Volume + 1)
        }
    }
    return(
        < div className="border" style={{padding:15}}>
            <p>{name}</p>
            <hr></hr>
            <div className="flex." >
                <button className = "btn btn-danger" onClick={diminuir}>-</button>
                <span style = {{margin:150}}>{Volume}</span>
                <button className = "btn btn-primary" onClick={aumentar}>+</button>
            </div>
            <br></br>
        </div>
    );
}