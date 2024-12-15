//CUSTOM ARRAYS IN JS
//1 using array constructor
let myArr=new myArr(5);
console.log(myArr);
[     ]
let arr=new Array(1,2,3,4,5);
console.log(arr);
//2 using array literal
//this is the most common way
let arr1=[1,2,3,4,5];
console.log(arr1);
//we can also create arrays with mixed type of elements
//3 using Array.of()
let ans=Array.of(1,2,3,4,5);
console.log(ans)
//4 using array.from()
let str='hello';
let myarr=Array.from(str);
//converts string to array of characters
//5. using fill to initialize values
let areee=new Array(5).fill(0);
//creates an empty array and fills it with zeroes
//6.using custom array class
// You can create your own custom array class by defining a class and adding methods for manipulating the array. This can give you full control over how elements are added, removed, or accessed.
class CustomArray{
    constructor(){
        this.data=[];
        //this is an empty array initially which will hold elements added to the array 
    }
    add(element){
        this.data.push(element);
        //add method allows us to add an element to data array by push method

    }
    remove(index){
        if(index>=0 && index< this.data.length){
            this.data.splice(index,1);
        }
        else{
            console.log('index out of bounds');
        }
    }
    //The remove method removes an element from the data array at the given index using splice().
// If the index is invalid (out of bounds), it logs "Index out of bounds" to the console.
print(){
    console.log(this.data);
}
//this will print the entire array
//method to get element
get(index){
    if(index>=0 && index<this.data.length){
        return this.data[index];
    }
else{
    console.log('index out of bounds');
    return null;
}
}
//this will return particular that element from the array
length(){
    return this.data.length;
    //this will return the length of the array
}
}
let myArray=new CustomArray();
myArray.add(1);
myArray.add(2);
myArray.add(3);
myArray.print();
