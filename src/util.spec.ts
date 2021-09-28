import { add } from './util';

describe('Util', () => {
    
    describe('add', () => {
        
        beforeEach(() => {
            console.log('runs before each it');
        });

        afterEach(() => {
            console.log('runs after each it');
        });

        it('should add two number', () => {
            //matchers
            const result = add(1,2);
            const exptedValue = 3;
            expect(result).toEqual(exptedValue);
        });

        it('should add two number', () => {
            //matchers
            const result = add(1,2);
            const exptedValue = 3;
            expect(result).toEqual(exptedValue);
        });

    });
});