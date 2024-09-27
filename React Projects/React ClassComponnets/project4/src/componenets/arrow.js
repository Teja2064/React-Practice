
// const Rest=["teja",12,12,3,3,]

// const[you,hrui,trt,g,ger]= Rest

// console.log(ger)

// const rider={
//     ligher:"sharp"
// }

// const{ligher}=rider
// console.log("lighe")
// console.log("lig")
// setTimeout(()=>{
//     console.log("third code")}, 3000
// )
// console.log("ligh")
// console.log("ligr")

// const Resgister =()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('please resgister')
//             reject("not success")
//         },3000)
        
//     })
// }
// const Login=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("please login")
//             resolve()
//         }, 1000)
//     })
// }
// // Resgister().then(
// //     (data)=>{console.log(data)})

// // Login()
// const Thank=()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("THANK YOU")
//         resolve()
//     },1000)})
// }
// Resgister().then(Login).then(Thank).catch((err)=>{console.log(err)})

// class Product{
//     constructor(){
//         this.age=23
//     }
//     printAge(){
//         console.log(this.age)
//     }
// }

// class Virat extends Product{
//     constructor(){
//         super()
//         this.name="puma"
//         this.age=34
//     }
//     printName(){
//         console.log(this.name)
//     }

// }
// const result=new Virat()
// result.printAge()
// result.printName()

// function Vehicle(a,b,c){
//     this.model1=a,
//     this.model2=b,
//     this.c=c
//     this.drive = function(){
//         console.log(`you drive the ${this.model1}`)
//     }
// }

// const Vehicle1= new Vehicle("tesla","cyber","ford")
// Vehicle1.drive()

// class Mathlearn{
//     static Pi=3.143
// }
// console.log(Mathlearn.Pi)

// class Animal{
//     alive=true;

//     eat(){
//         console.log(`This ${this.name} is eating`)

//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     }
// }

// class Rabbit extends Animal{
//     name="rabbit"
// }
// class Hawk extends Animal{
//     name="hawk"
// }
// const rabbit= new Rabbit()
// rabbit.eat()
// console.log(rabbit.alive)


// class User{
//     static userCount=0
//     constructor(username){
//         this.username=username
//         User.userCount++


//     }
//     static getUserCount(){
//         console.log(`there are ${User.userCount} users online`)
//     }
//     sayHello(){
//         console.log(`hello my username is ${this.username}`)
//     }
// }

// const User1 =new User("Virat")
// console.log(User1.username)
// console.log(User.userCount)
// User.getUserCount()
// User1.sayHello()

// class Person{
//     constructor(){

//     }
// }
// let obj = new Person('john',25,3500)

class Parent{

    getMobile(){
        console.log("iphone 15")
    }
}

class Child extends Parent{

    getMobile(){
        console.log("iphone 16")
    }
}

let Obj = new Child()
Obj.getMobile()
