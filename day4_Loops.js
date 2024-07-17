//Feature request codes
for(let i=1;i<11;i++)
{
    console.log(i);
}

let a=1
while(a<11)
{
    console.log(a);
    a++;
}

//Table of 5
for(let j=1;j<11;j++)
{
    m=5*j;
    console.log("5 *",j,"=",m);
}

//Nestd loop pattern already done in DSA sheet
//Sum till 10
let k=1;
let sum=0;
while(k<11)
{
    sum=sum+k;
    k++;
}
console.log(sum);

//Factorial using a do while
let num=5;
let sam=0;
do{
    sam=sam+(num+(num-1));
    num--;
}
while(num!=0)
console.log(sam)