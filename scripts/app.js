let peopleArray = [];

const peopleData = async () => {
    const promise = await fetch ('../data/data.json');
    const data = await promise.json();
    peopleArray = data.People;
    console.log(peopleArray);
}

let tenBtn = document.getElementById("tenBtn");
let twentyBtn = document.getElementById("twentyBtn");
let thirtyBtn = document.getElementById("thirtyBtn");
let fourtyBtn = document.getElementById("fourtyBtn");
let fiftyBtn = document.getElementById("fiftyBtn");

let idBtn = document.getElementById("idBtn");
let firstNameBtn = document.getElementById("firstNameBtn");
let lastNameBtn = document.getElementById("lastNameBtn");
let heightBtn = document.getElementById("heightBtn");
let ageBtn = document.getElementById("ageBtn");

let injectHere = document.getElementById("injectHere");

tenBtn.addEventListener('click', function(e){
    peopleData();
    for(let i = 0; i < peopleData.length; i++){
        let tr = document.createElement("tr");
        injectHere.appendChild(tr);
        tr.textContent = `${peopleData}`;
    }
   
});

twentyBtn.addEventListener('click', function(e){

});

thirtyBtn.addEventListener('click', function(e){

});

fourtyBtn.addEventListener('click', function(e){

});

fiftyBtn.addEventListener('click', function(e){

});


idBtn.addEventListener('click', function(e){

});

firstNameBtn.addEventListener('click', function(e){

});

lastNameBtn.addEventListener('click', function(e){

});

heightBtn.addEventListener('click', function(e){

});

ageBtn.addEventListener('click', function(e){

});