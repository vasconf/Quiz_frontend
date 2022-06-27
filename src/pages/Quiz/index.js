import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import quizService from '../../api/services/QuizService'

import quizModel from '../../api/entities/QuizModel';

import '../Quiz/quiz.css'

 
export default function Quiz() {

        
        const [quizState, setQuizState] = useState(new quizModel())
        const [quiz, setQuiz] = useState([]);
     
        const acessToken = localStorage.getItem('acessToken');
                
        async function createNewQuiz(e) {
            e.preventDefault();
 
            try {
                const _quizService = new quizService();
                await _quizService.post({ endpoint: "quiz", entity: JSON.stringify(quizState) })
                localStorage.getItem('acessToken');
             
            } catch (error) {
             
            }
         }
         /****************************************************************************** */
         useEffect(() => {
            const _quizService = new quizService();
            _quizService.getAll({ endpoint: "quiz/asc/5/1", entity: JSON.stringify(quizState),
                   headers: {
                      Authorization: `Bearer ${acessToken}`
                   }
        }).then(response => {
            setQuizState(response.quizState)
        })
           }, [acessToken]);
          

    return (
        

 <div className='.container-fluid' id="container">
   <div className='.container-fluid' id='container_conteudo'>
    <header></header>

    <section id='container_perguntas'>
        <form id='card_pergunta' onChange={createNewQuiz}>
        <input class="card-title"
            placeholder=''
            value={quizState.title}
            onChange={e => setQuizState({ ...quizState, title: e.target.value })}
            />
            <input class="card-text"
            placeholder=''
            value={quizState.description}
            onChange={e => setQuizState({ ...quizState, description: e.target.value })}
            />
   
            <a type='submit' id="button" class="btn btn-primary">Add New Pergunt</a>
        </form>
       </section>

    <section id='container_quiz'>

    <ul>
        {quiz.map(quiz => (
        <li>
        <div class="card" id="card_quiz">
           <div class="card-body">
            <h5 class="card-title">{quizState.title}</h5>
            <p class="card-text">{quizState.description}</p>
           </div>
       </div>
        </li>
        ))}
    </ul>
    

    </section>
    

   </div>
 </div>

    )
 }





 