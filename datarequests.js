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


let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let classRoomAverage = average(grades);
let boysAverage = average(getBoys(grades));
let girlsAverage = average(getGirls(grades));
let highGrade = maxGrade(grades);
let lowGrade = minGrade(grades);
let highGradeB = maxGrade(getBoys(grades));
let highGradeG = maxGrade(getGirls(grades));
let lowGradeB = minGrade(getBoys(grades));
let lowGradeG = minGrade(getGirls(grades));

