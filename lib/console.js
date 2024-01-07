
/* "replaces" console.log that prints output to screen
 * - technically you can have console.log do whatever 
 *   you want it to do instead of what it does, and you 
 *   can change it to something else completely despite
 *   that being pointless. This includes any javascript 
 *   libraries
 * 
 * Note: requires this in html file:
 * <div id="console"><ol></ol></div>
 */

let consoleWrapper = function() {
  let realConsole = console.log;

  function fakeConsole(...content) {
    // print out via console.log before anything else
    realConsole(...content);

    // added functionality
    let consoleArea = document.querySelector("#console ol");
    let text = document.createElement("li");

    content = Array.from(content);
    content = content.map(singleItem => {
      let item = singleItem;
      if (item === null) return "null";
      if (item === undefined) return "undefined";
      if (item === "") return "-empty string-";
      if (typeof item === 'integer') return '"' + item + '" (integer)';

      if (Array.isArray(item)) {
        item = `Array [${item.join(",")}]`;
      }
      // this is meant to be a last resort if nothing works
      if (item instanceof Object && item.constructor) {
        item = item + " (" + item.constructor.name + ")";
      }
      return item;
    });
    text.innerHTML = content.join(", ");
    consoleArea.append(text);

    // auto scroll to the end while printing out the text.  Unfortunately in this document it does not seem to work
    document.getElementById("console").scrollTop = Number.MAX_SAFE_INTEGER;
    consoleArea.scrollTop = Number.MAX_SAFE_INTEGER;
  }

  // make sure it knows which "this" it uses when the function is later called
  return fakeConsole.bind(this);
}

// use the function provided instead of the original
console.log = consoleWrapper();


