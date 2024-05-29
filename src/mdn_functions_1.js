//Functions 1

/* 
For the first task, you have to create a simple function — chooseName() — that prints a random name from the provided array (names) to the provided paragraph (para), and then run it once.

Try updating the live code below to recreate the finished example:
*/

/*
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
*/


//ANSWER:


function chooseName(names) {
  const random = names[Math.floor(Math.random() * names.length)];
  para.innerHTML = random;
}

chooseName(names);




//Functions 2

/*
For our second functions-related task, you need to create a function that draws a rectangle on the provided <canvas> (reference variable canvas, context available in ctx), based on the five provided input variables:

- x — the x coordinate of the rectangle.
- y — the y coordinate of the rectangle.
- width — the width of the rectangle.
- height — the height of the rectangle.
- color — the color of the rectangle.

You'll want to clear the canvas before drawing, so that when the code is updated in the case of the live version, you don't get lots of rectangles drawn on top of one another.

Try updating the live code below to recreate the finished example:
*/

/*
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Add your code here

*/

//ANSWER:






//Functions 3

/*
In this task, you return to the problem posed in Task 1, with the aim of improving it. The three improvements we want you to make are:

- Refactor the code that generates the random number into a separate function called random(), which takes as parameters two generic bounds that the random number should be between, and returns the result.
- Update the chooseName() function so that it makes use of the random number function, takes the array to choose from as a parameter (making it more flexible), and returns the result.
- Print the returned result into the paragraph (para)'s textContent.

Try updating the live code below to recreate the finished example:
*/

/*
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
*/


//ANSWER:





//Functions 4

/*
In this task, we have an array of names, and we're using Array.filter() to get an array of only names shorter than 5 characters. The filter is currently being passed a named function isShort() which checks the length of the name, returning true if the name is less than 5 characters long, and false otherwise.

We'd like you to change this into an arrow function. See how compact you can make it.
*/

/*
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

function isShort(name) {
  return name.length < 5;
}

const shortNames = names.filter(isShort);
para.textContent = shortNames;

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
*/

//ANSWER:

