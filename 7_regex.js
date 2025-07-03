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
// g



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





