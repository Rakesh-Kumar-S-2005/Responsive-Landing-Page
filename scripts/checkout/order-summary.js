import {cartList} from '../../data/cart.js';
import {productInfo} from '../../data/cartItems.js';
import {cartListStorage} from '../../data/cart.js';
import {convertingMoney} from '../../avoidrepeat.js/currency.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {cartDeliveryInfo} from '../../data/deliveryOptions.js';
import { updateCostSummary } from './cost-summary.js'
console.log(cartList);
let today= new dayjs();
let aftereleven= today.add(11,'days');

updateCart();
updateCostSummary();

function updateCheckList() {
    let value=0;
    
    cartList.forEach((cartItems,index) => {
       value=value+cartItems.quantity;
        
    });
   
    document.querySelector('.checkout').innerHTML=`Checkout (<span class="items"> ${value} Items</span>)`;
}
function updateDeliveryInfo(cartproducts,cartItems) {
    let concat2='';
    cartDeliveryInfo.forEach((deliveryInfo,index) => {
        let date= today.add(deliveryInfo.deliveryDays,'days');
        let dateOption= date.format('dddd, MMMM D');
        let deliveryOption= deliveryInfo.deliveryPrice===0?'FREE':`$${convertingMoney(deliveryInfo.deliveryPrice)} -`;
        let isChecked= cartItems.deliveryId===deliveryInfo.deliveryId;
        let html= `
   
            <div class="radio">
                <input class="radio1" data-product-id="${deliveryInfo.deliveryId}" data-input-name="${cartproducts.id}" type="radio" name="${cartproducts.id}" ${isChecked ?'checked':''} >
                <div class="options">
                    <div class="date-option">${dateOption}</div>
                    <div class="delivery-type">${deliveryOption} Shipping</div>
                </div>
            </div>
    

        `;
        concat2+=html;
    })
    return concat2;
}

export function updateCart() {
    let concatHtml1=' ';
    cartList.forEach((cartListItems,index) => {
        productInfo.forEach((cartproducts) => {
            let delivery;
            let deliveryDate;
            if(cartListItems.cartId===cartproducts.id) {
                    cartDeliveryInfo.forEach((deliveryInfo,index) => {
                        if(cartListItems.deliveryId===deliveryInfo.deliveryId) {
                            delivery=today.add(deliveryInfo.deliveryDays,'days');
                            deliveryDate=delivery.format('dddd, MMMM D');
                        }
                    })
    
                    let htmlElements1=`
                    <div class="cart info1">
                        <div class="delivery-date">Delivery date: ${deliveryDate} </div>
                        <div class="cart-item-details">
                            <div class="image-container">
                                <img class="cart-image" src="${cartproducts.imageLink}">
                            </div>
                            <div class="cart-description">
                                <div class="name">${cartproducts.imageDescription}</div>
                                <div class="cart-amount">$${convertingMoney(cartproducts.price)}</div>
                                
                                <div class="cart-quantity" id="${cartproducts.id}">
                                    <div class="quantity">Quantity: ${cartListItems.quantity}</div>
                                    <div class="update"  data-update-id="${cartproducts.id}" data-cart-quantity="${cartListItems.quantity}">Update</div>
                                    <div class="delete" data-product-ids="${cartproducts.id}">Delete</div>
                                </div>
                            </div>
                            <div class="cart-delivery">
                                <div class="delivery-option">Choose a delivery option:</div>
                                ${updateDeliveryInfo(cartproducts,cartListItems)}
                            </div>
                        </div>
                    </div>
                
                `;
                concatHtml1+=htmlElements1;
                
                
            }
        })
            
    });
    document.querySelector('.left-section').innerHTML=concatHtml1;
    updateCheckList();
    let eventListener2= document.querySelectorAll('.delete');
    eventListener2.forEach((deleteButton) => {
        deleteButton.addEventListener('click',() => {
            cartList.forEach((cartItems,index) => {
                if(cartItems.cartId===deleteButton.dataset.productIds) {
                    cartList.splice(index,1);
                    cartListStorage();
                    updateCart();
                    updateCostSummary();
                    
                
                }
            })
        })
    })
    let eventListener3=document.querySelectorAll('.radio1');
    eventListener3.forEach((deliveryOption,index) => {
        deliveryOption.addEventListener('click',() => {
            cartList.forEach((cartItems,index) => {
                if(cartItems.cartId===deliveryOption.dataset.inputName) {
                    cartItems.deliveryId=deliveryOption.dataset.productId;
                    cartListStorage();
                    updateCart();
                    updateCostSummary();
                }
            })
        })
    })
    
    let html3;
    updateEvent();
    function updateEvent() {
        let updateListener=document.querySelectorAll('.update');
        updateListener.forEach((updateButton,index) => {
            updateButton.addEventListener('click',() => {
                html3=`
                
                    <div class="quantity">Quantity: <input id="${updateButton.dataset.updateId}-1"  class="event" type="number" value="${updateButton.dataset.cartQuantity}"></div>
                    <div class="Save" data-save-id="${updateButton.dataset.updateId}" data-cart-quantity="${updateButton.dataset.cartQuantity}">Save</div>
                    <div class="delete" data-product-ids="${updateButton.dataset.updateId}">Delete</div>
                `;
                document.getElementById(`${updateButton.dataset.updateId}`).innerHTML=html3;
                saveEvent();
            })
        })

    }
    function saveEvent() {
        let saveListener=document.querySelectorAll('.Save');
        saveListener.forEach((saveButton,index) => {
            saveButton.addEventListener('click',() => {
                let check=parseInt(document.getElementById(`${saveButton.dataset.saveId}-1`).value);
                cartList.forEach((cartItems,index) => {
                    if(cartItems.cartId===saveButton.dataset.saveId) {
                        cartItems.quantity=check;
                        cartListStorage();
                        
                        
                    }
                })
                html3=`
                
                    <div class="quantity">Quantity: ${saveButton.dataset.cartQuantity}</div>
                    <div class="update"  data-update-id="${saveButton.dataset.saveId}" data-cart-quantity="${saveButton.dataset.cartQuantity}">Update</div>
                    <div class="delete" data-product-ids="${saveButton.dataset.saveId}">Delete</div>
                
                `;
                document.getElementById(`${saveButton.dataset.saveId}`).innerHTML=html3;
                updateEvent();
                updateCart();
                updateCostSummary();
                
            })

        })
    }

    
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

