// get a single question

async function getSingleQuestion(event) {
    event.preventDefault();
    // c9 http://play3-maestrogtsofa.c9users.io:8080/api/v2
    // locally http://127.0.0.1:5000/api/v2

    const questionId = window.localStorage.getItem('question_id')

    const getQuestion = await fetch('http://127.0.0.1:5000/api/v2/questions/' + questionId, {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        }
    })
    const getAnswer = await fetch('http://127.0.0.1:5000/api/v2/questions/' + questionId + '/answers', {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        }
    })

    const question = await getQuestion.json();
    const answers = await getAnswer.json();

    let output = `
    <table>
      <tr>
        <td>
            <h3>${question.question_title}</h3>
            <!-- <div class="vote">
                <input>
            </div> -->
            <p>${question.question_desc}</p>
                <button class="votes" id="upvote">&#8593; upvote</button>
                <button class="votes" id="downvote">&#8595; downvote</button>
            <p>Posted on ${question.date_created} by <a href="#">${question.user_id}</a></p>
        </td>
      </tr>
      <tr>
            <td class="answer" style="color:#3498db;"><b>1</b> <emp>answer</emp></td> 
      </tr>
      
      </table>
      <div id="answersWrapper">`;
    console.log(answers);
    answers.answers.forEach(answer => {
        output += `<br>
            <ul>
                <li>
                    <p>${answer.answer_text}</p>
                    <p>${answer.date_created}</p>
                    <p>${answer.preffered ? 'Solution' : ''}</p>
                </li>
            </ul>
          </div>
          `;
    });
    output += '</div>';

    document.getElementById('result').innerHTML = output;
}

let answer = document.getElementById('postAnswer')
answer.addEventListener('submit', postAnswer);
// post answer to a question
function postAnswer(event) {
    event.preventDefault();

    const questionId = window.localStorage.getItem('question_id')
    let token = window.localStorage.getItem('token')

    // post answer request to a single question
    fetch('http://127.0.0.1:5000/api/v2/questions/' + questionId + '/answers', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify({
            answer_text: document.getElementById('answerText').value
        })
    })
        .then(res => res.json())
        .then(data => {
            getSingleQuestion(event)
            // console.log(data);
            // if (data.message === 'Answer successfully posted') {

            //     loadanswers(answer.answer_text, answer.date_created, answer.preffered )
            //     const answersWrapper = document.getElementById('answersWrapper');
            //     fetch('http://127.0.0.1:5000/api/v2/questions/' + questionId + '/answers', {
            //         method: 'GET',
            //         headers: {
            //             'Accept': 'application/json, text/plain, */*',
            //             'Content-type': 'application/json'
            //         }
            //     })
            //     .then(response => {
            //         response.json().then(data => {
            //         const answersWrapper = document.getElementById('answersWrapper');
            //         answersWrapper.innerHTML = "";
            //         for ( const i in data.answers){
            //             console.log(data.answers[i].answer_text)
            //         loadanswers(data.answers[i].answer_text, data.answers[i].date_created, data.answers[i].preffered )
            //         }

            //     })
            // })

                //     let answer;
                // answers.answers.forEach(answer => {
                //     answer += `
                //     <ul>
                //         <li>
                //             <p>${answer.answer_text}</p>
                //             <p>${answer.date_created}</p>
                //             <p>${answer.preffered ? 'Solution' : ''}</p>
                //         </li>
                //     </ul>
                //     `;
                // });
                // answersWrapper.innerHTML = answers;
               

                
            })
        .catch(error => console.log('Error', error))

}
// event handlers


const loadanswers = (text, date, preferred) => {
    elem = document.createElement('div')

    elem.innerHTML = `
    <ul>
        <li>
            <p>${answer.answer_text}</p>
            <p>${answer.date_created}</p>
            <p>${answer.preffered ? 'Solution' : ''}</p>
        </li>
    </ul>
    `;

    const answersWrapper = document.getElementById('answersWrapper');

    answersWrapper.appendChild(elem)


}