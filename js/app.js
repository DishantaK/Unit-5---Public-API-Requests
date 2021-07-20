// global selectors
const searchContainer = document.querySelector('div.search-container');
const searchBar = document.getElementById('search-input');
let cards = document.querySelectorAll('div.card');
const gallery = document.getElementById('gallery');

// creating modal to append to body


// GET results from random user API
fetch(`https://randomuser.me/api/?results=12`) 
    .then(response => response.json())
    .then(data => {
        let users = data.results;
        displayUsers(users);
       
     // Event Delegation 
     gallery.addEventListener('click', (event) =>{

        if(event.target.className == 'card-name cap'){
            console.log('card')
            createModal(event.target)
        } 
    


        

    });     
    
         
      
})
    
  

/**
 * Displays card details for each user in response
 * @param {array} arr 
 */  

function displayUsers(arr){
    arr.forEach(element => {
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
}

// Modal 

function createModal(target){
    //Create modal
    let modal = 
    `
    <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>
    `;
    // Append to body
    document.body.insertAdjacentHTML("beforeend", modal)

    // Add event listener on exit
    document.getElementById('modal-close-btn').addEventListener('click', ()=>{
        document.querySelector('.modal-container').remove();
    });
    
}




