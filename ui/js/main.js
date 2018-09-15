// eventListener to handle submit button on sign up form
document.getElementById('signUp').addEventListener('submit', signUp);



// create sign up function
function signUp(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;

    fetch('https://gtsofastackoverflowlite.herokuapp.com/api/v2/auth/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({username:username, email:email, password:password, 
            confirm_password:confirm_password})
    })
    .then((respon) => {
        status_code = respon.status
        return respon.json()
    })
    .then((data) => {
        // if response data is success
        if (data.status_code == 201){
            alert(respon.Message)
            window.location.href = 'log_in.html';
        }
        // if response data is not success
        if (data.status_code == 400){
            alert(respon.Message)
        }
        console.log(respon.Message)
    })
    .catch((err)=> console.log(err))

    
}

// create log in function
document.getElementById('login').addEventListener('submit', logIn);
function logIn(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch('https://gtsofastackoverflowlite.herokuapp.com/api/v2/auth/login', {
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
