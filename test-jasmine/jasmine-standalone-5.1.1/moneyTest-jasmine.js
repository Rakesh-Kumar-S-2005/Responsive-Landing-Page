import { convertingMoney } from "../../avoidrepeat.js/currency.js";

describe('test suit: convertingMoney',() => {
    it('converting cents to dollar', () => {
        expect(convertingMoney(2095)).toEqual('20.95');
    });
    it('convetring 0 into 0.00', () => {
        expect(convertingMoney(0)).toEqual('0.00');
    });
    it('using edge testcase through tricky condition', () => {
        expect(convertingMoney(2000.5)).toEqual('20.01');
    });
});