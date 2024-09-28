// question 1
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
var b=a.length
console.log(b);
// question 2
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
a.pop();
console.log(a);
// question 3
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
a.unshift("charan")
console.log(a);
// question 4
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
a.shift();
console.log(a);
// question 5
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
a.reverse();
console.log(a);
// question 6
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
console.log(a.indexOf(true));
console.log(a);
// question 7
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
console.log(a.includes("a"));
// question 8
var a=["a","d","f","c","g","b","e","f"];
console.log(a.sort());
var b=["1","5","4","6","3","2","8","10"];
console.log(b.sort((a,b)=>(a-b)));
// question 9
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
console.log(a.join(","));
// // question 10
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
a.push("charan");
a.shift();
console.log(a);
// // question 11
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
var b=a.reverse();
console.log(b.join(","));
// // question 12
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
var b=a.sort();
console.log(b);
b.pop();
console.log(b);
// // question 13
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
a.unshift("ram","krishna")
a.shift()
console.log(a.length);

console.log(a);
// // question 13
var a=["a",{name:"sai",age:20},15,[1,2,3,4],true]
 var b=["a","d","f","c","g","b","e","f"];
 var c=a.concat(b).sort();
 c.pop();
console.log(c);


