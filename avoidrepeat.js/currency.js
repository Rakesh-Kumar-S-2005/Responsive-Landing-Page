 export function convertingMoney(price) {
   let amountDollar= (Math.round(price)/100).toFixed(2);
   return amountDollar;
 }