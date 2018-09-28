// get a single question

function getSingleQuestion(event) {
    event.preventDefault();
    // c9 http://play3-maestrogtsofa.c9users.io:8080/api/v2
    // locally http://127.0.0.1:5000/api/v2

    const questionId = window.localStorage.getItem('question_id')

    // get single question request
    fetch('http://127.0.0.1:5000/api/v2/questions/'+questionId, {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        } 
    })
    .then(res => res.json())
    .then((data) => {

        console.log(data);
        let result = `
        <table>
  <tr>
    <td>
        <h3>${data.question_title}</h3>
        <!-- <div class="vote">
            <input>
        </div> -->
        <p>${data.question_desc}</p>
            <button class="votes" id="upvote">&#8593; upvote</button>
            <button class="votes" id="downvote">&#8595; downvote</button>
            <button class="votes" id="deletequestion">&#10008; delete</button>
        <p>Posted on ${data.date_created} by <a href="#">${data.user_id}</a></p>
    </td>
  </tr>
  <tr>
        <td class="answer" style="color:#3498db;"><b>1</b> <emp>answer</emp></td> 
  </tr>
  <tr>
        <td>
            <!-- <div class="vote">
                <input>
            </div> -->
            <p>The fact remains loreps sim ret jst is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The fact remains loreps sim ret jst is a long established fact that goes home.</p>
            
            <button class="votes" id="updateanswer">&#9998; update answer</button>
            <button class="votes" id="acceptanswer">&#10004; Accept Answer</button>
            <p>Answered on ${data.date_created} by <a href="#">${data.user_id}</a></p>
            <p class="answer" style="color:#3498db;"> <a href="#" id="comment">add a comment</a></p>
        </td>
      </tr>
</table>
        `
        document.getElementById('result').innerHTML = result;
    })
    .catch(error => console.log('Error', error))
}