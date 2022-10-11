// SLICING

 const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
 const modifiedFoods=foods1.slice(1,4);
console.log(modifiedFoods); 

//SPLICING

const foods2 = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
foods2.splice(2,0,"noodles, icecream");
console.log(foods2); 

//FILTER

const arr = [12,324,213,4,2,3,45,4234];
const n1 = [];
const n2 = [];
arr. forEach(number=>{
    if(number%2==0)
    {
        n1.push(number);
    }
    else if(number%2==1)
    {
        n2.push(number);
    }

})
console.log(n1);
console.log(n2);


//prime.no  using FILTER
const result=[];
function isPrime(arr){
    if(arr<2) return false;
    for(let k=2;k<arr;k++){
        if(arr%k == 0){
            return false;
        }
    }
    return true;
}
arr.forEach(function (ans){
    const item=isPrime(ans);
    if(item){
        result.push(ans);
    }
});
console.log("Prime num: "+ result);

//REJECT NON-PRIME NUMBERS
const result1=[];
arr.forEach(function(ans1){
    const nonPrime=isPrime(ans1);
    if(!nonPrime){
        result1.push(ans1);
    }   
});
console.log("Non-Prime num: "+ result1);

//MAP METHOD
const myArray = [11, 34, 20, 5, 53, 16];
const SquareArr=myArray.map(myFunction);
function myFunction(num) {
    return num * num;
  }
console.log(SquareArr);

//REDUCE METHOD
const arr6=[1,2,3,4,5,6,7,8,9];
const multiply=arr6.reduce((a,b)=>a*b,1);
console.log(multiply);