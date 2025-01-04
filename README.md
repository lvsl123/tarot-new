<!doctype html>

<html>
  <head>
    <link rel="stylesheet" href="lib/style.css">

  </head>

  <body>
    <h1>Tarot (thoth) generator private<br><span style="font-size:50%">Major acarna only</span></h1>
    
    <div style="">
      <a href="about.html">About this generator</a><br>
      <a href="generate-data.html" style="display:none">Generate database</a> 
      <a href="test.html" style="display:none">test page</a> 
    </div>
    <hr>
     
    <br>
    <div>
      <label>Reverse cards: </label><input type="checkbox" id="card-reverse"><br>
      <label>Invert color: </label><input type="checkbox" id="card-invert-color"><br> 
      <label>Invert hue: </label><input type="checkbox" id="card-invert-hue"><br>
      <label>Use alternative cards as well: </label><input type="checkbox" id="card-use-all-images"><br>
      <label>Cards can repeat: </label><input type="checkbox" id="card-can-repeat"><br>

      <label>Pick Amount: </label><input type="text" id="num-of-cards" value="2">
      <br><br>
      <button onclick="pickCards()">Pick cards</button> 
      <button onclick="invertColor()">Invert color</button>
      <button onclick="invertHue()">Invert hue</button>
      <br>

    </div>

    <div id="result">-- Card results go here --</div>
    <div id="console" style="display:none"><ol></ol></div>

    <!-- all javascript files must go here. Order matters. -->
    <script src="data/tree-of-life.js"></script>
    <script src="data/cards.js"></script>
    <script src="lib/PictureCards.js"></script>
    <script src="lib/cardsToArray.js"></script>
    <script src="lib/displayCards.js"></script>
    <script src="lib/invert-colors-button.js"></script>
    <script>
      // console.log("test console", null);
    </script>

  </body>
</html>

