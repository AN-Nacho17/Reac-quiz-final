import React, { useState } from 'react'
import { useRef } from 'react'

export const FormComponent = () => {

    const [name, setNameState] = useState("");

    const setName = (newName, e) => {
        e.preventDefault();
        setNameState(newName);
    }

    const clearInput = (e) => {
        e.preventDefault();
        inputRef.current.value = "";
    }

    const inputRef = useRef("inputRef");

    return (
        //form component
        <div className="row container">
            <div className="col-md-12 py-3 text-center">
                <form onSubmit={e => clearInput(e)}>
                    <div className="form-group">
                        <input ref={inputRef} onChange={e => setName(e.target.value, e)} type="text" className="form-control text-center" id="name" placeholder="Ingresa tu nombre" />
                    </div>
                </form>
            </div>
            <div className="col-md-12 py-3 text-center">
                <h1>Bienvenido {name} !</h1>
            </div>
        </div>
    )
}
