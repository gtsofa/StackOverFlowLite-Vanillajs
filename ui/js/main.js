// eventListener to handle submit button on sign up form
document.getElementById('signUp').addEventListener('submit', signUp);
// document.getElementById('logIn').addEventListener('submit', logIn);



// create sign up function
function signUp(event){
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;

    fetch('http://127.0.0.1:5000/auth/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({username:username, email:email, password:password, 
            confirm_password:confirm_password})
    })
    .then(respon => respon.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.log('Error:', error));

    
}

// create log in function
function logIn(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch('http://127.0.0.1:5000/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({username:username, password:password})
    })
    .then((respon) => {
        status_code = respon.status
        return respon.json()
    })
    .then((data) => {
        if (data.status_code == 200){
            alert(respon.Message)
            token = respon.token
            localStorage.setItem('token', token)
            console.log(localStorage.getItem('token'))
            window.location = 'index.html';
        }
        if (data.status_code == 400){
            alert(respon.Message)
        }
        if (data.status_code == 401){
            alert(respon.Message)
        }
    })
    .catch((err) => console.log(err))

}
