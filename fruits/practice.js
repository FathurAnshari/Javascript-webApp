// let person = {
//   name: "Fathur Muhammad Fadlan Anshari",
//   age: 22,
//   country: "Indonesia",
// };
// function logData() {
//   console.log(
//     person.name +
//       " is " +
//       person.age +
//       " years old and lives in " +
//       person.country
//   );
// }
// logData();

// let age = 35;

// if (age < 6) {
//   console.log("free");
// } else if (age < 18) {
//   console.log("child discount");
// } else if (age < 27) {
//   console.log("child student discount");
// } else if (age < 67) {
//   console.log("full price");
// } else {
//   console.log("senior citizen discount");
// }

// let largesCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// for (let i = 0; i < largesCountries.length; i++) {
//   console.log("- " + largesCountries[i]);
// }

// let largesCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// largesCountries.shift();
// largesCountries.pop();
// largesCountries.unshift("China");
// largesCountries.push("Pakistan");

// console.log(largesCountries);

// let hands = ["rock", "paper", "scissor"];

// function janken() {
//   let randomIndex = Math.floor(Math.random() * 3);
//   return hands[randomIndex];
// }
// console.log(janken());

let fruits = ["orange", "orange", "apple", "orange", "apple"];
let appleEl = document.getElementById("apple-shelf");
let orangeEl = document.getElementById("orange-shelf");

function sortFruit() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "orange") {
      orangeEl.textContent += "orange";
    } else {
      appleEl.textContent += "apple";
    }
  }
}
sortFruit();
