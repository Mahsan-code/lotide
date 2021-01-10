const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArrayEqual = require('./assertArraysEqual');
const assertObjectEqual = require('./assertObjectsEqual');
const countLetter = require('./countLetters');
const countOnly = require('./countOnly');
const eqArray = require('./eqArrays');
const eqObject = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPosition = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  assertArrayEqual : assertArrayEqual,
  assertObjectEqual : assertObjectEqual,
  countLetter: countLetter,
  countOnly: countOnly,
  eqArray: eqArray,
  eqObject: eqObject,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPosition: letterPosition,
  map: map,
  takeUntil: takeUntil,
  without: without
};