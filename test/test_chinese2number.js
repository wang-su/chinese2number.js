const assert = require('assert');
const chinese2Number = require('../');


// test code.
assert.equal(10, chinese2Number("十"))
assert.equal(15, chinese2Number("十五"))
assert.equal(55, chinese2Number("五十五"))
assert.equal(100, chinese2Number("百"))
assert.equal(100, chinese2Number('一百'));
assert.equal(101, chinese2Number('一百零一'));
assert.equal(110, chinese2Number('一百一'));
assert.equal(150, chinese2Number('一百五'));
assert.equal(10003, chinese2Number('一万零三'));
assert.equal(600300, chinese2Number('六十万零三百'));
assert.equal(150001151, chinese2Number("一亿五千万一千一百五十一"))
assert.equal(134567892, chinese2Number('一亿三千四百五十六万七千八百九十二'));
assert.equal(130507890, chinese2Number('一亿三千零五十万七千八百九十'));
assert.equal(134567891, chinese2Number('一亿三千四百五十六万七千八百九十一'));

console.log("all pass...");