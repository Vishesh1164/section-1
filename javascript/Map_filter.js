const nums=[1,2,3,'4',5]
const arr=[]
nums.forEach((n)=>{arr.push(n**3)})
console.log(arr)

console.log("-----------------------------------")
const nums2=[1,2,3,4,5]
const arr2=[]
nums2.forEach((n)=>{
    if(n%2==0)
        arr2.push(n)
    })
console.log(arr2)

console.log("-----------------------------------")
//map Funtion

const nums3=nums2.map((n)=>{return n**3})

console.log(nums3)



console.log("-----------------------------------")

arrr=[223,123,23,67,8766]

const per=arrr.map((m)=>{return m+(m *0.18)})

console.log(per)


console.log("-----------------------------------")

const prices=['₹123.23','₹343.32','₹163.34','₹145.12']

const newarr=prices.map((n)=>{return parseInt(n.slice(1))})

console.log(newarr)


console.log("-----------------------------------")

const newarr2=nums.filter((n)=>{return n%2===0})

console.log(newarr2)

console.log("-----------------------------------")


const name=['vis','kaliya','vishal','hritik']

const name2=name.filter((n)=>{return n.length>5})

console.log(name2)

console.log("-----------------------------------")

const number=[1,2,4,6,9,16,12]

const f=number.filter((n)=>{return Number.isInteger(n**0.5)})

console.log(f)

console.log("-----------------------------------")

const newname=name.filter((n)=>{return n.includes('a')})

console.log(newname)
