var fruit={
name:"Oranges",
price:30.00,
quantity:2,
fruitCost:function(price,quantity){
    totalPrice=price*quantity
    return this.fruitCost=totalPrice

    }



} 
fruit.fruitCost(30.00,2);
console.log (fruit.quantity + "  " + fruit.name + "  " + " for KES " + totalPrice );




/*Object examples are:
1.Board
2.Table

function examples are:
1.BoardChange:function(color,size){}
2.smartTable:function(length,width){}

method examples are:
1.Board.lenght;
2.Table.size;
*/
