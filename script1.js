console.log("=== Hour 1: JSON BASIC ===");

let student = {
    name: "shabeena",
    age: 20,    
    marks: [85,90,55]
};

//convert object -> JSON string
let jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);
console.log("Type of jsonString:", typeof jsonString);

//convert JSON string -> object
let parsedObject = JSON.parse(jsonString);
console.log("parsed Object:", parsedObject);

//variable of Books title ,price and author name
let books = [
    {title: "Atomic Habit", price: 200, authorName: "james"},
    {title: "AI&ML", price: 150, authorName: "nick"},
    {title: "stanger Things", price: 300, authorName: "john"}
];  
let booksJsonString = JSON.stringify(books);
console.log("Books JSON String:", booksJsonString);
let parsedBooks = JSON.parse(booksJsonString);
console.log("Parsed Books Object:", parsedBooks);

// Fetch sample json from API
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log("Fetched Data:", data))
  .catch(error => console.error('Error fetching data:', error));

  //Fetch sample json and remove 1 post
fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(data =>  console.log("Fetched All Posts:", data))
  .catch(error => console.error('Error fetching data:', error));

  // Hour 3: Dispaly json data on webpage

  //Fetch all users and show in console + page
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {  
    let output = "Users List:\n";
    users.forEach(user => {
      output += `${user.name} - (${user.email})\n`;
    });
    console.log(output);
  })
  .catch(err => console.error(err));