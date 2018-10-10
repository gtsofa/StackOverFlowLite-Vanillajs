

function getAllQuestions(event){
    event.preventDefault();

     // c9 http://play3-maestrogtsofa.c9users.io:8080/api/v2
    // locally http://127.0.0.1:5000/api/v2
    let username = window.localStorage.getItem('username')

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
                                <h3><a class="question-class" href="#" data-id=${question_id}>${question_title}</a></h3>
                                <p>Posted on ${date_created} by ${username}</p>
                                <p>1 answers | 0 votes</p>
                            </td>
                        </tr>
                    </table>`
                    document.getElementById('result').innerHTML = result;
            
        
        });
        
    })
    .catch(error => console.log('Error', error))

}

// document.getElementById('button').addEventListener('click', getAllQuestions);
// document.getElementById('getAllQuestions').addEventListener('click', getAllQuestions);

window.onclick = event => {
    
    // if (event.target.getAttribute("class") == "question-class"){
    //     window.localStorage.setItem("question_id", event.target.getAttribute("data-id"))
    //     redirect: window.location.replace("/ui/questions/single_question.html")
    // } else {
    //     return false
    // }
    window.localStorage.setItem("question_id", event.target.getAttribute("data-id"))
    redirect: window.location.replace("/ui/questions/single_question.html")
}