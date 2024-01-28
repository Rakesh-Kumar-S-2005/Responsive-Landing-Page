import { cartList } from "../../data/cart.js";
import { cartDeliveryInfo } from "../../data/deliveryOptions.js";
import { convertingMoney } from "../../avoidrepeat.js/currency.js";
import { productInfo } from "../../data/cartItems.js";

function updatenoofItems() {
    let cartQuantity=0;
    cartList.forEach((cartItems,index) => {
        cartQuantity=cartQuantity+cartItems.quantity;
    })
    return cartQuantity;
}
function updatecartCost() {
    let cartCost=0;
    productInfo.forEach((cartproducts,index) => {
       cartList.forEach((cartItems,index) => {
        if(cartItems.cartId===cartproducts.id) {
            cartCost=cartCost+(cartproducts.price)*cartItems.quantity;
        }
       })
    })
    return convertingMoney(cartCost);
}

function shippingTotalCost() {
    let shippingCost=0;
    cartList.forEach((cartListItems,index) => {
        cartDeliveryInfo.forEach((deliveryOption,index) => {
             if(cartListItems.deliveryId===deliveryOption.deliveryId) {
                shippingCost=shippingCost+deliveryOption.deliveryPrice;
            }
        })
    })
    return convertingMoney(shippingCost);

}
function totalBeforeTax() {
    let beforeTax1=(updatecartCost())*100;
    let beforeTax2=(shippingTotalCost())*100;
    let beforeTax=beforeTax1+beforeTax2;
    return convertingMoney(beforeTax);
}
function taxAmount() {
    let taxAmount1= (totalBeforeTax())*0.1;
    return taxAmount1.toFixed(2);

}
function totalAfterTax() {
    let totalAmount= (totalBeforeTax())*100+(taxAmount())*100;
    return convertingMoney(totalAmount);
}
export function updateCostSummary() {
    let html1=`
    
        <div class="order-summary"><h1 class="summary">Order Summary</h1></div>
        <div class="cost-of-the-items">

            <div class="items-number summary">
                <div class="no-of-items summary-content">Items (${updatenoofItems()}):</div>
                <div class="amount">$${updatecartCost()}</div>
            </div>
            <div class="summary shipping-details">
                <div class="shipping-details summary-content">Shipping & Handling:</div>
                <div class="amount">$${shippingTotalCost()}</div>
            </div>
            <div class="summary amount-before-tax">
                <div class="money-before-tax summary-content">Total Before Tax:</div>
                <div class="amount">$${totalBeforeTax()}</div>
            </div>
            <div class="summary tax-amount">
                <div class="summary-content tax-money">Estimated Tax(10%):</div>
                <div class="amount">$${taxAmount()}</div>
            </div>

        </div>
        <div class="summary total-cost">
            <div class="total-amount">Order Total:</div>
            <div class="total-money">$${totalAfterTax()}</div>
        </div>
        <div class="online-payment">
            <div class="paypal">Use PayPal</div>
            <input class="online-banking" type="checkbox" name="paypal">
        </div>
        <div class="order-placed">
            <button class="place">Place Your Order</button>
        </div>
        
                

    `;
    document.querySelector('.right-section').innerHTML=html1;
    
}
