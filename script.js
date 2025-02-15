'use strict'

const input1 = "gggggggbbbbccccc";
let array = [];
let symbols = '';
for(let i=0;i<input1.length;i++){//this part of code used to slice original string to several parts like 'aaa' 'bb' 'cccc' and store it in the array.
    if(input1[i]===input1[i+1]){ // check are the next and current symbols are the same 
        symbols += input1[i]; // and if so, it saves the current symbol in a special variable
    }
    else{//if next and current symbols not equal, symbol is added to special variable and pushed in array
        symbols += input1[i];
        array.push(symbols);
        symbols='';//after collecting all needed symbols variable cleaned to use it for next line of symbols
    }
    

    //result of this part is array looking like this [ 'ggggggg', 'bbbb', 'ccccc' ]
}
//Now we can count how many symbols are in each string 
for(let i =0; i<array.length;i++){
    array[i] = array[i].slice(0,1) + array[i].length; // modifing each line of array using slice method to store only first symbol and add length of the current string 
}
const output = array.join('');// converting array of modified strings to string using empty separator
console.log(`First task output: ${output}`);

//Optional 
const input = output; // as input using output from first part 
array.length = 0; // clear the array
let i = 0; 
while(i<input.length){
    array.push(input.slice(i,i+2)); // using slice to store each 2 symbols in different lines of array 
    i=i+2;
}
for(let i = 0;i<array.length;i++){
    array[i] = array[i].slice(0,1).repeat(Number(array[i].slice(1))); // using slice and repeat method to store in each line the specified number of symbols
}
const output1 = array.join('');// converting array of modified strings to string using empty separator
console.log(`Second task output: ${output1}`);
