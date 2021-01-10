const assert = require('chai').assert;
const tail   = require('../tail');

describe('#tail', ()=>{
    it("returns [9,7,6,3] for [5,9,7,6,3]", () => {
        assert.deepEqual(tail([5,9,7,6,3]), [9,7,6,3]);
      });

    


});