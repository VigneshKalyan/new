/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
let s=arr.map(function(a){
     return `${a.id} ${a.name} ${a.age} ${a.profession=="developer"}`;
 });
return s;
}

console.log(PrintDeveloperswithMap());



function PrintDeveloperbyForEach() {
    
    let s=arr.forEach(function(value,key,a){
        if(a[key].profession==="developer") 
       console.log(`${a[key].id} ${a[key].name} ${a[key].age}`);
     
    });
  

}





function addData() {
 let employee = {
  id: 1, 
  name: "john", 
  age: "18",
  profession: "developer" 
  
     };
let h=[{id:4,name:"susan",age:"20",profession:"intern"}];

h.push(employee);
return h;
}

console.log(addData());

function removeAdmin() {
  arr.splice(2);
}
removeAdmin();
console.log(arr);

function concatenateArray() {
    let arr1 = [
  { id: 4, name: "john", age: "18", profession: "developer" },
  { id: 5, name: "jack", age: "20", profession: "developer" },
  { id: 6, name: "karen", age: "19", profession: "admin" },
];
  return arr.concat(arr1);
}
console.log(concatenateArray());
