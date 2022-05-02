// // UNDERSTAND HOW HOISTING WORKS

// //GIVEN #1
// console.log(hello);                                   
// var hello = 'world';   
// //AFTER HOISTING
// //var hello;
// //console.log(hello); //logs undefined
// //hello = 'world';
                            
// //GIVEN #2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// //AFTER HOISTING
// //function test();
// //var needle;
// //needle = 'haystack';
// //test();
// //needle='magnet';
// //console.log(needle) //logs magnet

// //GIVEN #3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// //AFTER HOISTING
// // var brendan;
// // brendan = 'supercool';
// // console.log(brendan) // logs super cool as function was never called

// //GIVEN #4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// //AFTER HOISTING
// //var food;
// //var eat();
// // food = 'chicken'
// // console.log(food) // logs chicken
// // var food;
// //food = "half-chicken"
// //console.log(food) // logs halfchicken
// //food = 'gone';

// //GIVEN #5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// //AFTER HOISTING
// // var mean;
// //error

// //GIVEN #6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// //AFTER HOISTING
// //var genre;
// //console.log(genre) //logs undefined
// //genre = 'disco'
// //rewind();
// //  var genre;
// //  genre = 'rock'
// //  console.log(genre) // logs rock
// //  genre = 'r&b'
// //  console.log(genre) // locks r&b
// //console.log(genre) // logs disco

// // GIVEN #7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// // AFTER HOISTING
// //ERROR NO DECLARATION
// // X prediction was wrong X




