// Code

// 1. What is Function ?
// ფუნქცია არის დიდი მასივი, ცვლადი რაღაც დანადგარი დარგობრივ 
// ტერმინლოგია რომ გამოვიღენოთ, რაღაც დანადგარი სადაც შევიმახავთ
//  სხვადასხვა ინფორმაციას.


// 2. What is function call ?

//  "function call"/"Invoke" არის ოპერაცია, რომლითაც ვიძახებთ Function-ში არსებულ 
// ინფორმაციას. Call-ნიშნავ - ფუნქციის გამოძახებას.
//  (call აღნიშნავს ფუნქცის გამოძახებას მაგრამ Functions-ის გამოძახენა ხდება სხვა 
//     სინტაქსით არა call

// 3. What is a code block, and how does it relate to a function?
   
// ბლოკში არის პარამეტრი გაწერილი, რომლითაც შეგვიძლია გავაკეთოთ კონკრეტული 
// შინაარსის მქონდა დავალებები, იმის მაგივრად რომ ყოველ მაგალითზე თავიდან ვეროთ კოდი
// ანუ ბლოკში არის ინფორმაცია და შვენ ვიძახებთ მას კონკრეტული syntax - ის გამოყენებით.

// task 4
function greets(user) {
    console.log(`Hello, ${user}`);
}
greets("John!");

// task 5
function reverse(user) {   
    let reversed = '';
    for (let i = user.length - 1; i >= 0; i--) { 
       reversed += user[i];
    }
    return reversed;
 }
 
 console.log(reverse("hello"));  
 
//  task 6 

// What is a default argument, and how does it work?

//  argument რამდენადაც მახსოვს არის
// არგუმენტი გადაცემა პარამეტრს, თუ პარამეტრს დავტოვებთ არგუმენტის გარეშე იქნება undefine
// default არგუმენტი ნაგულისმხები მნიშვნელობა არის და ნაგულისხმებად ნიშნავს undefine-ს.

// task 7 

// What is the scope and lifetime of a variable?

// თუ სორად მახსოვს Scope ნიშნავს
//    function - ის შიგნით არის local scope და გარეთ რითაც მას ვიძახებთ global scope 


// task 8 

// What is a return value?

// return value როდესაც ფუნქცია დაიწყებს ფუნქცისს წაკითხვას და მივა return value - მდე 
// გაჩერდება და გამოზხების შემთხვევაში გამოიტანს პასუხს რომელიც უკვე შეიცავს პასუხს იქ.

// task 9 

// როდესაც ფუნქციაში არ წერია return value აღარ შეინახავს პასუხს და გამოძახების შემთხვევაში
// არ იქნება ნაანგარიშები პასუხი 


// მაგალითად function gamarjoba(user) {
//  return "გამარჯობა," + name; }
// let orive = greet(joni); 
//consol.log(orive); გამოიტანს ორივეს და რეთურნის გარეშე გამოიტანდა მხილოდ ერთს 
// რამდენად სწორია არ ვიცი მაგრამ მგინი თავისი შინაარსით ეგ არის მაგრამ დარწმუნებული არ ვარ

// task 10 
// Given the following function, find mistakes in the code and explain what the function is supposed to do:

function Foo(x) {
    return x * 2;
}
console.log(Foo(7)); // იმედია სწორია არ ვარ დაწრწმუნებული syntax ვგულისხმობ

// task 11 
// Given the following code, find and correct the mistake in the code:

function bar(x) {
    x += 1;
    return x;
}

function foo(x) {
    x = bar(x);
    x *= 2;
    return x;
}

let x = 7;
x = foo(x);
console.log(x); // x should change!

// task 12 

function Doo(x) {
  
    if (x > 5) {
        return x;
    } else {
        return x + Doo(x + 1);
    }
    // რამდენადაც მივხვდი X სანამ არ გახდება მეტი ვიდრე 5, უკაან დააბრუნდებს მაგრა რატო თიტქოს ვერ გავიგე 

}

// task 13 
// ვერ გავიგე 



// task 14  

 function isPalindrome(str) {
    const cleanedStr = str.toLowerCase();

    return cleanedStr === cleanedStr.split('').reverse().join(''); // როგორც გავიგე join property arry ეკუთვნის ინფრომაცია მოვიძე და ისე გავაკეთე
 }
 console.log(isPalindrome("Hello"));
 console.log(isPalindrome("elle"));