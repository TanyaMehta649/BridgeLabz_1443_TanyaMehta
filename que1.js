//add items in a cart
//view the total prices of items
//remove the item by name
let cart=[];
//we have created an empty array
function additem(name,price){
    cart.push({name,price});
    console.log(`{name},added to cart`);

}
function totalprice(){
    let total=0;
    for(let i=0;i<cart.length;i++){
        total+=cart[i].price;
    }
    console.log(total);
}
