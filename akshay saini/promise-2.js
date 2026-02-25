const cart=['pants','shoes','kurtas'];

const promise=createOrder(cart);



promise
.then(function(orderId){
   console.log(orderId);
   return orderId;
})
.then(function(orderId){
    return  processedToPayment(orderId)
  
})
.then(function(paymentInfo){
console.log(paymentInfo);

})
.catch(function(err){
console.log(err.message);

})
//ahi catch  upar na  3 then lakhya che aeni j error handle karse , cheellu then definatley execute thase

.then(function(){
    console.log('No matter what happens, i will be definately be called');
    
})

function createOrder(cart) {
    const pr=new Promise(function(resolve,reject){

        //createOrder
        //validateCart
        //orderid

        if (!Validatecart(cart)) {
            const err=new Error('cart is not valid');
            reject(err);
        }
      //logic for createOrder

      const orderId='1234'
        if (orderId) {
            setTimeout(function(){
                resolve(orderId)
            },5000)
         
        }

    });
    return pr

    //Note--Only one either resolve or reject is executed
    //bane mathi ekj execute thase resolve thay ke pachi reject 
    
}


function processedToPayment(orderId) {
    return new Promise(function(resolve,reject){
        resolve('payment successfull')
    })
}
function Validatecart(cart) {
    return false;
}



//HOMEWORK---
// createOrder,
// proceedToPayment,
// showordersummary,
// updatewallet