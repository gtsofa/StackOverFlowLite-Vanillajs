// get single user profile

function getSingleUser(event) {
    event.preventDefault();

    // c9 http://play3-maestrogtsofa.c9users.io:8080/api/v2
    // locally http://127.0.0.1:5000/api/v2

    let token = window.localStorage.getItem('token')
    let username = window.localStorage.getItem('username')
    const questionId = window.localStorage.getItem('question_id')

    // GET single user profile request
    fetch('http://127.0.0.1:5000/api/v2/my-questions', {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'x-access-token': token
        }
    })
        .then(res => res.json())
        .then((data) => {

            console.log(data);
            let result = `
                <h1>User's profile</h1>
                <hr>
                <p><img src="../img/man1.jpeg"></p>
                <hr>
                <p>Name: ${username}</p>
                <hr>
                <p>1 Answers | 0 Votes</p>
                <hr>
                <p><a href="most_answers.html">Most Answers</a> | <a href="recently_questions.html">Recently Questions</a></p>
                
                


            `
            data.questions.forEach((question) => {
                const { question_title, date_created, question_id, user_id } = question;
                result +=
                    `
        <table>
            
            <tr>
                <td>
                    <a class="question-class" href="#" data-id=${question_id}><b>${question_title}</b></a>
                    <p>${date_created}</p>
                    <p><button class="crud-button" id="editquest">&#9998; Edit</button>
                     <button id="${question_id}" class="crud-button delete-question">&#10060; Delete</button> </p>
                    
                </td>
            
            </tr>
            
</table>
        `
                document.getElementById('result').innerHTML = result;

            });

        })
        .catch(error => console.log('Error', error))

}


