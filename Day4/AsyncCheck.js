function orderFood(){
    return new Promise((resolve)=>{
    console.log("Menu selected")
    setTimeout(() => {
        resolve();
    }, 3000);
})
}


function prepareFood(){
   return new Promise((resolve,reject)=>{
 console.log("Chef prepares")
    setTimeout(() => {
        isPrepared=false
       if(isPrepared){
        resolve();
       } else{
        reject()
       }
    }, 2000);
   })       
}


function deliverdFood(){
    return new Promise((resolve)=>{
        console.log("Delivered to table")
        resolve();
    })    
}
// orderFood().then(()=>prepareFood()).then(()=>deliverdFood())
//            .catch(()=>"issue with order")
//  async await  -->come in pair 



async function dinner(){
    await orderFood()
    await prepareFood()
    await deliverdFood()
}


dinner()