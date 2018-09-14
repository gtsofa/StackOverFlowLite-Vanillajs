// Create user sign up
document.getElementById('sign_up').addEventListener('submit', createUser);

// create createUser function
function createUser(){
    let fullname = document.getElementById('fullname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;

    fetch('https://gtsofastackoverflowlite.herokuapp.com/api/v2/auth/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({fullname:fullname, username:username, email:email, password:password, 
            confirm_password:confirm_password})
    })
    .then((respon) => respon.json())
    .then((data) => {
        // if response data is not defined
        if (data.respon != undefined){
            document.getElementById('output').style.color = 'red'
            document.getElementById('output').innerHTML = data.respon
        }
        // if response data is successfully
        if (data.respon === 'User has been created successfully'){
            window.location.href = 'log_in.html'
        }
    })

    
}
