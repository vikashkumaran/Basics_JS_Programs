function orderFood(foodType){
    const payment="Gpay"
   if(foodType){
    var food="Pizza"
    console.log("Ordered "+food +" with "+ payment)
   }
   else{
   console.log("HomeMade " +food)
   }
   console.log(payment)
   console.log(food)
}



//orderFood(true)
orderFood(false)


//console.log(payment)