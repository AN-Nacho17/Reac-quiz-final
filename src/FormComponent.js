import React, { useState } from 'react'
import { useRef } from 'react';

export const FormComponent = () => {

    const [name, setNameState] = useState("");

    const setName = (newName) => {
        setNameState(newName);
    }

    const setFinalName = (e) => {
        e.preventDefault();
        inputField.current.value = "";
    }

    const inputField = useRef("inputField");

    return (
        //form component
        <div className="row container">
            <div className="col-md-12 py-3 text-center">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input ref={inputField} onChange={e => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" />
                    </div>
                    <button onClick={setFinalName} type="submit" className="btn btn-primary">Iniciar</button>
                </form>
            </div>
            <div className="col-md-12 py-3 text-center">
                <h1>Bienvenido ! {name}</h1>
            </div>
        </div>
    )
}
