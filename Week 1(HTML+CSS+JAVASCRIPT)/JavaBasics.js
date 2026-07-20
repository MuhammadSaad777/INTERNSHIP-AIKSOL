// ===========================================
// DAY 3: ES6+ LOGIC PRACTICE
// ===========================================



// ===========================================
// PART 1 - ARROW FUNCTIONS
// ===========================================

console.log("===== ARROW FUNCTIONS =====");

// Addition
const add = (a, b) => a + b;

// Subtraction
const subtract = (a, b) => a - b;

// Multiplication
const multiply = (a, b) => a * b;

// Division
const divide = (a, b) => a / b;

// Square
const square = number => number * number;


// Testing Arrow Functions

console.log("Addition:", add(10, 5));

console.log("Subtraction:", subtract(10, 5));

console.log("Multiplication:", multiply(10, 5));

console.log("Division:", divide(10, 5));

console.log("Square:", square(9));



// ===========================================
// PART 2 - ARRAY OF USER OBJECTS
// ===========================================

console.log("\n===== USER ARRAY =====");

const users = [

    {
        id: 1,
        name: "Ali",
        role: "Student",
        isActive: true
    },

    {
        id: 2,
        name: "Ahmed",
        role: "Admin",
        isActive: false
    },

    {
        id: 3,
        name: "Sara",
        role: "Teacher",
        isActive: true
    },

    {
        id: 4,
        name: "Ayesha",
        role: "Student",
        isActive: true
    },

    {
        id: 5,
        name: "Bilal",
        role: "Admin",
        isActive: false
    },

    {
        id: 6,
        name: "Fatima",
        role: "Teacher",
        isActive: true
    },

    {
        id: 7,
        name: "Hamza",
        role: "Student",
        isActive: false
    },

    {
        id: 8,
        name: "Hina",
        role: "Teacher",
        isActive: true
    },

    {
        id: 9,
        name: "Usman",
        role: "Student",
        isActive: true
    },

    {
        id: 10,
        name: "Zain",
        role: "Admin",
        isActive: true
    }

];

console.log(users);



// ===========================================
// PART 3 - FILTER ACTIVE USERS
// ===========================================

console.log("\n===== ACTIVE USERS =====");

const activeUsers = users.filter(user => user.isActive);

console.log(activeUsers);



// ===========================================
// PART 4 - MAP USER NAMES
// ===========================================

console.log("\n===== UPPERCASE USER NAMES =====");

const upperCaseNames = users.map(user => user.name.toUpperCase());

console.log(upperCaseNames);



// ===========================================
// PART 5 - REDUCE
// Count number of Students
// ===========================================

console.log("\n===== TOTAL STUDENTS =====");

const totalStudents = users.reduce(

    (count, user) => {

        if (user.role === "Student") {

            return count + 1;

        }

        return count;

    },

    0

);

console.log("Total Students:", totalStudents);



// ===========================================
// PART 6 - DESTRUCTURING
// ===========================================

console.log("\n===== DESTRUCTURING =====");

function displayUser({ id, name, role }) {

    console.log("ID:", id);

    console.log("Name:", name);

    console.log("Role:", role);

    console.log("--------------------");

}


// Display first three users

displayUser(users[0]);

displayUser(users[1]);

displayUser(users[2]);



// ===========================================
// EXTRA PRACTICE
// ===========================================

console.log("\n===== EXTRA PRACTICE =====");

// Print all users one by one

users.forEach(user => {

    console.log(

        user.id,

        user.name,

        user.role,

        user.isActive

    );

});