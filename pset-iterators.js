/*
Instructions:

For this problem set you will be working with a
list of U.S. Presidents stored as an array of
objects. The array has **already been provided for
you** as a variable named "presidents".

You can see the full list of us presidents in the
provided file named `us-presidents.js`

All of the following problems require that you
use the `presidents` array to solve them.

Only use either `.map()`, `.find()` or `.filter()` to solve the problems in the problem set

  * Do not use `.forEach()`

You can use any additional variables that you deem necessary
to solve each problem.

You can use either regular functions or
arrow functions **for your iterator callbacks**

*/

const presidents = require('./us-presidents.js') // <- DO NOT Remove; this represents an array consisting of U.S. Presidents

/***********
Problem 1:

1. Using the `presidents` array, return the "name" of the
first president that was a member of the "Whig" party.
Save the data in a variable called `firstWhigPresident`,
declared with const

2. Print `firstWhigPresident` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 1:')

// Add your code below this line
//use find on presidents.party
const firstWhigPresident = presidents.find((president) =>{
  return president.party === 'Whig'
})
console.log(firstWhigPresident)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 2:

1. Using the `presidents` array, return a list of all the
presidents whose first name was "James".
Save the data in a variable called `presidentsNamedJames`,
declared with const (return a list of objects)

2. Print `presidentsNamedJames` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 2:')

// Add your code below this line
//use filter to focus on each president's names
const presidentsNamedJames = presidents.filter((president) => {
  //use split to separate the names, use index of 0 to access the first name
  //use === to check if the first name is equal to james
  return president.president.split(' ')[0] === 'James'
})
//console log result - works!
console.log(presidentsNamedJames)



// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 3:

1. Using the `presidents` array, return a list of the
parties associated each of the presidents.
Save the data in a variable called `presidentialParties`,
declared with const

2. Print `presidentialParties` to the console

(partial) Expected Result: ['No Party', 'Federalist', 'Democratic-Republican', 'Democratic-Republican', 'Democratic-Republican', 'Democratic', .... ]

Expected Result Shape: An array of strings representing the party name of each president

Tip: your new array should contain 45 elements

************/
console.log('Problem 3:')

// Add your code below this line
// use map to create an array of presidential parties
const presidentialParties = presidents.map((president) => {
  return president.party
})
console.log(presidentialParties)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 4:

1. Using the `presidents` array, return a
list of the presidents who took office
between 1850 and 1900. Save the data in a variable called `presidentsBetween1850and1900`, declared with const

2. Print `presidentsBetween1850and1900` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 4:')

// Add your code below this line
//create an array of the year presidents took office by using slice on the took_office attribute
const presidentsBetween1850and1900 = presidents.filter((president) => {
  //parseInt the year they took office and make sure that it's greater than 1850
  return (parseInt(president.took_office.slice(0, 4)) > 1850) &&
  //add in logical and to make sure it's <1900
  (parseInt(president.took_office.slice(0, 4)) < 1900)
})
//check the result- it works!
console.log(presidentsBetween1850and1900)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 5:

1. Using the `presidents` array, return a list of the
presidents who are still alive today.
Save the data in a variable called `livingPresidents`,
declared with const

2. Print `livingPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 5:')

// Add your code below this line
//use filter to find the presidents who's death_year = 'null'
const livingPresidents = presidents.filter((president) => {
 return president.death_year === null
})
console.log(livingPresidents)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 6:

1. Using the `presidents` array,
return the "name" of the first "Republican" president.
Save the data in a variable
called `firstRepublican`, declared with const

2. Print `firstRepublican` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 6:')

// Add your code below this line
//use find to get the first republican president
const firstRepublicanAttributes = presidents.find((president) => {
  //get the first president
  return president.party === 'Republican'
})
  //extract the first Republican's name using .president
const firstRepublican = firstRepublicanAttributes.president
console.log(firstRepublican)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 7:

1. Using the `presidents` array, return a
list of the presidents who served less than 4 years
in office. Save the data in a variable
called `shortTermPresidents`, declared with const

2. Print `shortTermPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 7:')

// Add your code below this line
//similar to problem 4, use slice to access year took office and year left office, parseInt result
//create a new array first without trump using filter
const noMoreTrump = presidents.filter((president) => {
  return president.president != 'Donald J. Trump'
})
// check if it works- it does!
// console.log(noMoreTrump)

const shortTermPresidents = noMoreTrump.filter((president) => {
  //use the array wihtout trump
  //subtract the value of when the president took office to when they left office, only log the presidents that that number is less than 4 for
  return (parseInt(president.left_office.slice(0, 4)) - parseInt(president.took_office.slice(0,4))) < 4
})
console.log(shortTermPresidents)



/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 8 (Bonus):

1. Using the `presidents` array, return an object that represents the number of occurrences of the first name of all of the presidents (past and current)

Save the data in a variable
called `firstNameCount`, declared with const

2. Print `firstNameCount` to the console

Expected Result Shape: An object where each key is the firstName and the value is the number of presidents that share that first name.

Example (not the actual answer):

{ "James":  5, "George": 3, "Barack": 1, ....}

************/
console.log('Problem 8:')

// Add your code below this line

// create presidential first names array
const presidentFirstName = presidents.map((president) => {
  return president.president.split(' ')[0]
})
// check result- it works!
// console.log(presidentFirstName)

function presidentFirstNameCounter (name) {

  return presidentFirstName.reduce((nameCount, name) => {
    if (nameCount[name] === undefined) {
      // name does not exist in presidentFirstNameObj
      nameCount[name] = 1
    } else {
      // when name already exists in presidentFirstNameObj
      nameCount[name] += 1
    }

    return nameCount
  }, {})
}
// check to see if function works, it does
// console.log(presidentFirstNameCounter())

//create variable named firstNameCount
const firstNameCount = presidentFirstNameCounter()

console.log(firstNameCount)



// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
