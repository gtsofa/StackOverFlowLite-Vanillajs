
// register a user
function signupForm(event){
    event.preventDefault();

    let prefixUrl = 'http://127.0.0.1:5000/api/v2';

    // Create a POST request
    fetch(`${prefixUrl}/auth/register`, {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            email:  document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirm_password:document.getElementById('confirm_password').value

        })
    })
    .then(data => data.json())
    .then(data => {console.log(data)})
    .catch(error => console.error('Error:', error))
}

let registerUser = document.getElementById('signupForm')

registerUser.addEventListener('submit', signupForm);


