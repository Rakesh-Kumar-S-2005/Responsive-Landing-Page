import { cartList } from "../../data/cart";
import { cartDeliveryInfo } from "../../data/deliveryOptions";
import { convertingMoney } from "../../avoidrepeat.js/currency";
import { productInfo } from "../../data/cartItems";

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
            cartCost=cartCost+cartproducts.price;
        }
       })
    })
    return convertingMoney(cartCost);
}

function shippingTotalCost() {
    let shippingtCost=0;
    cartList.forEach((cartListItems,index) => {
        cartDeliveryInfo.forEach((deliveryOption,index) => {
            if(cartListItems.deliveryId===deliveryOption.deliveryId) {
                shippingCost=shippingCost+deliveryOption.deliveryPrice;
            }
        })
    })
    return convertingMoney(shippingtCost);

}
function totalBeforeTax() {
    let beforeTax=updatecartCost()+shippingTotalCost();
    return convertingMoney(beforeTax);
}
function taxAmount() {
    let taxAmount= (totalBeforeTax())*(0.1);
    return convertingMoney(taxAmount);
}
function totalAfterTax() {
    let totalAmount= totalBeforeTax()+taxAmount();
    return convertingMoney(totalAmount);
}
function updateCostSummary() {
    let html1=`
    
        
    `;
}
