const user={
    name:'Vishesh',
    email:'srivastavavishesh59@gmail.com',
    password:12345
}

console.log(user)
console.log(user.name)
console.log(user['email'])

user.password=6543
console.log( user )
console.log( user.password )


user.address = 'gayatri nagar'

console.log( user )

user.addres = {
    city : 'Lucknow',
    state : 'U.P',
    country : 'India',
    pin : 226021
}

console.log( user )

console.log( user.addres.city )

user.family = ['Mummy','Papa','bahan']

console.log( user )
console.log( user.family )
console.log( user.family[2] )

console.log(Object.keys(user))
console.log(Object.values(user))
console.log("-------------------------------------")
console.log(Object.entries(user))


const smartphone = {
    brand : 'Samsung',
    Model : '24 ultra',
    price : 123000,
    colors : ['red','green','blue']
}

console.log( smartphone.colors[1])

smartphone.colors[3] = 'purple'
smartphone.colors.push('grey')

console.log( smartphone.colors)

smartphone.colors[0] = 'black'

console.log(smartphone.colors)

smartphone.colors.splice( 1, 1, 'narangi')

console.log(smartphone.colors)

// to access objects key into a variable short form in ES6

const { email, password} = user;

console.log(email , password)

const arr = [1,2,3,4,7]


const [a,b,c,d,e]=arr
console.log(a,b,c,d,e)
const[n, ,  , ,  m]= arr;

console.log(n,m)

const smartphoneArray = [
    {
        brand : 'vivo',
        model : 'iqoo',
        price : 18000,
        colors : ['red', 'green','blue']
    },
    {
        brand : 'redmi',
        model : '9i',
        price : 1250,
        colors : ['red', 'green','blue']
    },
    {
        brand : 'apple',
        model : '14 pro',
        price : 130000,
        colors : ['voilet', 'green','blue']
    },
    {
        brand : 'apple',
        model : '13 pro',
        price : 133522,
        colors : ['voilet', 'gray','blue']
    },
    {
        brand : 'samsung',
        model : 'ultra',
        price : 12540,
        colors : ['red', 'narangi','blue']
    },
    {
        brand : 'oppo',
        model : 'a6',
        price : 123470,
        colors : ['red', 'green','blue']
    }
]

console.log(smartphoneArray[1].price)
console.log(smartphoneArray[2].colors[0])


// filter in array of objects

const obj=smartphoneArray.filter(( n )=>{ return n.price < 100000})
console.log(obj[0].brand)
query = 'Sam'
// const obj2=smartphoneArray.filter(( n )=>{ return n.brand.toLowerCase() == query.toLowerCase()})
// console.log(obj2)


const obj2=smartphoneArray.filter(( n )=>{ 
    return n.brand.toLowerCase().includes(query.toLowerCase())
})

console.log(obj2)







