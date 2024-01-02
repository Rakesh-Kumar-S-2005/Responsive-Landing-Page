let concatHTML='';
const productInfo=[
    {
        imageLink:'https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
        imageDescription:'Black and Gray Athletic Cotton Socks - 6 Pairs',
        ratings: {
            starImageLink:'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
            noOfRatings:87
        },
        price:1090
    },
    {
        imageLink:'	https://supersimple.dev/projects/amazon/images/products/intermediate-composite-basketball.jpg',
        imageDescription:'Intermediate Size Basketball',
        ratings: {
            starImageLink:'https://supersimple.dev/projects/amazon/images/ratings/rating-4.png',
            noOfRatings:127
        },
        price:2095 //  1 dollar = 100 cents

    },
    {
        imageLink:'https://supersimple.dev/projects/amazon/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        imageDescription:'Adults Plain Cotton T-Shirt - 2 Pack',
        ratings: {
            starImageLink:'https://supersimple.dev/projects/amazon/images/ratings/rating-45.png',
            noOfRatings:56
        },
        price:799
    }
].forEach((details,index) => {
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
                        <p>$${(details.price)/100}</p>
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
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select><br>
                        <button class="cart-button">Add to Cart</button>
                    </div>
                </div>`
    
    concatHTML+=htmlElement;
    document.querySelector('.product-page').innerHTML=concatHTML;
});
