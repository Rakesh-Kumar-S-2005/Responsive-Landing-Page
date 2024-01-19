import {cartList} from '../scripts/cart.js';
import {productInfo} from '../scripts/cartItems.js';
import {cartListStorage} from '../scripts/cart.js';
let htmlElements1;
let concatHtml1=' ';

updateCart();
let eventListener2= document.querySelectorAll('.delete');
eventListener2.forEach((deleteButton) => {
    deleteButton.addEventListener('click',() => {
        cartList.forEach((cartItems,index) => {
            if(cartItems.cartId===deleteButton.dataset.productIds) {
                cartList.splice(index,1);
                cartListStorage();
                updateStorage();
                updateCart();
                
                
            }
        })
    })
})
function updateStorage()  {
    cartList=JSON.parse(localStorage.getItem('cartlist'));
}


function updateCart() {
    cartList.forEach((cartListItems,index) => {
        productInfo.forEach((cartproducts,index) => {
            if(cartListItems.cartId===cartproducts.id) {
    
                htmlElements1=`
                <div class="cart info1">
                    <div class="delivery-date">Delivery date: Wednesday, January 24</div>
                    <div class="cart-item-details">
                        <div class="image-container">
                            <img class="cart-image" src="${cartproducts.imageLink}">
                        </div>
                        <div class="cart-description">
                            <div class="name">${cartproducts.imageDescription}</div>
                            <div class="cart-amount">${(cartproducts.price)/100}</div>
                            <div class="cart-quantity">
                                <div class="quantity">Quantity: ${cartListItems.quantity}</div>
                                <div class="update">Update</div>
                                <div class="delete" data-product-ids="${cartproducts.id}">Delete</div>
                            </div>
                        </div>
                        <div class="cart-delivery">
                            <div class="delivery-option">Choose a delivery option:</div>
                            <div class="radio">
                                <input class="radio1" type="radio" name="options">
                                <div class="options">
                                    <div class="date-option">Wednesday, January 24</div>
                                    <div class="delivery-type">FREE Shipping</div>
                                </div>
                            </div>
                            <div class="radio">
                                <input class="radio1" type="radio" name="options">
                                <div class="options">
                                    <div class="date-option">Thursday, January 18</div>
                                    <div class="delivery-type">$4.99 - Shipping</div>
                                </div>
                            </div>
                            <div class="radio">
                                <input class="radio1" type="radio" name="options">
                                <div class="options">
                                    <div class="date-option">Tuesday, January 16</div>
                                    <div class="delivery-type">$9.99 - Shipping</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            `;
            concatHtml1+=htmlElements1;
            document.querySelector('.left-section').innerHTML=concatHtml1;
            
            }
        })
            
    });
}






