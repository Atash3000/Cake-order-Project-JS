"use strict";

const patisserie = {
  bananaCaramel: {
    stock: 3,
    price: 9.99,
  },
  contessa: {
    stock: 5,
    price: 7.99,
  },
  concorde: {
    stock: 11,
    price: 22.99,
  },
  mouseCake: {
    stock: 8,
    price: 16.99,
  },
  confettiSuprise: {
    stock: 9,
    price: 14.99,
  },
};
console.log(patisserie['mouseCake'].stock)
const cakeType = document.getElementById('cakeSelect');
const orderAmount = document.getElementById('cakeAmount');
const orderBtn = document.getElementById('submit_btn');


const checkOrder = (order) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
     let itemName = patisserie[order[0]]
      
   let totalPrice= patisserie[order[0]].price *order[1]

    if(itemName.stock >= order[1]){
      console.log(`item is submitted! Total amout is ${totalPrice}`)
        resolve([totalPrice,order])
        
        }else if(itemName.stock < order[1]){
        reject('sold out')
      }
    }, 2000);
  })


};

const payment = (resolvedValueArray) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("confirm pls PRES A ")
      let itemName = resolvedValueArray[1][0]
     
      let totalPrice= resolvedValueArray[0]

      let aksUser = document.addEventListener('keydown',(e)=>{
          if(e.key=='a'){
            console.log(`I got confirmation your order ${itemName} total is ${totalPrice}`)
        resolve(`I got confirmation your order ${itemName} total is ${totalPrice}`)
         }else {
         reject('please confirm your order')
}
      });
      
    }, 2000);
  })
 
  
}

// const stockControl = (resolvedValueArray) => {
  
//     //setTimeout

//   }



orderBtn.onclick = ()=>{
  
 let order = ['contessa', 5];   // sample order template

 let promise1 = checkOrder(order)
promise1.then(resolved=>payment(resolved))
 .then(resolved1=>stockControl(resolved1))
.then(resolved2=>console.log(resolved2))
 .catch(rejected=>console.log(rejected))
 
  //then
  //catch  

}