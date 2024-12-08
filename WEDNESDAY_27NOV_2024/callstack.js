// The call stack is a crucial concept in JavaScript’s runtime environment, representing the mechanism by which the JavaScript engine keeps track of function calls in a program. It operates as a Last In, First Out (LIFO) data structure, meaning that the last function called is the first one to be resolved.
function f1() {
	console.log('Hi by f1!');
}

function f2() {
	f1();
	console.log('Hi by f2!');
}

f2();
//pehle f2() pe gye ffir f2 fn pe then f1 m and vaha ka priint hogyaaa
