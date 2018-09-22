
// register a user
function signupForm(event){
    event.preventDefault();

    // let prefixUrl = 'http://play3-maestrogtsofa.c9users.io:8080/api/v2';
    // local http://127.0.0.1:5000/api/v2

    // Create a POST request
    fetch('http://127.0.0.1:5000/api/v2/auth/register', {
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

// log in a registered user
function loginUser(event){
    event.preventDefault();

    // create a POST request on log in
    // c9: http://play3-maestrogtsofa.c9users.io:8080/api/v2
    // local : http://127.0.0.1:5000/api/v2
    let prefixUrl = 'http://127.0.0.1:5000/api/v2';
    fetch(`${prefixUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        })
    })
    .then(data => data.json())
    .then(data => {
        if (data){
            token = data.token
            localStorage.setItem('token', token)
            console.log(localStorage.getItem('token'))
            redirect: window.location.replace("../questions/questions.html")
        }
        else{
            alert("Invalid email or password")
        }
    })
    .catch(error => console.error('Error', error))

}

let logUser = document.getElementById('loginUser')
logUser.addEventListener('submit', loginUser)


