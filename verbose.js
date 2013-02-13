/**
 * verbose.js is just a small aid for those struggling with console.log() debugging outputs every day.
 * Noting fancy, but still effective.
 * Author: hello@zeidlos.de
 * URL: http://zeidlos.com
 * License: href="http://creativecommons.org/licenses/by/3.0/deed.en
 * Github: https://github.com/zeidlos/verbose.js
 */


var debug = true; // True for console.log() statements, false for none
var debug_groups = ['Testing', 'Debugging', 'Unit-Tests']; // insert IDs of console.log() groups

/**
 * Replaces console.log() and is the main logic of verbose
 * @param  {string/variabe} msg Argument passed to console.log()
 * @param  {array of strings} id  Identifier for debug message group
 */
function clog(msg, id) {
  if(debug===true){
    for(var i=0; i < id.length; i++) {
      if(debug_groups.indexOf(id[i]) > -1){
        console.log(msg);
        break;
      }
    }
  }
}

// Showcase for verbose.js
var myVariable = '.';

(function() {
  function myFunction() {
    var foo = 'Bar';
    clog('A console.log() output' + myVariable, ['Testing','Unit-Tests']);
  }
  myFunction();
})();