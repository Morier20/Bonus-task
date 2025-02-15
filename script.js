'use strict'

const input1 = "gggggggbbbbccccc";
let array = [];
let symbols = '';
for(let i=0;i<input1.length;i++){
    if(input1[i]===input1[i+1]){
        symbols += input1[i];
    }
    else{
        symbols += input1[i];
        array.push(symbols);
        symbols='';
    }
}
for(let i =0; i<array.length;i++){
    array[i] = array[i].slice(0,1) + array[i].length;
}
const output = array.join('');
console.log(`First task output: ${output}`);

//Optional 
const input = output;
array.length = 0;
let i = 0;
while(i<input.length){
    array.push(input.slice(i,i+2));
    i=i+2;
}
for(let i = 0;i<array.length;i++){
    array[i] = array[i].slice(0,1).repeat(Number(array[i].slice(1)));
}
const output1 = array.join('');
console.log(`Second task output: ${output1}`);