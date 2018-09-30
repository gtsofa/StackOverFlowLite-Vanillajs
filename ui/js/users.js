// document.getElementById('getAllUsers').addEventListener('click', getAllUsers)
// get register users 

function getAllUsers(event){
    event.preventDefault();

     // c9 http://play3-maestrogtsofa.c9users.io:8080/api/v2
    // locally http://127.0.0.1:5000/api/v2
    const token = window.localStorage.getItem('token')

    // Get all users on the app
    fetch('http://127.0.0.1:5000/api/v2/auth/users', {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'x-access-token': token

        }

    })
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        let result = `<h3 style="padding-left:20%;">users Profile</h3>`;
            data.users.forEach((user) => {
                const {username, user_id} = user;
                result +=
                `<table>
                <tr>
                        <td class="user-cell">
                                <img src="../img/man1.jpeg">
                                <h3><a class="user-class" href="#" data-id=${user_id}>${username}</a></h3>
                                <p>Watamu, Nairobi</p>
                                <p>001</p>
                                <p><a href="firebase.html">firebase</a> | <a href="linux.html">Linux</a> | <a href="window.html">Windows</a></p>
                        </td>
                        
                        
                </tr>    
                
                  </table>`
                  document.getElementById('result').innerHTML = result;
            })

    })
    .catch(error => console.log('Error', error))
}


// //  document.getElementById('getusers').addEventListener('click', getusers);
// // document.getElementById('getAllQuestions').addEventListener('click', getAllQuestions);

window.onclick = event => {
    window.localStorage.setItem("user_id", event.target.getAttribute("data-id"))
    redirect: window.location.replace("/ui/users/single_user.html")
}