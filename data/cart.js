let cartNumber=0;
export let cartList=[];

let eventListener2=document.querySelectorAll('[data-product-id]');
eventListener2.forEach((cartButton,index) => {
    cartButton.addEventListener('click',() => {
        let random=0;
        for(let i=0; i<cartList.length;i++) {
            if(cartButton.dataset.productId===cartList[i].cartId) {
                cartList[i].quantity++;
                random++;
            }
        }
        if(random===0) {
            cartList.push(
                {
                    cartId:cartButton.dataset.productId,
                    quantity:1,
                    deliveryId:'1'
                }
            )
        }
        displayCartInfo();
        updateCartNumber();
        cartListStorage();
        
    })
})
function displayCartInfo() {
    cartList.forEach((cartItems,index) => {
        console.log(cartItems.cartId);
        console.log(cartItems.quantity);
        console.log(cartItems.deliveryId); 
    })
}
function updateCartNumber() {
    cartNumber++;
    document.querySelector('.cart-number').innerHTML=cartNumber;
}
export function cartListStorage() {
    localStorage.setItem('cartList',JSON.stringify(cartList));
}
cartList=JSON.parse(localStorage.getItem('cartList'));