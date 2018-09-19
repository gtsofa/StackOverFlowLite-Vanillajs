
// register a user
let registerUser = document.getElementById('signupForm')
if (registerUser){
    registerUser.addEventListener('submit', signupForm);
}

function signupForm(event){
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;

    let signup_data = {
        username: username,
        email:username,
        password:password,
        confirm_password:confirm_password
        
    };
    
    // let prefixUrl = 'http://127.0.0.1:5000/api/v2';
    // Create a POST request
    fetch('http://127.0.0.1:5000/api/v2/auth/register', {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-type': 'application/json'
        },
        body: JSON.stringify(signup_data)
    })
    .then((respon) => respon.json())
    .then((data) => {
        // if response data is success
        if (data.response === "User registered successfully"){
            window.location.href = 'log_in.html'; // redirect to log in to activate account
        }
        // if response data is not success
        if (data.response != undefined){
            document.getElementById('results').style.color = 'red'
            document.getElementById('results').innerHTML = data.response
        }
    })
}

// create user log in function
let logUser = document.getElementById('loginUser')
if (logUser){
    logUser.addEventListener('submit', loginUser)
}
function loginUser(event){
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // create a POST request on log in
    fetch('http://127.0.0.1:5000/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({username:username, password:password})
    })
    .then((respon) => respon.json())
    .then((data) => {
        if (data.response === 'Login successfully'){
            // redirect to  questions page
            window.localStorage.setItem('token', data.token);
            window.location.href = 'questions.html';
        }
        // undefined give warning
        if (data.response == undefined){
            document.getElementById('results').style.color = 'red'
            document.getElementById('results').innerHTML = data.response
        }
    })

}
