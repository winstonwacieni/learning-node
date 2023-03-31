var parseString = require('xml2js').parseString
exports.current = function(location, resultCallback){
    ...
    var request = https.request(options, function (response) {
     ...
     
     response.on('end', function () {
        parseString( buffer, function (error, result){
            if(error){ . . . }

            resultCallback(null, result.current_observation.temp_f[0]);
        });
     });
    }) ;
}
