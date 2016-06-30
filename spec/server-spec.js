
var request = require("request");
var server = require("../server.js");
var base_url = "http://localhost:5000/";

describe("when testing projects root endpoint", function(){
    it("should return status OK", function(done){
        request.get(base_url, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    it("should return Hello world", function(done){
        request.get(base_url, function(error, response, body) {
            var isMatch = response.body.indexOf("Hello world") > -1;
            expect(isMatch).toBe(true);
            done();
        })
    });
    
    // clean up... shutting down the server
    it('should clean up', function(){
        server.stop();
    })
})