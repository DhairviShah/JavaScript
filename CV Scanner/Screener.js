console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

// this function provides data of the person i.e. profiles
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }

        }
    };
}
const candidates = cvIterator(data);
nextCv();

let next = document.getElementById("next");
next.addEventListener("click", nextCv);

// this function brings in next cv when next is clicked on 

function nextCv() {
    const currentcandidate = candidates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if (currentcandidate != undefined) {
        image.innerHTML = `<img src="${currentcandidate.image}">`
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentcandidate.name}</li>
    <li class="list-group-item">Age: ${currentcandidate.age} years old.</li>
    <li class="list-group-item">City:Lives in  ${currentcandidate.city}</li>
    <li class="list-group-item">Language: Works primarily on ${currentcandidate.language}</li>
    <li class="list-group-item">Framework: With ${currentcandidate.framework} framework</li>
    </ul>`;
    }
    else {

        // Alert to showw end and then page is reloaded from the first cv again

        alert("End of Applications");
        window.location.reload();
    }
}