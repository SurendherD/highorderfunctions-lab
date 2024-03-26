const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(num1,num2){
    let modifiedFood=[];
    for(let i=num1; i<num2-1; i++){
        modifiedFood.push(foods[i]);
    }
    return modifiedFood;
}
// Progression 2:
function spliced(){
    foods.splice(2,0,"noodles","icecream");
    return foods;
}

// Progression 3:
function isEven(number){
    return number%2==0?true:false;
}

function isPrime(number){
    var count=0;
    if(number<=1){
        return false;
    }
    else{
        for(let i=2;i<=number;i++){
            if(number%i==0){
                count=count+1;
            }
        }

        if(count==1){
            count=0;
            return true;
        }
    }
}

function checkNumber(numberArray,operation){
    newArray=numberArray.filter(operation);
    return newArray;
}

// Progression 4:
function reject(numberArray){
    nonPrimeArray=[];
    numberArray.forEach(element => {
        isPrime(element)?null:nonPrimeArray.push(element);
    });
    return nonPrimeArray;
}

function nonPrime(numberArray){
    var result=reject(numberArray);
    return result;
}

// Progression 5:
isEvenUsingLambda=number=>number%2==0;

// Progression 6:
function findSquareOfNumbers(myArray){
    return myArray.map(element=>element*element);
}

// Progression 7:
function multiply(myArray){
    return myArray.reduce((multi,element)=>{
        return multi*element});
}

function sumOfSquares(myArray){
    return myArray.reduce((total,element)=>{
        return total+(element*element);
    },0);
}

