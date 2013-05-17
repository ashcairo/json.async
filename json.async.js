JSON.parseAsync = function(data, callback)
{
	if( this.Worker )
	{
		var worker = new Worker( 'json.worker.js' );
		worker.addEventListener( 'message', function (e)
		{
			var json = e.data;
			callback( json );
		}, false);
		worker.postMessage( data );
		return;
	}
	else
	{
		var json = JSON.parse( data );
		callback( json );
	}
};
