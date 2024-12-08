//             MAP
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
const fruits=new Map();
fruits.set("apples",500);
fruits.set("bananas",300);
fruits.set("oranges",200);
let ans=fruits.get("apples");
console.log(ans);
fruits.size;
//this will return the size of the map
fruits.delete("apples");
//The delete() method removes a map element
//The clear() method removes all the elements from a map
fruits.clear();
//the has() method returns true if a key exists in a map
fruits.has("apples")
//this returns the boolean value
let x="";
for(const ans of fruits.keys()){
    x+=ans;
}
//this will return all the keys of the map
let y="";
for(const z of fruits.values()){
    y+=z;
}
//this will return all the values of the map
let text="";
for(const a of fruits.entries()){
    text+=a;
}

//this will return both the keys as well as values of the map
//          WEAK MAP
//in js we have 2 references strong and weak
//just like in c++ we have pointers similarly we have references in js
 let weakMap=new WeakMap();
 let obj={};
 weakMap.set(obj,"ok");
 //we have mapped some obj with some primitive datatype 
//WeakMap mein sirf objects ya functions ko key banaya ja sakta hai. Primitive values (jaise string, number, ya boolean) key nahi ho sakte.
// WeakMap ko directly loop ya iterate nahi kar sakte. Na hi .keys() aur .values() jaise methods available hote hain.
//we can create weak map using new weakMap();
//the garbage collector removes the key pointer from weakmap and also removes the key from memory
let map=new WeakMap();
let user1={name:'john'};
let user2={name:'doe'};
map.set(user1,'added data for user1');
map.set(user2,'added data for user2');
console.log(map.get(user1));
//we will get added data for user1 as our ans

user1=null;
//then in this case undefined is printed

