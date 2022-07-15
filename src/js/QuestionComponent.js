import React from 'react'
import Swal from 'sweetalert2';
import submit from '../svg/submit.svg';


export const QuestionComponent = () => {

    const questions = [

        { text: 'Como se llama el creador de Microsoft?', answers: ['Elon Musk', 'Steve Jobs', 'Mark Zuckerberg', 'Bill Gates'], correct: 'Bill Gates' },

        { text: 'Cual es el area de hardware mas rapida de una computadora?', answers: ['RAM', 'Cache de CPU', 'ALU', 'Disco Mecanico', 'Tarjeta de red'], correct: 'Cache de CPU' },

        { text: 'Que es Java?', answers: ['Un algoritmo', 'Un motor de base de datos', 'Un lenguaje de programacion', 'Un provedor de internet'], correct: 'Un lenguaje de programacion' },

        { text: 'Si deseo armar una computadora cuales componentes son indispensables?', answers: ['Software y Hardware', 'CPU y Place Madre', 'Sistema operativo y software  de aplicacion', 'Teclado y el mouse'], correct: 'CPU y Place Madre' },

        { text: 'Cual es el signifcado de las siglas CAD?', answers: ['Computer-aided design', 'Computer-assited design', 'Computer administration data'], correct: 'Computer-aided design' },

        { text: 'Cual es el codigo que comprende una computadora?', answers: ['Codigo C++', 'Codigo Binario', 'Codigo ASCII'], correct: 'Codigo Binario' }

    ];

    const userAnswers = [
    ];


    const setNewAnswer = (questionIndex, answer) => {
        userAnswers[questionIndex] = answer;
    }

    const checkQuiz = () => {
        let correctAnswers = 0;
        let totalQuestions = questions.length;
        for (let i = 0; i < questions.length; i++) {
            if (userAnswers[i] == questions[i].correct) {
                correctAnswers++;
            }
        }
        if (correctAnswers == 0) {
            //swal error
            Swal.fire({
                title: 'Error',
                text: 'No has contestado ninguna pregunta correctamente',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        } else {
            Swal.fire('Quiz Results', `You got ${correctAnswers} out of ${totalQuestions} questions correct`, 'success');
        }
    }

    return (
        //question list
        <div className="question-list col-md-6">
            {
                questions.map((question, questionIndex) => {
                    return (
                        <div key={questionIndex} className="question py-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-dark">{question.text}
                                    </h5>
                                    <div className="question-answers">
                                        {question.answers.map((answer, index) => {
                                            const radioName = `questionRadio-${questionIndex}`;
                                            return (
                                                //radio buttons
                                                <div key={index} className=" row form-check">
                                                    <label className="form-check-label text-dark px-5">
                                                        <input type="radio" className="question-answer text-dark"
                                                            name={radioName}
                                                            value={answer}
                                                            onChange={e => setNewAnswer(questionIndex, e.target.value)}
                                                        />
                                                        {answer}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="col-md-12 py-3">
                <div className="text-center">
                    <a onClick={e => checkQuiz()}>
                        <img src={submit} alt="submit" />
                    </a>
                </div>
            </div>
        </div >
    )
}

