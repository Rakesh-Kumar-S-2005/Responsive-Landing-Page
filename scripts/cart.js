
let cartNumber=0;
export let cartList=[];
let eventListener1= document.querySelectorAll('[data-product-id]');
eventListener1.forEach((button,index) => {
    button.addEventListener('click',() => {
        let random=0;
        for(let i=0; i<cartList.length; i++) {
            if(button.dataset.productId===cartList[i].cartId) {
                cartList[i].quantity++;
                random++;
            }
        }
        if(random===0) {
            cartList.push(
                {
                    cartId:button.dataset.productId,
                    quantity:1
                }
            );
        } 
        cartListInfo();
        noOfItemsincart();
        cartListStorage();
        
    })
})
function cartListInfo() {
    cartList.forEach((object,index) => {
        console.log(object.cartId);
        console.log(object.quantity);
    })
}
function noOfItemsincart() {
    cartNumber++;
    document.querySelector('.cart-number').innerHTML=cartNumber;
}
function cartListStorage() {
    localStorage.setItem('cartlist',JSON.stringify(cartList));
}

cartList=JSON.parse(localStorage.getItem('cartlist'));


