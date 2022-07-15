import React from 'react'
import quiz from './quiz.svg'

export const HeaderComponent = () => {
    return (
        //centered the header
        <div className="col-md-12 py-3 text-center">
            Estas listo para el quiz?
            <img src={quiz}></img>
        </div>
    )
}
