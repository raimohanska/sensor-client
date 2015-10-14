var request = require('request-promise');

function Client(uri) {
  return { 
    send: function(event) {
      var options = {
        uri: uri,
        method: 'POST',
        json: event
      };

      return request(options)
        .then(function(body) { console.log(body) })
        .catch(function(error) { console.log("ERROR", error.message) })
    }
  }
}

module.exports = Client

