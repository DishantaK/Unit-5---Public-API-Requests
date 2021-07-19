fetch("https://randomuser.me/api/") 
    .then(response => response.json())
    .then(data => console.log(data));

    