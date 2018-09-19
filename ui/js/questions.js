// post a question
let question = document.getElementById('postQuestion')
question.addEventListener('submit', postQuestion);

function postQuestion(event){
    event.preventDefault();

    let questiontitle = document.getElementById('questiontitle').value;
    let question_desc = document.getElementById('question_desc')
    let token = window.localStorage.getItem('token');

    // POST request
    fetch('http://127.0.0.1:5000/questions', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'token': token
        },
        body: JSON.stringify({
            questiontitle:questiontitle,
            question_desc:question_desc
        })
        .then((respon) => respon.json())
        .then((data) => {
            if(data.response === 'Question successfully posted'){
                document.getElementById('results').style.color = 'green'
                document.getElementById('results').innerHTML = data.response
            }
            if(data.response == undefined){
                document.getElementById('results').style.color = 'red'
                document.getElementById('results').innerHTML = data.response
                
            }
        })

    })


}
