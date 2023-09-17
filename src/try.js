

var number=[1,2,3,4,5,6];
// map method 

// function double(x) {
//     return x*2;
// }

// const newarray=number.map(double);

const newarrray=number.map(function (x) {
    return x*2
});

// filter method
const filterarray= number.filter(function (x) {
    return x>2;
})
//for Each method
const newarr=[] ;
number.forEach(function (x) {
    if(x>3){
        newarr.push(x)
    }   
})
// reduce

const reducenum=number.reduce(function (accumulator, currentnumber) {
    console.log("a="+accumulator)
    console.log("c="+currentnumber)
    return accumulator+currentnumber;
})
//find method 
const findnum = number.find(function (x) {
    return x>3;
})



console.log(newarrray)
console.log(filterarray)
console.log(newarr)
console.log(findnum)
// console.log(reducenum)

// challenge
// const  arr = emojipedia.map(function (x) {
//     return x.meaning
// })
// emojipedia.filter(function (x) {
    
// })


// import emojipedia from "./emojipedia";
// const newemoji = emojipedia.map(function (emojientry) {
//   return emojientry.meaning.substring(1,100)
// })
// console.log(newemoji);


// arrow function 


import emojipedia from "./emojipedia";
const newemoji = emojipedia.map( (emojientry) => {
  return emojientry.meaning.substring(1,100)
})
console.log(newemoji);