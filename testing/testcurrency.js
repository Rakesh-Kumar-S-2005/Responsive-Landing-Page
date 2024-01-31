import { convertingMoney } from "../avoidrepeat.js/currency.js";

if(convertingMoney(2095)==='20.95') {
    console.log("The test for convertingMoney function is passed");
} else {
    console.log("The test for convertingMoney function is failed");
}


if(convertingMoney(0)==='0.00') {
    console.log("The test for convertingMoney function is passed");
} else {
    console.log("The test for convertingMoney function is failed");
}
if(convertingMoney(2000.5)==='20.01') {
    console.log("The test for convertingMoney function is passed");
} else {
    console.log("The test for convertingMoney function is failed");
    console.log(convertingMoney(2000.5));
}