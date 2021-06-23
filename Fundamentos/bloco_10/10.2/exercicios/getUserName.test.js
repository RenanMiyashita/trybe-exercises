const { getUserName } = require('./getUserName');

//exercicio 2

// describe('getUserName - Promisse', () => {
//   describe('When the user id exists', () => {
//     test ('Returns the user name', () => {
//       expect.assertions(1);
//       return getUserName(5)
//       .then(data => expect(data).toEqual('Paul'));
//     });
//   });

//   describe("When the user id doesn't exist", () => {
//     test ('returns an error', () => {
//       expect.assertions(1);
//       return getUserName(6)
//       .catch(error => expect(error).toEqual({ error: 'User with 6 not found.' }));
//     });
//   });
// });

//exercicio 3

describe('getUserName - async/await', () => {
  describe('when the user id exists', () => {
    it ('returns the user name', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toEqual('Mark');
    });
  });

  describe("When the user id doesn't exists", () => {
    it ('returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(6);
      } catch (error) {
        expect(error).toEqual({ error: 'User with ' + 6 + ' not found.' })
      }
    });
  });
});