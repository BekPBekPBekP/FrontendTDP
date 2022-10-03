"use.strict"

const URL = "https://reqres.in/api/users";

fetch(URL)
.then(function(response){
    return response.json();
    
})
.then (function (data) {
    appendData(data.data);
})
.catch(function (err){
    console.error(err);
})

function appendData(data){
    let dataList = document.getElementById("myData");
    for(let i = 0; i<data.length; i++){
    let customer = document.createElement("div");
    let id2 = document.createElement("card");
    id2.innerText = "ID: " + data[i].id;
        
    }
}