import React from 'react'
import { useRef } from 'react';


export const QuestionComponent = () => {

    const questions = [
        { text: 'What is your name?', answers: ['John', 'Jane', 'Bob', 'Jane'], correct: 'Jane' },
        { text: 'What is your name?', answers: ['John', 'Jane', 'Bob', 'Jane'], correct: 'Jane' },
        { text: 'What is your name?', answers: ['John', 'Jane', 'Bob', 'Jane'], correct: 'Jane' },
    ];

    const userAnswers = [
    ];


    const setNewAnswer = (questionIndex, answer) => {
        userAnswers[questionIndex] = answer;
        console.log("userAnswers", userAnswers);
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
                                    <h6 className="card-title text-dark">{question.text}
                                    </h6>
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
        </div>
    )


    // return (
    //     <div className="question-container col-md-12">
    //         {
    //             questions.map((question, index) => {
    //                 <div className="card">
    //                     <div className="card-body">
    //                         <h5 className="card-title">Question</h5>
    //                         <p className="card-text">{question.text}</p>
    //                         <ul className="list-group">
    //                             {question.answers.map(answer => (
    //                                 <li className="list-group-item" key={index}>{answer}</li>
    //                             ))}
    //                         </ul>
    //                     </div>
    //                 </div>
    //             })
    //         }
    //     </div>
    // )
}

