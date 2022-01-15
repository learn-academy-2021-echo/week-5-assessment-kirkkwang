// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { count } = require("console");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessageConverter", () => {
  const secretCodeWord1 = "Lackadaisical";
  // Expected output: "L4ck4d41s1c4l"
  const secretCodeWord2 = "Gobbledygook";
  // Expected output: "G0bbl3dyg00k"
  const secretCodeWord3 = "Eccentric";
  // Expected output: "3cc3ntr1c"
  it("that takes in a string and returns a coded message; the coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
    expect(codedMessageConverter(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(codedMessageConverter(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(codedMessageConverter(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

// b) Create the function that makes the test pass.

// create a function that takes a string ✅
// use .split("") to turn string into array ✅
// use .map() to iterata through each letter ✅
// use case switch to build out the conditionals ✅
// account for uppercase as well as lowercase ✅
// use .join("") to turn array back into string ✅

const codedMessageConverter = (string) => {
  return string
    .split("")
    .map((letter) => {
      switch (letter) {
        case "a":
        case "A":
          return 4;
          break;
        case "e":
        case "E":
          return 3;
          break;
        case "i":
        case "I":
          return 1;
          break;
        case "o":
        case "O":
          return 0;
          break;
        default:
          return letter;
      }
    })
    .join("");
};

// I can't think of a way to refactor it, maybe as an if statement but I like using case switch for problems like this.

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("findWordsWithLetter", () => {
  const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"];
  const letterA = "a";
  // Expected output: ["Apple", "Banana", "Orange"]
  const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"];
  const letterE = "e";
  // Expected output: ["Cherry", "Blueberry", "Peach"]
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    expect(findWordsWithLetter(arrayOfWords1, letterA)).toEqual([
      "Apple",
      "Banana",
      "Orange",
    ]);
    expect(findWordsWithLetter(arrayOfWords2, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// b) Create the function that makes the test pass.

// create a function that takes two arguments, an array and a string of a single letter ✅
// use .filter() to iterate through array to see if the word .includes() the letter while keeping casing in mind ✅

// const findWordsWithLetter = (arrayOfWords, stringLetter) => {
//   return arrayOfWords.filter((word) =>
//     word.toLowerCase().includes(stringLetter)
//   );
// };

const findWordsWithLetter = (arrayOfWords, stringLetter) => {
  if (stringLetter.length == 1) {
    return arrayOfWords.filter((word) =>
      word.toLowerCase().includes(stringLetter)
    );
  } else {
    return "Make sure to only use a single letter as the second argument.";
  }
};

// For the refactor I put a condition to check if the user put in a single letter or not

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouseOrNot", () => {
  const hand1 = [5, 5, 5, 3, 3];
  // Expected output: true
  const hand2 = [5, 5, 3, 3, 4];
  // Expected output: false
  const hand3 = [5, 5, 5, 5, 4];
  // Expected output: false
  it("takes in an array of 5 numbers and determines whether or not the array is a “full house”", () => {
    expect(fullHouseOrNot(hand1)).toEqual(true);
    expect(fullHouseOrNot(hand2)).toEqual(false);
    expect(fullHouseOrNot(hand3)).toEqual(false);
  });
});

// b) Create the function that makes the test pass.

// create a function that takes in an array of numbers ✅
// check if there are only two different kinds of numbers in the array with new Set() to remove duplicates and .length to check ✅
// check if one of the numbers is repeated only 2x or 3x ✅
// return true if it is, false if not ✅

// const fullHouseOrNot = (arrayOfNums) => {
//   if ([...new Set(arrayOfNums)].length == 2) {
//     let count = 0;
//     for (let i = 0; i < arrayOfNums.length; i++) {
//       if (arrayOfNums[0] === arrayOfNums[i]) {
//         count += 1;
//       }
//     }
//     return count == 2 || count == 3 ? true : false;
//   } else {
//     return false;
//   }
// };

const fullHouseOrNot = (arrayOfNums) => {
  let occurances = 0;
  if ([...new Set(arrayOfNums)].length == 2) {
    arrayOfNums.forEach((num) =>
      arrayOfNums[0] === num ? (occurances += 1) : occurances
    );
    return occurances == 2 || occurances == 3 ? true : false;
  } else {
    return false;
  }
};

// the refactor is still pretty ugly... but I think it's better than where it was at, only by a little...  I think there's a way to do this with .reduce() but I still don't fully understand it enough to use it
