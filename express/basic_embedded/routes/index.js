const Router = require("express").Router();
const Auth = require("../modules/auth/controller");
const request = require("request");

Router.get("/", function(req, res) {
    /*var options = {
        url: 'http://localhost:1337/user/self',
        headers: {
            'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJ1c2VybmFtZSI6Im1pa2Vzbm93IiwiX2lkIjoiNTcxMjhiZTE3OGExNWI3OTJiOTFlN2FmIiwiaml0IjoiJDJhJDEwJFRWek4xZU9mVnR6MmpqR1o0eTRVNXVYWU0xY2hyZi41VDNvT0QwNW05TGRCQXFsdmJ3c0tpIiwiaWF0IjoxNDYwOTQ4OTg3LCJleHAiOjE0NjA5NTI1ODd9.d-gpUsvVXl6V-PrnvmNre5A18PmYEhCmfR1Mfu4vOCc'
        }
    };
    request.get(options, function(err, response, user) {
        if(user.username !== null) {

            res.json(JSON.parse(user));
        }
        else {*/
            res.json({message: "nothing to see here"});
       /* }
    });*/

});

Router.post("/authenticate", Auth.auth);

Router.use(Auth.checkToken);

module.exports = Router;