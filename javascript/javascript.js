for(let i=1;i<=5;i++)
    console.log(i)
console.log("----------------------------------------")
for(let i=5;i>0;i--){
    console.log(i)
}

console.log("----------------------------------------")
let v=1;
while(v<=5)
    {
    console.log(v);
    v++;
}
for(let r=1;r<=20;r++)
{
    if(r%2!=0)
    {
        console.log(r);
    }
    else{
        //console.log(r);
    }
}
let sum=0
for(let o=1;o<=10;o++)
{
    sum=sum+o
   console.log(sum) 
}
console.log("----------------------")
for(let l=1;l<=10;l++)
{
    console.log("15"+"x"+l+"="+15*l)
}
console.log("----------------------------------")
fruits=["apple","banana","orange","papaya"]
for(q=0;q<fruits.length;q++)
{
    console.log(fruits[q])
}
let person={
    name:"ankita",
    age:24,
    city:"Lucknow"
};
for(let key in person){
    console.log(key+":"+person[key])
}
let n=[1,5,6,9,5,3]
for(let number of n){
    console.log(number)
}