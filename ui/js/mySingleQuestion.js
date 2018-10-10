//delete a question function
document.getElementById('result').addEventListener('click', handleQuestions);
let token = window.localStorage.getItem('token')

function handleQuestions(e) {
    const target = e.target;
    const questionID = target.getAttribute('id');
    if (target.classList.contains('delete-question')) {
        fetch('http://127.0.0.1:5000/api/v2/questions/' + questionID, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'x-access-token': token
            }
        })
        .then(data => {
            window.location.reload(true);
        })
    }
}