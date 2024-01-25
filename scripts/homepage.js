let concatHTML='';
let html= document.querySelector('.product-page');

import { productInfo } from '../scripts/cartItems.js';
import { convertingMoney } from '../avoidrepeat.js/currency.js';
productInfo.forEach((details,index) => {
    const htmlElement=
               `<div class="product item1">
                    <div class="images">
                        <img  src="${details.imageLink}">
                    </div>
                    <div class="description">
                        <p>
                            ${details.imageDescription}
                        </p>
                    </div>
                    <div class="star">
                        <img src="${details.ratings.starImageLink}">
                        <p>${details.ratings.noOfRatings}</p>
                    </div>
                    <div class="price">
                        <p>$${convertingMoney(details.price)}</p>
                    </div>
                    <div class="quantities">
                        <select>
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</optsion>
                            <option value="9">9</optsion>
                            <option value="10">10</option>
                        </select><br>
                        <button class="cart-button js-cart-button" data-product-id="${details.id}">Add to Cart</button>
                    </div>
                    
                </div>`;
    
    concatHTML+=htmlElement;
    html.innerHTML= concatHTML;
    
    
});



    

