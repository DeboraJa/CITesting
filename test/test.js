var assert = require('assert');

function helloWorld() {
    return "Hello World!";
}

describe('My first Mocha Test', function() {
    it('will return Hello World!', function() {
        assert.equal(helloWorld(),"Hello World!");
    });
});