let a=[2,3,4,5];
a.push(6);
console.log(a);
//[ 2, 3, 4, 5, 6 ]
a.pop();
console.log(a);
//[ 2, 3, 4, 5 ]

a.shift();
console.log(a)
//[ 3, 4, 5 ]
a.unshift(2);
console.log(a);
//[ 2, 3, 4, 5 ]

//Map
function double(n)
{
    return n*2;
}
b=a.map(double)
console.log(b);
//[ 4, 6, 8, 10 ]

//Reduce
function sum(a,b){
    return a+b;
}
c=a.reduce(sum);
console.log(c)
//14

//Filter
arr = new Array(1, 2, 3, 6, 5, 4); 
var new_arr = arr.filter(function (x){ 
    return x % 2==0; 
}); 
//[ 2, 6, 4 ] 
console.log(new_arr) 

//For each
let N = [1, 2, 3, 4, 5]; // Example array

N.forEach(() => {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
});

M=[5,6,7];
function jum(n){
    return n*N;
}
M.forEach(jum);
