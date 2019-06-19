/*
PEDAC
(P)roblem
- Looking at the examples we are turning a string into a longer string.
- I see that the first letter of the string is repeated once
- I see that the second letter of the string is repeated twice
- I see that the third letter of the string is repeated three times.
- Each letter of the string is repeated as many times as it's position in the string
- Looking at the repeated strings, the first letter of the repetition is uppercase
  while the rest of the string is lower case.
(E)xample
"ZpglnRxqenU" => "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
(D)atastucture
- I have an input of a string
- I have an output of a string
- But I am workign with individual letters, and it is easier if
  this was an array of characters so I will likely need to `split('')` the string
  into an array to work with it
(A)lgorithm
- NOTE: This isn't the *ONLY* way to make an algorithm for this. It is the way *I* did it. Your algorithm could
        look totally different and also be 100% correct. In fact, after I was done with this code I redid it with
	a different algorithm as a personal practice in using a JavaScript feature I don't use often enough.
	
	The point here is to break down the problem into small(er) pieces. If you get stuck turning these steps
	into code, the issue is that your steps are not small enough. In the beginning of your coding journey
	you will need to break problems down into very tiny steps beause you don't yet have enough practice to
	recognize larger chunks of steps as coding concepts. The more you practice you will not have to break
	problems down as small.
- Break the string into a list of individual letters so I can transform each one on its own
- For each letter in that list:
  - Turn the letter into a string of that letter repeated based on the position of that letter in the string
- For each of these "words"
  - Lowercase the entire word, but then capitalize the first letter
- Take the list of individual words and join them together but put a "-" inbetween each word
(C)ode with intent
- Now I will turn this into javascript code
- I will try to take my algorithm above and turn it into JavaScript code
*/

function accum(s) {
  //
  // Turn the string into an array of letters
  //
  // assume that the variable s has "GaviN" as the input
  //
  // We are now working with ["G", "a", "v", "i", "N"]
  const arrayOfLetters = s.split('')

  // Turn that array of letters into an array of each letter repeated
  // one more time than the index (e.g. the 0th character is repeated once
  // and the 1st charcter is repeated twice, etc.
  //
  // For our sample input we are now working with
  //   ["G", "aa", "vvv", "iiii", "NNNNN"]
  const arrayOfWords = arrayOfLetters.map((character, index) =>
    character.repeat(index + 1)
  )

  // Now we want to ensure that the first letter is capitalized and
  // all the other letters are lowercase
  //
  // So first we lowercase everything to get
  //   ["g", "aa", "vvv", "iiii", "nnnnn"]
  //
  // Then we will use `replace` with a "REGULAR EXPRESSION" that
  // means match the first letter (the ^ means to match at the beginning
  // of the string and the . means any single character. We then give the
  // replace method a method to call to transform the match, in this case
  // we want to convert that character to uppercase
  //
  //
  // If I tried to implement this in code and could not, this would be
  // a clue that I need to break this step down further.
  //
  // The point isn't the fancy use of `replace` and regular expressions,
  // it is turning our english (A)lgorithm into JavaScript code. So if the
  // step of "Lowercase the entire word, but then capitalize the first letter"
  // isn't clear *EXACTLY* how to do that in code, we break it down more.
  //
  // Breaking that down might look like this:
  //
  // Lowercase the entire word, but then capitalize the first letter
  //  - Turn the entire word into lower case
  //  - Get the first letter of the word
  //  - Get the part of the word after the first letter
  //  - make a new word by taking the "first letter of the word" and capitalizing it and appending the "part of the word after the first letter"
  //
  // That in code would look like this:
  //
  // const arrayOfProperlyCaptializedWords = arrayOfWords.map(word => {
  //  const lowercaseWord = word.toLowerCase()
  //  const firstLetter = lowercaseWord[0]
  //  const restOfWord = lowercaseWord.splice(1)
  //
  //  return firstLetter.toUpperCase() + restOfWord
  // })
  //
  // I'm going to stick with my regexp version for now.
  //
  // Now we get
  //   ["G", "Aa", "Vvv", "Iiii", "Nnnnn"]
  const arrayOfProperlyCaptializedWords = arrayOfWords.map(word =>
    word.toLowerCase().replace(/^./, char => char.toUpperCase())
  )

  // Finally we join all the entries with "-" to get
  //   "G-Aa-Vvv-Iiii-Nnnnn"
  const finalString = arrayOfProperlyCaptializedWords.join('-')

  return finalString
}

// 1.
function accum(s) {
  return s
    .split('')
    .map((character, index) => character.repeat(index + 1))
    .map(word => word.toLowerCase().replace(/^./, char => char.toUpperCase()))
    .join('-')
}

// 2.
function accum(s) {
  return s.replace(
    /./g,
    (character, index) =>
      character
        .repeat(index + 1)
        .toLowerCase()
        .replace(/^./, char => char.toUpperCase()) +
      (index < s.length - 1 ? '-' : '')
  )
}
