import { sayHello } from './common';

describe('Test example', () => {
    it('true should be true', () => {
        expect(sayHello()).toBe('hello');
    });
});

