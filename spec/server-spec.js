
var request = require("request");
var server = require("../server.js");
var assert = require('chai').assert;
var base_url = "http://localhost:5000/";

describe('Root endpoint', function() {
    describe('when requesting', function() {
        it('it should return OK (200)', function (done) {
            request.get(base_url, function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });
        it('it should contain Hello world', function (done) {
            request.get(base_url, function(error, response, body) {
                var isMatch = response.body.indexOf("Hello world") > -1;
                assert.equal(isMatch, true);
                done();
            });
        });
    });
});