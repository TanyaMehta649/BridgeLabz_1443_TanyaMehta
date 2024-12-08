// one way
const letters=new Set(["a","b","c"]);
console.log(letters.size);
let text="";
for(const  x of letters){
    text+=x;
}
//second way
const ans=new Set();
ans.add(1);
ans.add(2);
ans.add(3);
ans.add(4);

answer=letters.has("a");
//returns boolean value
const myIterartor=letters.values();
const wow=letters.values();

//third way
const q=new Set();
const a="a";
const b="b";
const c="c";
q.add(a);
q.add(b);
q.add(c);
//set can store any type of values including primitive types and objects and ensure unique elements r stored only
//set has a size property that allws u to determine the no of element it contains

//if we add equal elements only first one gets added
//set maintains the insertion order alsp
//           WEAK SET
// WeakSet mein sirf objects store kiye ja sakte hain. Primitive values (jaise numbers, strings, booleans) nahi ho sakte.
//this is bcoz weakset is designed to work with object references and doesnt has size property
// No Iteration:

// WeakSet ko iterate (loop) nahi kar sakte. Na to .forEach() method available hota hai, na hi .values() ya .keys().

//it doesnt maintain insertion order
let set=new WeakSet();
let user1={name:'john'};
let user2={name:'doe'};
set.add(user1);
set.add(user2);
console.log(set.has(user1));
//true is printed
console.log(set.has(user1));
//false is printed

