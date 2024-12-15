//USING custom array like obj
function CustomArray() {
    this.data = [];
    // ye ek empty array h
    
    this.add = function(element) {
        //this.add ye wala aur upar wala alag hai 
        //vo ek empty array hai and this.add ek function h jiske through hum apne array m element insert kar skte hai
        //function element ka kuch naam nahi hai toh ye anonymous function hai
      this.data.push(element);
    };
    
    this.remove = function(index) {
      if (index >= 0 && index < this.data.length) {
        this.data.splice(index, 1);
      } else {
        console.log('Index out of bounds');
      }
    };
    
    this.get = function(index) {
      if (index >= 0 && index < this.data.length) {
        return this.data[index];
      } else {
        console.log('Index out of bounds');
        return null;
      }
    };
  
    this.length = function() {
      return this.data.length;
    };
  }
  
  let customArray = new CustomArray();
  customArray.add(10);
  customArray.add(20);
  customArray.add(30);
  
  console.log(customArray.get(1)); 
  console.log(customArray.length()); 
  
  customArray.remove(0);
  console.log(customArray.length()); 
  