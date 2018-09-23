// get a single question

let questionId = document.getElementById('getSingleQuestion')
questionId.addEventListener('click', getSingleQuestion);

// let questionId = window.localStorage.getItem('questionId')
// questionId.addEventListener('click', getSingleQuestion);

function getSingleQuestion(event) {
    event.preventDefault();
    // c9 http://play3-maestrogtsofa.c9users.io:8080/api/v2
    // locally http://127.0.0.1:5000/api/v2

    // get single question request
    fetch('http://127.0.0.1:5000/api/v2/questions/1', {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        } 
    })
    .then(res => res.json())
    .then(data => {
        // let result = ``;
        // // const { question_title, question_desc, date_created, user_id } = data.question;
        // const question = data.question;
        // const { question_title, question_desc, date_created, user_id } = question;
        // `<table>
        //     <tr>
        //         <td>
        //             <h3>${question_title}</h3>
        //             <p>${question_desc}</p>
        //         </td>
        //     </tr>
        // </table>`
        // document.getElementById('result').innerHTML = result;
        

        console.log(data);

    })
    .catch(error => console.log('Error', error))
}