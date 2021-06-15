const { test, expect } = require('@jest/globals');
const { type } = require('os');
const { encode, decode } = require('./encodeDecode.js');

describe('Testa as funções encode e decode', () => {
  test ('encode é uma função?', () => {
    expect (typeof encode).toStrictEqual('function')
  });

  test ('decode é uma função?', () => {
    expect (typeof decode).toStrictEqual('function')
  });

  test ('encode converte apenas a vogal "a" no número "1"', () => {
    expect (encode('ana')).toStrictEqual('1n1');
  });

  test ('encode converte apenas a vogal "e" no número "2"', () => {
    expect (encode('ele')).toStrictEqual('2l2');
  });

  test ('encode converte apenas a vogal "i" no número "3"', () => {
    expect (encode('xixi')).toStrictEqual('x3x3');
  });

  test ('encode converte apenas a vogal "o" no número "4"', () => {
    expect (encode('ovo')).toStrictEqual('4v4');
  });

  test ('encode converte apenas a vogal "u" no número "5"', () => {
    expect (encode('nu')).toStrictEqual('n5');
  });

  test ('encode retorna o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toStrictEqual(5);
  });

  test ('decode converte apenas a vogal "1" no número "a"', () => {
    expect (decode('1')).toStrictEqual('a');
  });

  test ('decode converte apenas a vogal "2" no número "e"', () => {
    expect (decode('2')).toStrictEqual('e');
  });

  test ('decode converte apenas a vogal "3" no número "i"', () => {
    expect (decode('3')).toStrictEqual('i');
  });

  test ('decode converte apenas a vogal "4" no número "o"', () => {
    expect (decode('4')).toStrictEqual('o');
  });

  test ('decode converte apenas a vogal "5" no número "u"', () => {
    expect (decode('5')).toStrictEqual('u');
  });

  test ('decode retorna o mesmo número de caracteres', () => {
    expect(decode('tryb2').length).toStrictEqual(5);
  });
});