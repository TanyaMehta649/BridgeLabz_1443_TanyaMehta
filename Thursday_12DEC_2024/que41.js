// Create a function to calculate the distance between two points defined by their x, y coordinates
//sq root of (x2-x1)^2+(y2-y1)^2
function finddistance(x1,y1,x2,y2){
    let dx=x2-x1;
    let dy=y2-y1;
    let ans=Math.sqrt(dx*dx+dy*dy);
    return ans;
}
let point1={x:1,y:2};
let point2={x:4,y:6};
console.log(finddistance(point1.x,point1.y,point2.x,point2.y));
