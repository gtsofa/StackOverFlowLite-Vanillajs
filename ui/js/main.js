var registerform = document.getElementById('signup-form')

registerform.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    
    let signup_data = {
        username: username,
        email:username,
        password:password,
        confirm_password:confirm_password
        
    };
    
    // let prefixUrl = 'http://127.0.0.1:5000/api/v2';
    
    fetch('http://127.0.0.1:5000/api/v2/auth/register', {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-type': 'application/json'
        },
        body: JSON.stringify(signup_data)
    })
    .then((respon) => {
        status_code = respon.status
        return respon.json()
    })
    .then((data) => {
        // if response data is success
        if (data.status_code === 200){
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

    
});

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
