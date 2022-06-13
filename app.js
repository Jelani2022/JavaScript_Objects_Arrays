console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(num){
    let sum = 0;

    num.forEach((number) => {
        sum =+ number;
    });
    return sum;
  
}
console.log(arraySum(numbers))

// Exercise 2 Section Favorite Book
console.log("EXERCISE 2:\n==========\n");

let book = {};
book.title = "Why Are All the Black Kids Sitting together in the Careteria";
book.author= "Beverly Daniel Tatum";
book.numOfPgs= "464" ;
book.xRead= 1;

console.log(book)
book.info = function(){
    return `The book ${this.title} was written by ${this.author} has ${this.numOfPgs}. I have read this book ${this.xRead} time(s).`;
}

console.log(book.info())

// Exercise 3 Reverse a String
let sentence = "The quick brown fox jumps over the lazy dog";
function reverseAString(str){
 //   let word = str.split(" ")
 //   for (let i = 0; i< words[i].split(""))

    let arrayString = str.split("");
    let rev = arrayString.reverse();
    let combine = rev.join(""); 
    return combine;

} console.log(reverseAString(sentence))



// Exercise 4 Parse a CSV
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function conv(fileData){
    
    let rows = fileData.split("\n");
    let headers = rows[0].split(",");
    let result = [];

    for (let i = 1; i < rows.length; i++){
        let obj = {}
       let data = rows[i].split(",");
       data.forEach((val, idx) => {
           obj[headers[idx]] = val;
        });
        result.push(obj)
    }
    return result;
}
console.log(conv(csvData))