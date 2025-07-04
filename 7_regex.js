// 1. What id regex ? 
// a pattern used to match Characters in strings
// Search
// match 
// manipulation
// validation










// ------------------------------------------------------------------------------------------------------
// 2. How to create ?
// Literal syntax
// let pattern = /hello/;


// constructor 
// let pattern = new RegExp("hello");










// ------------------------------------------------------------------------------------------------------
// 3. Common methods
// test()
// let text = "hello world";
// let pattern = /hello/;
// console.log(pattern.test(text))


// let text = "learning acciojob course"
// let pattern = /accio/;
// console.log(pattern.test(text))


// match() & exec()
// let text = "hello hello"
// let pattern = /hello/g;
// console.log(text.match(pattern))
// console.log(pattern.exec(text))
// console.log(pattern.exec(text))
// console.log(pattern.exec(text))



// replace()
// let text = "hello hello world"
// console.log(text.replace(/hello/g,"hi"));



// search()
// let text = "hello world";
// console.log(text.search(/world/));



// split()
// let text = "apple,orange,grapes"
// console.log(text.split(/,/));













// ------------------------------------------------------------------------------------------------------
// flags
// g - global flag



// i (ignore case)
// let text = "HELLO"
// console.log(/accio/i.test(text));



// m - (multiline)
// let text = "hello\nworld"
// console.log(/^world/m.test(text));












// ------------------------------------------------------------------------------------------------------
// anchors

// ^ - 
// let text = "hello world"
// let pattern = /^hello/
// console.log(pattern.test(text));


// $ 
// let text = "hello world"
// let pattern = /hello$/
// console.log(pattern.test(text));


// \b - (word boundary)
// let text = "hello world"
// let pattern = /\bhello\b/
// console.log(pattern.test(text));


// \B - (non-word boundary)
// let text = "hello world"
// let pattern = /\Bo/
// console.log(pattern.test(text));










// ------------------------------------------------------------------------------------------------------
// quntifiers
// * : matches 0 or more items
// + : matches 1 or more items
// ? : matches 0 or 1 items

// let text = "aaab";
// let patterns = /a*/;
// let patterns = /a+/;
// let text = ""
// let patterns = /a?/g;
// console.log(patterns.exec(text))
// console.log(patterns.exec(text))





// {n} : matches exactly n times 
// let text = "aaab";
// let patterns = /a{2}/;
// console.log(patterns.exec(text))


// let text = "aaaab";
// let patterns = /a{2}/;
// console.log(patterns.exec(text))
// console.log(patterns.exec(text))

// let text = "aaab";
// let patterns = /a{2}/g;
// console.log(patterns.exec(text))
// console.log(patterns.exec(text)) // null (a,a) one pair then only third "a" is remaning
// console.log(text.match(patterns))






// {n,} : matches n or more times
// let text = "aaab";
// let patterns = /a{2,}/g;
// console.log(patterns.exec(text))
// console.log(patterns.exec(text)) 
// console.log(text.match(patterns))






// {n,m} : matches betwen n and m times
// let text = "aaaab";
// let text = "aaaaab";
// let patterns = /a{2,3}/g;
// console.log(patterns.exec(text))
// console.log(patterns.exec(text)) 
// console.log(text.match(patterns))














// ------------------------------------------------------------------------------------------------------
// sets and ranges
// character set [abc]
// let text = "cat"
// let pattern = /c[aeiou]t/;
// console.log(pattern.test(text))




// negative character set [^abc]
// let text = "cat"
// let pattern = /c[^aeiou]t/;
// console.log(pattern.test(text))



// ranges
// [a-z]
// let text = "g"
// console.log(/[a-z]/.test(text))


// [0-9]
// let text = "2"
// console.log(/[0-9]/.test(text))












// ------------------------------------------------------------------------------------------------------
// predefined characters classes
// \d : any digit
// \w : any word character (letter , digit , underscore)
// \s : any whitespace character


// let text = "123abc";
// console.log(/\d/.test(text));
// console.log(/\d/.exec(text));




// dot character
// matches any character except newline(\n)

// let text = "cat";
// console.log(/c.t/.test(text));
// let text = "cajdsamxt";
// console.log(/c.+t/.test(text));









// ------------------------------------------------------------------------------------------------------
// problem 1 - check if string contains "hello"
// let text = "Say hello to everyone"
// let pattern = /hello/
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// problem 2 - replace all occurance of cat with dog
// let text = "cat is a cat"
// let pattern = /cat/g
// console.log(text.replace(pattern,"dog"))





// ------------------------------------------------------------------------------------------------------
// problem 3 - match any digit in a string
// let text = "user123"
// let pattern = /\d+/
// console.log(text.match(pattern))





// ------------------------------------------------------------------------------------------------------
// problem 4 - match a word that starts with h
// let text = "hello word"
// let pattern = /^h/
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// problem 5 - slpit a string into an array
// let text = "red,blue,green"
// let pattern = /,/
// console.log(text.split(pattern))





// ------------------------------------------------------------------------------------------------------
// problem 6 - case - insensitive match for "hello"
// let text = "HELLO"
// let pattern = /hello/i
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// problem 7 - match if a string ends with "world"
// let text = "HELLO world"
// let pattern = /world$/
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// problem 8 - find all occurences of letter "a"
// let text = "banana"
// let pattern = /a/g
// console.log(text.match(pattern))





// ------------------------------------------------------------------------------------------------------
// problem 9 - match any character between c and t and check is it a vowel
// let text = "cat"
// let pattern = /c[aeiou]t/g
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// problem 10 - match any single character using "."
// let text = "cat"
// let pattern = /c.t/g
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// problem 11 - Check if string contains only digits 
// let text = "123"
// let pattern = /^[0-9]+$/g
// let pattern2 = /^\d+$/g
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// problem 12 - check if string has exactly 3 a's
// let text = "aaa"
// let pattern = /^aaa$/g
// let pattern2 = /a{3}/g
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// problem 13 - use exec() to find multiple "h" characters in a string
// let text = "hhaha"
// let pattern = /h/g
// console.log(pattern.exec(text))
// console.log(pattern.exec(text))
// console.log(pattern.exec(text))





// ------------------------------------------------------------------------------------------------------
// problem 14 - match word boundary for "the" 
// let text = "the end"
// let pattern = /\bthe\b/g
// console.log(text.match(pattern))





// ------------------------------------------------------------------------------------------------------
// problem 15 - check if the string contains any lowercase letter
// let text = "A1b2"
// let pattern = /[a-z]/g
// console.log(text.match(pattern))
// console.log(pattern.test(text))





// low Advance Problem
// ------------------------------------------------------------------------------------------------------
// problem 1 - Basic email vaildation
// let text = "xyz@gmail.com"
// let pattern = /^\w+@\w+\.com$/g
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// problem 2 - Basic phone no validation
// let text = "+911234567890"
// let pattern = /^\+91\d{10}$/g
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// // problem 3 - Check if password contains atleast 6 characters and contains atleast. one digit
// let text = "sjck2"
// let pattern = /\d/
// console.log(pattern.test(text))





// ------------------------------------------------------------------------------------------------------
// problem 4 - 
// let text = "sjck2"
// let pattern = /[a-z]*\d+[a-z]*/g
// console.log(pattern.test(text))