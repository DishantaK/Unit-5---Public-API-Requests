// global 
const searchContainer = document.querySelector('div.search-container');
const searchBar = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
let people;
// create and append modal after gallery 



  

fetch(`https://randomuser.me/api/?results=12`) 
    .then(response => response.json())
    .then(data => {
        let users = data.results;

        users.forEach(element => {
            gallery.insertAdjacentHTML('beforeend',
                `<div class="card">
                 <div class="card-img-container">
                    <img class="card-img" src="${element.picture.large}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${element.name.first} ${element.name.last}</h3>
                    <p class="card-text">${element.email}</p>
                    <p class="card-text cap">${element.location.city}, ${element.location.state}</p>
                </div>
            </div>`
            );
        });
     })
      
     
    



    // fetch data
    // append it to gallery
    // append search with results , results.foreach -> find/ filter
     // async search bar 
    // click show modal
    // x hide modal
    // tab left modal element.previoussibling
    // right tab modal . element.nextSibling 