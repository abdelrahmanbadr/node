var sendinblue = require('sendinblue-api');

	var parameters = { "apiKey": "JSbj8ksKMm473Nv0", "timeout": 5000 };	//Optional parameter: Timeout in MS
	var sendinObj = new sendinblue(parameters);

	var input = {};
	sendinObj.get_account(input, function(err, response){
	     console.log(response);
	});