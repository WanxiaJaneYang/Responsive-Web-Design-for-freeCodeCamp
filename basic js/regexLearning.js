//test(): regex.test(string),return boolean to show if the string containing string that match the regex
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString)

//i is a flag that allows match for both uppercase and lowercase
let myString2 = "Hello, World!";
let myRegex2 = /hello/i;
let result2 = myRegex2.test(myString2)

//match():string.match(regex), returns the part of string that match the pattern
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result3 = extractStr.match(codingRegex);

//g is a flag that allows match() returns all the substrings that match the regex(as an array)
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result4 = twinkleStar.match(starRegex)

//result5 will be an array containing all the vowels from quoteSample
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result5 = quoteSample.match(vowelRegex);

/**
 * Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
 */
let username = "JackOfAllTrades";
let userCheck = /(^[a-z][0-9]{2,}$)|(^[a-z]{2,}+[0-9]*$)/i;
let result6 = userCheck.test(username);

//use regex to remove blankspace at the beginning and at the end
let hello = "   Hello, World!  ";
let wsRegex = /^\s*|\s*$/g;
let result7 = hello.replace(wsRegex, '');

//use capture groups to match patterns for multiple times
let repeatNum = "42 42 42 42";
let reRegex = /^(\d+) \1 \1$/; // same number appears three times, \1 refers to the first string match the pattern
let result8 = reRegex.test(repeatNum);
