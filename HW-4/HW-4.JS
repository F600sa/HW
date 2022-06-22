const friends = ["Melissa", "Marc", "Andrew", "Nick"]
friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase);
});

// logs out "I have a friend named <friend's name>" for each friend


const numbers = [1, 2, 3];
const numbersTimesTwo = numbers.map(function(num) {
  return num * 2;
});

// numsTimesTwo --> [1, 4, 6]

/*--- using an arrow function for the callback ---*/
const timesTwo = numbers.map(num => num * 2);





const numbers1 = [1, 5, 8]

const sqNumbers = numbers1.map( x => Math.pow(x,2))
console.log(sqNumbers)




const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const a = instructors.map( i => i)
console.log(a)



const instructors2 = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const b = instructors2.map( (i) => i + " is awesome")
console.log(b)



const nums = [25, 6, 8, 3 ];
evenNumbers = nums.reduce((acc , num) => acc + (num % 2 == 0 ? 1 : 0) , 0)
console.log(`evenNumbers equals ${evenNumbers}`)



const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const e = people.filter( (p) => p == "jerks")
console.log( "jerks equals" , e);


const book=[
{
   title:'title',
   author:'author',
   alreadyRead:true,
} ,
{
    title:'title',
    author:'author',
    alreadyRead:true,
 },
 {
    title:'title',
    author:'author',
    alreadyRead:true,
 }
]

for ( i=0;i<book.length;i++)
   {
    let a =book[i]
    var book2=a.title +" by "+a.author
    if(a.alreadyRead){
        console.log("You already read"+book2)
    }
    else{
        console.log('You still need to read ' + book2);
    }
    // console.log(a.title,a.author,a.alreadyRead)
   }