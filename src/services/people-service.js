const URL = 'https://randomuser.me/api/?results=50';

const fetchPeople = () =>{
    return fetch(URL).then(response => response.json())
}

export default fetchPeople;
// Function:

// function fetchPeople(){
//     fetch(URL)
//     .then(response => response.json())
// }