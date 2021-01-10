const assert = require('chai').assert;
const middle  = require('../middle');

describe("#middle", () => {
    it("returns [9,8] for [1,5,8,9,5,3]", () => {
      assert.deepEqual(middle([1,5,8,9,5,3]), [9,8]);
    });

    it("returns [8] for [1,5,8,5,3]", () => {
        assert.deepEqual(middle([1,5,8,5,3]), [8]);
      });
    
  });