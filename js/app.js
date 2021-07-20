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
        let identifier; 
        if(event.target.className == 'card-name cap'){ // If we clicked on the name 
            identifier = event.target.nextElementSibling.textContent; //grabs unique email which would be a sibling of the
            let employeeData = users.filter(user => user.email.includes(`${identifier}`)); // filters response by email and returns the employee
            console.log(employeeData);

            // populate the correct employee in modal

            createModal(employeeData, users)

        } 
    });     
    
     //
     addSearch(users)
    
      
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

function createModal(target, collection){
    //Create modal
    let date = new Date(target[0].dob.date);
    let dobFormatted = date.toLocaleDateString();

    let modal = 
    `
    <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${target[0].picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${target[0].name.first} ${target[0].name.last}</h3>
            <p class="modal-text">${target[0].email}</p>
            <p class="modal-text cap">${target[0].location.city}</p>
            <hr>
            <p class="modal-text">${target[0].cell}</p>
            <p class="modal-text">${target[0].location.street.number} ${target[0].location.street.name}, ${target[0].location.city}, ${target[0].location.state} ${target[0].location.postcode}</p>
            <p class="modal-text">Birthday: ${dobFormatted}</p>
        </div>
    </div>
    
</div>
    `;
    // Append to body
    document.body.insertAdjacentHTML("beforeend", modal)

    // Add event listener on exit
    document.getElementById('modal-close-btn').addEventListener('click', ()=>{
        document.querySelector('.modal-container').remove();
    });

    // // Add event listener on left

    // document.getElementById('modal-prev').addEventListener('click', ()=>{
    //     console.log('left'); 
    // });
    // // Add event Listener on right 

    // document.getElementById('modal-next').addEventListener('click', ()=>{
    //     console.log('right');
    // });

    
}


function addSearch(collection ){
    let search = `
    <form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
    `;

    searchContainer.insertAdjacentHTML("beforeend", search);
   


    // functionality
    let input = document.getElementById('search-input');
    let submit = document.getElementById('search-submit');

    submit.addEventListener('click', (e)=>{
   
        console.log(input.value); // working 

        // collection.filter input.value
        // if(){

        // } else {

        // }
    })
   


}


/* 
Tasks left 
- format date / cell # 
- filter collection on searchbar
- right / left navigation on modal

*/

