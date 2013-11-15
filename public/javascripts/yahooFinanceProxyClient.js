define(['jquery'], 
	function yahooFinanceProxyClient($) {

	var tickerSearchUrl = "http://localhost:3000/tickers?search=";	



	var search = function (searchterm,callback){    	
		console.log('search inside proxyclient');	    	

		var url = tickerSearchUrl +searchterm;

		$.getJSON(url,function(data){
			console.table(data.tickers,"symbol","name");
			callback(data);
		});

	};
	
	return {
			search : search
		}
});