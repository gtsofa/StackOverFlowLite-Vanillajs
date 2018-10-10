// post a question
let question = document.getElementById('postQuestion')
question.addEventListener('submit', postQuestion);

function postQuestion(event){
    event.preventDefault();
    let token = window.localStorage.getItem('token');

    // c9 http://play3-maestrogtsofa.c9users.io:8080/api/v2
    // locally http://127.0.0.1:5000/api/v2
    
    // POST request
    fetch('http://127.0.0.1:5000/api/v2/questions', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify({
            question_title: document.getElementById('questiontitle').value,
            question_desc: document.getElementById('questiondesc').value
        })
        

    })
    .then(data => data.json())
    .then(response => {
        console.log(response)
        redirect: window.location.replace("../users/profile.html")
    })
    .catch(error => console.error('Error', error))


}

