import { FizzBuzz} from './fizz-buzz';

describe('FizzBuzz', () => {
  let fizzBuzz:FizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();   
    });

  it('should return the next value', () => {

      expect(fizzBuzz.next()).toBe('1');
      expect(fizzBuzz.next()).toBe('2');
  });

  it('should return fizz if its multiple of 3', () => {

      fizzBuzz.value = 2;
      expect(fizzBuzz.next()).toBe('fizz');
      
  });

});
