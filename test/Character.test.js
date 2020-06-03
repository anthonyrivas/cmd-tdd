const Character = require('../Character');

describe('Character', () => {
  describe('Initialization', () => {
    it('Should return an object containing name when called with the "New" keyword', () => {
      const char = new Character();
      expect('name' in char).toEqual(true);
    });
    
    it('Should return an object containing class when called with the "New" keyword', () => {
      const char = new Character();
      expect('class' in char).toEqual(true);
    })

    it('Should return an object containing race when called with the "New" keyword', () => {
      const char = new Character();
      expect('race' in char).toEqual(true);
    })
    
    it('Should return an object containing hp when called with the "New" keyword', () => {
      const char = new Character();
      expect('hp' in char).toEqual(true);
    })
    
    it('Should return an object containing str when called with the "New" keyword', () => {
      const char = new Character();
      expect('str' in char).toEqual(true);
    })
    
    it('Should return an object containing def when called with the "New" keyword', () => {
      const char = new Character();
      expect('def' in char).toEqual(true);
    })
  })
  describe('Generate Random Number', () => {
    it('Should return arandom number between min and max when passed two number', () => {
      const char = new Character();
      for(let i = 0; i < 15; i++) {
        const value = char.generateRandomNumber(1, 15);
        expect(value).toBeGreaterThanOrEqual(1);
        expect(value).toBeLessThanOrEqual(15);
      }
    });
  })
  describe('Generate Stats', () => {
    it('Should return a CharacterObject', () => {
      const char = new Character();
      const value = char.generateStats();
      expect(value instanceof Character).toEqual(true);
    });
    it('Should return a CharacterObject whose hp is between 10 and 20', () => {
      const char = new Character();
      for(let i = 0; i < 15; i++) {
        const value = char.generateStats();
        expect(value.hp).toBeGreaterThanOrEqual(10);
        expect(value.hp).toBeLessThanOrEqual(20);
      }
    });
    it('Should return a CharacterObject whose str is between 5 and 8', () => {
      const char = new Character();
      for(let i = 0; i < 15; i++) {
        const value = char.generateStats();
        expect(value.str).toBeGreaterThanOrEqual(5);
        expect(value.str).toBeLessThanOrEqual(8);
      }
    });
    it('Should return a CharacterObject whose def is between 6 and 11', () => {
      const char = new Character();
      for(let i = 0; i < 15; i++) {
        const value = char.generateStats();
        expect(value.def).toBeGreaterThanOrEqual(6);
        expect(value.def).toBeLessThanOrEqual(11);
      }
    });
  })
  
});