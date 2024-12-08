//Nullish Coalescing Operator ??
//ye ek special character h jo null and undefinded values ko handle krta hai'

let firstname=null;
let defaultname="guest";
let ans=firstname??defaultname;
//yaha null h issliye guest hoga print
let num=0;
let result=num??10;
console.log(result)
//0 hoga print