import {cartList} from '../scripts/cart.js';
import {productInfo} from '../scripts/cartItems.js';
import {cartListStorage} from '../scripts/cart.js';
import {convertingMoney} from '../avoidrepeat.js/currency.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let today=new dayjs();
let seven=today.add(7,'days');
let three=today.add(3,'days');
let todayDate=today.add(11,'days');
export let todayDateDetails=todayDate.format(' dddd, MMMM D')
export let aftersevendays=seven.format(' dddd, MMMM D');
export let afterthreedays=three.format(' dddd, MMMM D');
updateCart();
document.querySelector('.checkout').innerHTML=`Checkout (<span class="items" data-cart-number="0">${cartList.length} Items</span>)`;


function updateCart() {
    let concatHtml1=' ';
    cartList.forEach((cartListItems,index) => {
        productInfo.forEach((cartproducts) => {
            if(cartListItems.cartId===cartproducts.id) {
    
                    let htmlElements1=`
                    <div class="cart info1">
                        <div class="delivery-date">Delivery date: ${todayDateDetails} </div>
                        <div class="cart-item-details">
                            <div class="image-container">
                                <img class="cart-image" src="${cartproducts.imageLink}">
                            </div>
                            <div class="cart-description">
                                <div class="name">${cartproducts.imageDescription}</div>
                                <div class="cart-amount">$${convertingMoney(cartproducts.price)}</div>
                                
                                <div class="cart-quantity">
                                    <div class="quantity">Quantity: ${cartListItems.quantity}</div>
                                    <div class="update">Update</div>
                                    <div class="delete" data-product-ids="${cartproducts.id}">Delete</div>
                                </div>
                            </div>
                            <div class="cart-delivery">
                                <div class="delivery-option">Choose a delivery option:</div>
                                <div class="radio">
                                    <input class="radio1" type="radio" name="${cartproducts.id}" checked>
                                    <div class="options">
                                        <div class="date-option">${todayDateDetails}</div>
                                        <div class="delivery-type">FREE Shipping</div>
                                    </div>
                                </div>
                                <div class="radio">
                                    <input class="radio1" type="radio" name="${cartproducts.id}">
                                    <div class="options">
                                        <div class="date-option">${aftersevendays}</div>
                                        <div class="delivery-type">$4.99 - Shipping</div>
                                    </div>
                                </div>
                                <div class="radio">
                                    <input class="radio1" type="radio" name="${cartproducts.id}">
                                    <div class="options">
                                        <div class="date-option">${afterthreedays}</div>
                                        <div class="delivery-type">$9.99 - Shipping</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                `;
                concatHtml1+=htmlElements1;
                
                
            }
        })
            
    });
    document.querySelector('.left-section').innerHTML=concatHtml1;
    document.querySelector('.checkout').innerHTML=`Checkout (${cartList.length} Items)`;
    let eventListener2= document.querySelectorAll('.delete');
    eventListener2.forEach((deleteButton) => {
        deleteButton.addEventListener('click',() => {
            cartList.forEach((cartItems,index) => {
                if(cartItems.cartId===deleteButton.dataset.productIds) {
                    cartList.splice(index,1);
                    cartListStorage();
                    updateCart();
                    
                

                }
            })
        })
    })
    
    
    if(cartList.length===0) {
        let htmlElements3=`
        
            <div class="Empty-container">
            
                <div class="Empty-cart">Your Cart is empty</div>
                <a class="homepage-link" href="homepage.html"><button class="homepage-button">View Products</button></a>
            </div>
        `;
        document.querySelector('.left-section').innerHTML=htmlElements3;
    }
    
}

cartList= JSON.parse(localStorage.getItem('cartlist'));












