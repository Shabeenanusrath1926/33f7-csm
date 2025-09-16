//json 
  
console.log("=== Hour 1: JSON BASIC ===");

let student = {
    name: "shabeena",
    age: 20,    
    marks: [85,90,55]
};

// ... (all the other code remains the same) ...

let books = [
    {title: "Atomic Habit", price: 200, authorName: "mona"},
    {title: "AI&ML", price: 150, authorName: "prathibha"},
    {title: "Stranger Things", price: 300, authorName: "megha"}
];  
let booksJsonString = JSON.stringify(books);
console.log("Books JSON String:", booksJsonString);
let parsedBooks = JSON.parse(booksJsonString);
console.log("Parsed Books Object:", parsedBooks);

// Fetch sample json from API
// Note: 'fetch' is available in modern Node.js versions (18+). 
// For older versions, you might need a package like 'node-fetch'.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log("Fetched Data:", data))
  .catch(error => console.error('Error fetching data:', error));

  //Fetch sample json
fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(data =>  console.log("Fetched All Posts (First 5):", data.slice(0, 5)))
  .catch(error => console.error('Error fetching data:', error));


  //Fetch all users and show ONLY in console
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {  
    console.log("\n=== Users List (from API) ===");
    users.forEach(user => {
        // Log each user's details to the console
        console.log(`- ${user.name} (${user.email})`);
    });
    // The line that caused the error is removed
    // document.body.innerHTML += output; // <- ERROR: document does not exist in Node.js
  })
  .catch(error => console.error('Error fetching users:', error));