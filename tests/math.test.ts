import { sum } from "../helpers/math-helper";

describe('Testando  Math helper', () => {

    it('Testando a função sum', () => {

        const result = sum(1,2);
        expect(result).toBe(3);
    })
    it('Testando a função sum novamente', () => {
        const resultado = sum(-1,1);

        expect(resultado).toBe(0);
    })
})