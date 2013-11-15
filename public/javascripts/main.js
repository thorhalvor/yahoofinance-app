require(['jquery','yahooproxy','jqueryui'], 
	function ($,yahooproxy,jqueryui) {

$(function () {
	console.log('loading is done');


    $("#searchInput").autocomplete(
    {
		source: function(request,response){
			console.log("inside autocomplete source");

			yahooproxy.search(request.term,function(data){							
				var result = data.tickers;
				response(
					$.map(result, function(item) 
					 {
					 	return {
					 	label:item.symbol,
					 	value:item.symbol}
					 }));
			});
		},
		minLength:3,
		select: function(event, ui){
			console.log(ui.item.value +" is selected");
		}		
	});


	$("#btnSearch").click(function()
	{
		var searchValue = $("#searchInput").val();		
		yahooproxy.search(searchValue,function(data){			
			viewModel.tickers(data.tickers);
		});
	});
});
});
