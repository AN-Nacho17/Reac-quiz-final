import React from 'react'
import { useRef } from 'react';
import Swal from 'sweetalert2';


export const QuestionComponent = () => {

    const questions = [

        { text: 'Cual es el imperio mas grande de la historia?', answers: ['Britanico', 'Mongol', 'Espanol', 'Romano'], correct: 'Britanico' },

        { text: 'En que año termino la II Guerra Mundial', answers: ['1919', '1856', '1989', '1945'], correct: '1945' },

        { text: 'En que año fue la llegada de Cristobal Colon a America?', answers: ['1492', '1502', '1500', '1500'], correct: '1492' },

        { text: 'Cual de los siguientes paises no estuvo involucrado en la II guerra mundial?', answers: ['EEUU', 'China', 'URSS', 'Vietnam'], correct: 'Vietnam' },

        { text: 'Cual fue el primer de Costa Rica', answers: ['Juanito Mora', 'Carlos Alvarado', 'Braulio Carrillo', 'Jose M. Castro Madriz'], correct: 'Jose M. Castro Madriz' },

    ];

    const userAnswers = [
    ];


    const setNewAnswer = (questionIndex, answer) => {
        userAnswers[questionIndex] = answer;
        console.log("userAnswers", userAnswers);
    }

    const checkQuiz = () => {
        let correctAnswers = 0;
        let totalQuestions = questions.length;
        for (let i = 0; i < questions.length; i++) {
            if (userAnswers[i] == questions[i].correct) {
                correctAnswers++;
            }
        }
        Swal.fire('Quiz Results', `You got ${correctAnswers} out of ${totalQuestions} questions correct`, 'success');
    }

    return (
        //question list
        <div className="question-list col-md-6">
            <h3>Que tanto sabes de historia ?</h3>
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
                                                <div key={index} className="form-check">
                                                    <input type="radio" className="question-answer text-dark"
                                                        name={radioName}
                                                        value={answer}
                                                        onChange={e => setNewAnswer(questionIndex, e.target.value)}
                                                    />
                                                    <label className="form-check-label text-dark px-5">{answer}</label>
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
            <div className="col-md-6">
                <div className="text-center">
                    <button onClick={e => checkQuiz()} className="btn btn-primary btn-lg">Submit</button>
                </div>
            </div>
        </div>
    )

}

