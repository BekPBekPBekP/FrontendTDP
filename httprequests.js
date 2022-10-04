"use.strict"

const URL = "https://reqres.in/api/users";

function getUsers() {
 axios.get(URL)
 .then(response => console.log(response))
.catch(error1 => console.error(error1));
}




// axios.post(URL, {
//      name: "Morpheus",
//      job: "Leader"
// })
//  .then(function (response) {
//      console.log(response);
//  })
//  .catch(function (error1) {
//      console.error(error1);
//  })

// const URL2 = "https://reqres.in/api/register";

// axios.post(URL2, {
//     email: "eve.holt@reqres.in",
//     password: "pistol"
// })
// .then(function (response) {
//     console.log(`Register-Successful ${response}`);
// })
// .catch(function (error1) {
//     console.error(error1);
// })


