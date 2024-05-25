"use strict";
// ////****   Assignment 1: Building Your Friend List   ****////
// type Friend = {firstName:string,lastName:string,id?:number}
// let people : {friends : Friend[]} = {friends: []}
// let friend1 : Friend = {firstName:"Asifa", lastName:"Qasim", id:5}
// let friend2 : Friend = {firstName:"Mutaiba", lastName:"Chohan", id:8}
// let friend3 : Friend = {firstName:"Javeria", lastName:"Siddique", id:10}
// people.friends.push(friend1)
// people.friends.push(friend2)
// people.friends.push(friend3)
// console.log(people);
/////*****    Assignment 2:Manipulating an Array: Rearranging Words     ****/////
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.shift();
scrambledArray.unshift("I");
scrambledArray.pop();
scrambledArray.splice(1, 3);
scrambledArray.splice(3, 0, "student", "of");
let responce = scrambledArray.join("  ");
console.log(responce);
/////****    Assignment 3: Company Product Catalog     ****/////
// type Products = {name:string,model:number,cost:number,quantity:number,}
// let inventory : Products[] = []
// let product1 : Products = {name: "iPhone",model: 2024,cost: 600000,quantity: 1}
// let product2 : Products = {name: "laptop",model: 2020,cost: 50000,quantity: 1}
// let product3 : Products =  {name: "watch",model: 2024,cost: 11000,quantity: 2}
// inventory.push(product1)
// inventory.push(product2)
// inventory.push(product3)
// console.log(inventory[2].quantity)
// /////****     Assignment 4: Student List Organizer        ****\\\\\
// type Student = {name: string,seniorStudent: boolean,assignmentComplete: boolean,}
// let student1 :Student = {name:"Misbah",seniorStudent : true,assignmentComplete:true}
// let student2 :Student = {name:"Asifa",seniorStudent : false,assignmentComplete:true}
// let student3 :Student = {name:"Ayesha",seniorStudent : false,assignmentComplete:false}
// let student_1 =  student1.seniorStudent && student1.assignmentComplete
// let student_2 =  student2.seniorStudent && student2.assignmentComplete
// let student_3 =  student3.seniorStudent && student3.assignmentComplete
// function students (){
// if (student1.assignmentComplete && student1.seniorStudent === student_1){
//     console.log(student1);
// }else if (student2.assignmentComplete && student2.seniorStudent === student_2){
//     console.log(student2);
// }else{
//     console.log(student3);   
// }}
// students()
