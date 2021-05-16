console.log("welcome");
shownotes();
let addBtn = document.getElementById("addBtn");
// Adding eventlistener to add button to add notes
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle")
    let notes = localStorage.getItem("notes");
    //To check if notes is null or not
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);

    }

// pushing values in arrays

let myObj = {
title: addTitle.value,
text: addTxt.value
}
notesObj.push(myObj);

localStorage.setItem("notes", JSON.stringify(notesObj));
addTxt = "";
addTitle = "";
// console.log(notesObj);
shownotes();



})

//This function will help in displaying notes on site

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="notecard my-3 mx-3" style="width: 18rem;">

                <div class="card-body ">
                    <h5 class="card-title"> ${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id = '${index}'onclick="deletenote(this.id)" class="btn btn-primary" >Delete Note</button>
                </div>
            </div>`;
    });
    let noteselem = document.getElementById('notes');
    if (notesObj.length != null) {
        noteselem.innerHTML = html;
    }
    else {
        noteselem.innerHTML = `Nothing to show!!`
    }


}

// This function helps in deleting the notes
function deletenote(index) {
    // console.log("i am deleting");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    shownotes();
}

// this function helps in seraching the particular note

let searchTxt = document.getElementById("searchTxt")
searchTxt.addEventListener('input', function () {
    let inputval = searchTxt.value;
    // console.log("input triggered",inputval);
    let notecard = document.getElementsByClassName("notecard")
    Array.from(notecard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})