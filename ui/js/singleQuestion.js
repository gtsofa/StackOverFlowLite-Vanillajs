// get a single question

// let questionId = document.getElementById('getSingleQuestion')
// questionId.addEventListener('click', getSingleQuestion);


// questionId.addEventListener('click', getSingleQuestion);


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
    </td>
  </tr>
  <tr>
        <td class="answer" style="color:#3498db;"><b>1</b> <emp>answers</emp></td>
        <td style="font-size:12px; color:#3498db;"><b>asked</b> <strong>19/08/2018</strong> </td> 
  </tr>
  <tr>
        <td>
            <!-- <div class="vote">
                <input>
            </div> -->
            <p>The fact remains loreps sim ret jst is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The fact remains loreps sim ret jst is a long established fact that goes home.</p>
        </td>
      </tr>
      <tr>
            <td class="answer" style="color:#3498db;"> <a href="#">Improve this answer</a></td>
            <td class="answer" style="color:#3498db;"> <a href="#">add a comment</a></td>
            <td style="font-size:12px; color:#3498db;"><b>answered</b> <strong>21/08/2018</strong> </td> 
      </tr>

      
</table>
        `
        document.getElementById('result').innerHTML = result;


        
    })
    .catch(error => console.log('Error', error))
}