// get single user profile

function getSingleUser(event){
    event.preventDefault();

    // c9 http://play3-maestrogtsofa.c9users.io:8080/api/v2
    // locally http://127.0.0.1:5000/api/v2

    let token = window.localStorage.getItem('token')
    // let username = window.localStorage.getItem('user_id')

    // GET single user profile request
    fetch('http://127.0.0.1:5000/api/v2/my-questions' , {
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
        let result = ``
        data.questions.forEach((question) =>{
            const {question_title, date_created, question_id, user_id } = question;
            result +=
        `
        <table>
            <tr>
                <td><h1>User's profile</h1></td>
                <!--<td><img src="img/profile-image.png" widht="100" height="70"></img></td>-->
            </tr>
            <tr>
                <td><p><img src="../img/man1.jpeg"></p></td>
                <td>
                    
                    <p><b>name:</b>${user_id}</p>
                    <p><b>Location:</b> Watamu</p>
                    <p><b>Email:</b> maestro@stackoverflowlite.com</p>
                </td>
                <td>1 Question.</td>
                <td> |</td>
                <td> 10 Answers</td>
            </tr>
            <tr>
                <td>
                    <ul class="question-stats">
                
                <p><a href="most_answers.html">Most Answers</a> | <a href="recently_questions.html">Recently Questions</a></p>
            </ul>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="#"><b>${question_title}</b></a>
                    
                </td>
                <td>1 Answers</td>
                <td>0 Votes.</td>
                <td><p>${date_created}</p></td>
            </tr>
            
</table>
        `
        document.getElementById('result').innerHTML = result;

    });

    })
    .catch(error => console.log('Error', error))
}