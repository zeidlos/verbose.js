verbose.js
==========

Small Script to help juggling with console.log() statements for debugging purposes.

Debugging JavaScript with console.log() statements is pretty common in day to day webdevelopment. verbose.js is de- signed to make your life more easy in that regard.

What is verbose.js?
      
Are you tired of debugging JavaScript with console.log() statements, leading into either a cluttered JavaScript-Console or the need of commenting and uncommenting theese statements?

Then verbose.js is the tool of your choice. Beeing tired of that sort of overhead myself I've decided to put together a simple and small but yet effective mechanism for dealing with console.log statements.

How to use verbose.js?

Copy the following code into your JavaScript file:

var debug = true;
var debug_groups = ['Testing', 'Debugging', 'Unit-Tests'];

function clog(msg,id){if(debug===true){for(vari=0;i<id.length;i++){if(debug_groups.indexOf(id[i])>-1){console.log(msg);break;}}}}

and adjust debug and debug_groups to your needs.

A sample call would look like this:
clog('A console.log() output' + myVariable, ['Testing','Unit-Tests']);

Whereas the array indicates the groups this console.log() statement is member of.