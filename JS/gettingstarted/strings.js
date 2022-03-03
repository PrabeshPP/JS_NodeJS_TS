// Strings Method.
// We can use double or single characters.
// Strings can be created as primitives.

//new line Character.
// '\n' is a is new line character.

console.log("My Name is prabeshh bista. \nI am from Tikapur,kailali ");

// Strings Constructors

let myName=new String("Prabesh Bista");

console.log(myName);

//Finding the length

console.log(myName.length);

// Escape Character

console.log("I am a web and \"Flutter\" Mobile applications developer.")

//Finding a String in a String

const myGame="I play pubg,valorant and Clash Royale";
console.log(myGame.indexOf("I"));

//Strings prototype.lasIndexof(searchValue[,fromIndex])

const myBioData='I am Prabesh Bista';
console.log(myBioData.lastIndexOf("Bi",14));

// Using search Method
// We can not use index where we can start our search start
console.log(myBioData.search("Prabesh"));

//Extracting String Parts
//Using Slice Method

const country="Nepal";
console.log(country.slice(0,4));

// Using Slice Method
console.log(country.slice(1,-1));

//Displaying only 280 chracters of string.

let myTweets="Magna et et magna sea sed dolor labore tempor, ea diam stet et ea nonumy sea et. Ea invidunt lorem no est no at, ipsum dolor sit sadipscing clita ipsum lorem lorem diam. Invidunt at dolore voluptua at consetetur sed invidunt sadipscing. Accusam lorem invidunt lorem vero lorem diam. Et duo sed duo kasd sanctus et eos consetetur sed, sea takimata magna sed vero gubergren magna elitr. Et eirmod eirmod est invidunt dolor, sed et lorem duo stet ipsum sed. Diam sed no tempor clita no elitr. Lorem est lorem accusam eirmod elitr kasd. Dolores diam amet sadipscing erat lorem rebum voluptua ut, duo et sanctus sit dolores et sed accusam voluptua ut. Accusam aliquyam nonumy sit et elitr, labore dolor sadipscing et tempor takimata lorem. Duo clita et diam dolor dolor sadipscing lorem et sanctus. Et diam sed amet ut dolor erat kasd sed tempor. Dolor amet ipsum sanctus sed sit at. Voluptua sadipscing ea duo et ipsum et voluptua. Ipsum clita sea consetetur et sed et sed dolor. Duo est sit eos sadipscing rebum aliquyam et justo, sanctus et accusam sit dolores, aliquyam duo eos magna vero takimata sed sanctus diam. Ipsum magna kasd invidunt at ut, dolor dolor ea kasd et amet justo lorem dolor. Erat et ipsum sit invidunt et labore sea, et est accusam et sed et sanctus. Kasd lorem ipsum sea gubergren. Sadipscing sed et ipsum et, et at sanctus takimata ut clita gubergren, sit sea tempor dolor clita et ut lorem voluptua sadipscing, invidunt et sed ipsum sea eos ea at. Sanctus ut diam no nonumy stet duo rebum et. Dolor takimata sed ipsum rebum. Et stet est et ipsum eos ipsum, aliquyam rebum."
let myActualTweet=myTweets.slice(0,280);
console.log(myActualTweet);

//Using substring method
//Substring cannot accept negative index

let dummyText="Prabesh,Bista,tikapur,Kailali";
console.log(dummyText.substring(0,7));

//Replacing the string
let hero="I am Iron-Man";
console.log(hero.replace("Iron","iron"));

//Extracring Strings Character

let str="Hello World";
console.log(str.charAt(4));

//charCodeAt() Method
console.log(str.charCodeAt(1));

// Challenge
// Returning the unicode of last character in string

let len=str.length;
console.log(len);
let lastChar=str.charAt(len-1);
console.log(lastChar);
//The unicode of the last character is ....
let uni_code=str.charCodeAt(lastChar);
console.log(uni_code);

// Property Access
console.log(str[0]);
console.log(str[4]);

//Others Useful Method
let fname="Prabesh";
let lname="Bista";

console.log(fname.concat(" ",lname));

var str1="             hello world             ";
console.log(str1.trim());

//Convert string to an array
//Split Method()

console.log(str.split(""));



