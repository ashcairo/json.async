JSON.parseAsync = function(data, callback)
{var worker, json
	if( window.Worker )
	{
		worker = new Worker( 'json.worker.js' );
		worker.addEventListener( 'message', function (e)
		{
			json = e.data;
			callback( json );
		}, false);
		worker.postMessage( data );
		return;
	}
	else
	{
		json = JSON.parse( data );
		callback( json );
	}
};
