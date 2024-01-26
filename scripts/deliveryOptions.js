import { todayDateDetails } from "./checkout.js";
import { aftersevendays } from "./checkout.js";
import { afterthreedays } from "./checkout.js";

let html='';
let cartDeliveryInfo=[
    {
        deliveryId:'1',
        deliveryPrice: 0,
        deliveryDate:todayDateDetails
    },
    {
        deliveryId:'2',
        deliveryPrice: 499,
        deliveryDate:aftersevendays
    },
    {
        deliveryId:'3',
        deliveryPrice:999,
        deliveryDate:afterthreedays
    }
];
function generateDeliveryHTML() {
    let html=`
    
            
    
    `;
}