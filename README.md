json.async
==========

Using the standard JSON.parse operation on a large json file is an expensive operation. This library attempts to push the parsing onto another thread using web workers.

Usage
=====
To use first include json.async.js in your HTML file.

<pre>
 &lt;script type="text/javascript" src="json.async.js"></script>
</pre>

Then call JSON.parseAsync with the string and a function callback.

<pre>
JSON.parseAsync( '{ "data":"some data" }, function (json)
{
  // do something with the parsed json object
});
</pre>

Performance
===========
I've included a sample big json file, which takes my MacBook Air 2011 i7 1.8seconds to parse in Chrome. Previously the parsing of this file would halt the main thread and cause the 3d rendering of the view to lag. Now it runs smoothly.

Demo
===========
Live demo: http://softwareispoetry.com/json.async/example.html
Example big json file: http://softwareispoetry.com/json.async/examplebigfile.json

Video walkthrough
===========
http://www.youtube.com/watch?v=66i30ogH_x0&feature=youtu.be

Projects that use this library
==============================
http://multiplay.io - Realtime 3D multiplayer games editor
