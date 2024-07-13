let a=20
console.log(a);

var b="new";
console.log(b);

const c= 10>0;
console.log(c);

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));


let d=10;
console.log(d);
d=20;
console.log(d);

// c=10;

// Script to print the name and type of variable or obj or string 
const e=[1,"a",true,[]]
for(let i=0;i<4;i++)
{
    console.log(e[i])
    console.log(typeof(e[i]));
}

// Script to assign a let and a const to a value and re-assign it to it again and to check error
for(let i=0;i<2;i++)
{
    if(i=0)
    {
        let i=20;
        i=40;
        console.log(i);
    }
    else{
        const i=20;
        i=40;
        console.log(i);
    }
}