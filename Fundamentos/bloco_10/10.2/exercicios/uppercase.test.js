const uppercase = require('./uppercase');

describe('Verifica chamada do callback', () => {
  test ('uppercase "test" to equal "TEST"', (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    })
  });
});