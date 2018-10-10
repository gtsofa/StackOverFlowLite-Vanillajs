// get all questions
// let getallquestions = document.getElementById('que')
// getallquestions.addEventListener('click', getallquestions)

function getAllQuestions(event){
    event.preventDefault();

     // c9 http://play3-maestrogtsofa.c9users.io:8080/api/v2
    // locally http://127.0.0.1:5000/api/v2

    // Get all questions request
    fetch('http://127.0.0.1:5000/api/v2/questions', {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        }

    })
    .then(res => res.json())
    .then((data) => {

        let result = ``;
            data.questions.forEach((question) => {
                const {question_title, date_created, question_id, user_id } = question;
                result += 
                    `<table>
                        <tr>
                            <td>
                                <h3><a href="#" data-id=${question_id}>${question_title}</a></h3>
                            </td>
                            <td>${date_created}</td>
                            <td>${user_id}</td>
                            <td>3 answers 0 votes</td>
                        </tr>
                    </table>`
                    document.getElementById('result').innerHTML = result;
            
        
        });
        
    })
    .catch(error => console.log('Error', error))

}

// document.getElementById('getAllQuestions').addEventListener('click', getAllQuestions);