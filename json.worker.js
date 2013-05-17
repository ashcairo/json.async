self.addEventListener( 'message', function (e)
{
    var data = e.data;
    var json = JSON.parse( data );
    self.postMessage( json );
    self.close();
}, false );