console.log("welcome to virtual library");
showbooks();

// this function helps in getting booklist from user 
function booklist(bookName, author, type) {
    this.name = bookName;
    this.author = author;
    this.category = type;

}

// prototype usage of display

function display() {

}

// function to add book

display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <th scope="row">*</th>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// function to clear the form after adding previous book for new entry

display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();

}


// Validation measures for entry

display.prototype.validate = function (book){
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}

// function for showing added books

display.prototype.show = function (alert,showmsg)
{
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${alert} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${showmsg}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
setTimeout(function () {
message.innerHTML = ''
}, 5000);
}


let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);


// function for form submittion without any errors

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('Fiction');
    let science = document.getElementById('Science');
    let Romance = document.getElementById('Romance');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (science.checked) {
        type = science.value;
    }
    else if (Romance.checked) {
        type = Romance.value;
    }

    let book = new booklist(name, author, type);
    let Display = new display();
    if (Display.validate(book)) {

        Display.add(book);
        Display.clear();
        Display.show("success","your book is added succesfully.");
        let books = localStorage.getItem("books");
        if (books == null) {
            booksObj = [];

        }
        else {
            booksObj = JSON.parse(books);

        }

        let myObj = {
            Name: name,
            Author: author,
            Type: type

        }
        booksObj.push(myObj);

        localStorage.setItem("books", JSON.stringify(booksObj));
        Name = "";
        Author = "";
        Type = "";
        
    }
    else{
        Display.show("error","you cannot enter book.");
    }


    e.preventDefault();

}

// Function to display booklist from local storage even after refresh

function showbooks() {
    let books = localStorage.getItem("books");
    if (books == null) {
        booksObj = [];

    }
    else {
        booksObj = JSON.parse(books);
    }
    html = "";
    booksObj.forEach(function (book) {
        html += `
        <tr>
        <th scope="row">*</th>
        <td>${book.Name}</td>
        <td>${book.Author}</td>
        <td>${book.Type}</td>
        </tr>
        `;
    });
    let bookselem = document.getElementById('tableBody');
    if (booksObj.length != null) {
        bookselem.innerHTML = html;
    }
    else {
        bookselem.innerHTML = `Nothing to show!!`
    }
}