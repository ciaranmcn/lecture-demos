'use strict';

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

// function literals: can pass arrays immediately without a variable
const myfunction = function(person){
  consol.log("Hello, " + person + "!");
}

// vs
// do htis more often
function myfunction(person){
  consol.log("Hello, " + person + "!");
}

// assign fuctions as properties
// nested functions
function callWithWorld(aFunction){
  aFunction('world');
}

// Also can pass a funciton a full funciton as a parameter

function doTogether(firstCallback, secondCallback){
  console.log(firstCallback);
  firstCallback();
  secondCallback();
  console.log('at the same time');

}
// ok
doTogether(patYourHead, rubYourBelly);
// not ok because these are the results of the functions
doTogether(patYourHead(), rubYourBelly());
// Hardest part is figuring out whether you are calling the function or passing 
// the result of the functionpir

const peopleNames = ['Ada', 'Bob', 'Chris', 'Diya', 'Emma'];

const peopleGreetings = peopleNames.map(function(person){
  const greeting = "Hello, " + person + "!";
  return greeting;
});
console.log(peopleGreetings);

const isA

peopleArray.reduce(
  fucntion(accumulatn, current)
)