/* displayCards selections:
 * - selection = 0 means no special features
 * - to toggle features use the ^ (xor) symbol like below: 
 *     let selection = selection ^ CARD_REVERSE ^ CARD_INVERT_COLOR;
 * - to cancel a feature, eg from the last example:
 *    selection = selection ^ CARD_REVERSE;
 * 
 * ps: it was not my idea, but I thought it's good to give it a try. I do not have any low level training in hand to come up with this idea even I have seen it before once. The original idea I had was having a name per feature grouped in another object, which does not require a name on its own. But this one is way way neater.
 */
const CARD_REVERSE = 1; // 2 ** 0
const CARD_INVERT_COLOR = 2; // 2 ** 1
const CARD_INVERT_HUE = 4; // 2 ** 2
const CARD_USE_ALL_IMAGES = 8; // 2 ** 3
const CARD_CAN_REPEAT = 16; // 2 ** 4
const CARD_USE_ROW_OF_CHOICE = 32; // 2 ** 5
// additional feature follows - 2 ** 4, 2 ** 5, etc.

function displayCards(pictureCardsPicked = [], selections = 0) {
  if (isNaN(+selections)) selections = 0;

  let table = document.createElement("table");
  let imagePreview = document.createElement("div");
  let result = document.getElementById('result');

  let setTable = function() {
    result.innerHTML = "";

    // table
    table.style.position = "relative"; // counts from its original position
    table.style.left = "10px"; // .. and shift from left to right 10px
    table.style.width = "88%";
    table.style.maxWidth = "1000px";

    ///////// from old-code.html ////////////////
    // prepare element for appending into the #result div
    for (let card in pictureCardsPicked) {
      let row = document.createElement('tr');
      let tdDescription = document.createElement('td'); // cell
      let tdCard = document.createElement('td'); // cell
      let description = document.createElement('p');
      let image = document.createElement('img');

      // use functions to modify the "globals" inside the for loop

      // create one row of the table
      let createTable = () => {
        // image
        image.src = pictureCardsPicked[card].cardImages[
          (selections & CARD_USE_ALL_IMAGES) == CARD_USE_ALL_IMAGES ? 
          parseInt(Math.random() *  pictureCardsPicked[card].cardImages.length) : 0];
        image.style.width = 158 + "px";
        image.style.height = 240 + "px";

        // modify styles depending on option
        if ((selections & CARD_REVERSE) == CARD_REVERSE) {
          reverse = +Math.random() > 0.5; 
          if (reverse) image.style.transform = `rotate(180deg)`;
        }
        if ((selections & CARD_INVERT_COLOR) == CARD_INVERT_COLOR) {
          image.style.filter = ` invert(100%)`;
        }
        if ((selections & CARD_INVERT_HUE) == CARD_INVERT_HUE) {
          image.style.filter += ` hue-rotate(180deg)`; 
        }

        description.innerHTML = pictureCardsPicked[card]["cardName"] + "<br><br>" + pictureCardsPicked[card]["description"];

        // card description goes to this cell
        tdDescription.style.verticalAlign = "top";
        tdDescription.style.borderTop = "1px solid black";
        tdDescription.style.borderBottom = "1px solid black";
        tdDescription.style.borderCollapse = "collapse";

        // card images go to this cell
        tdCard.style.verticalAlign = "top";
        tdCard.style.borderBottom = "1px solid black";
        tdCard.style.borderCollapse = "collapse";
        tdCard.style.borderTop = "1px solid black";
          
        // append the whole row and its content to the main table
        tdCard.append(image);
        tdDescription.append(description);
        row.append(tdDescription);
        row.append(tdCard);
        table.append(row);  
      }
      // copy every single thing from the previous image so that we can modify them without affecting the original object. Note: deep copy
      let createThumbnail = () => {
        let imageThumb = image.cloneNode(true);
        imageThumb.style.display = "inline";
        imageThumb.style.width = 79 + "px";
        imageThumb.style.height = 120 + "px";
        imagePreview.append(imageThumb);
      }
      createTable();
      createThumbnail();

    } // end for loop
  } // end setTable()

  // append the table created to the #result div
  setTable();
  result.append(imagePreview);
  result.append(document.createElement("br"));
  result.append(table);

}

function pickCards() {
  let allCards = PictureCards.getAllCards(); // shallow copy
  let selections = 0; // blank selection without options
  let pickedCards = [];
  
  // get textbox input and turn any invalid values to default setting. Input was text converted to int
  let numOfCards = +document.getElementById("num-of-cards").value;
  if (isNaN(numOfCards)) numOfCards = 2;
  
  // extract checkbox values
  if (document.getElementById("card-reverse").checked) 
    selections = selections ^ CARD_REVERSE;
  if (document.getElementById("card-invert-color").checked)
    selections = selections ^ CARD_INVERT_COLOR;
  if (document.getElementById("card-invert-hue").checked)
    selections = selections ^ CARD_INVERT_HUE;
  if (document.getElementById("card-use-all-images").checked)
    selections = selections ^ CARD_USE_ALL_IMAGES;
  if (document.getElementById("card-can-repeat").checked)
    selections = selections ^ CARD_CAN_REPEAT;

  
  // start picking cards
  // - for non repeating tarot pick, values cannot exceed num of cards
  // - if input exceeds maximum, pick the maximum num of cards
  let maxCards = ((selections & CARD_CAN_REPEAT) == CARD_CAN_REPEAT) ? 99 : allCards.length;

  for (let i = 0; i < numOfCards && i < maxCards; i++) {
    let randomIndex = parseInt(Math.random() * allCards.length);
    pickedCards.push(allCards[randomIndex]);

    if ((selections & CARD_CAN_REPEAT) == CARD_CAN_REPEAT) {} // pick cards the computer way
    else {
      allCards.splice(randomIndex, 1); // pick cards the physical way
    }
  }

  // display only picked cards
  displayCards(pickedCards, selections);
}


// test run: just display every single item
//displayCards(allPictureCards, getSelections());





/*
  // this function reselects the images and change them but later on this is not needed anymore 

  let setImagePreview = function() {
    for (let card in pictureCardsPicked) {
      let image = document.createElement("img");
      image.src = pictureCardsPicked[card].cardImages[
        (selections & CARD_USE_ALL_IMAGES) == CARD_USE_ALL_IMAGES ? 
        parseInt(Math.random() *  pictureCardsPicked[card].cardImages.length) : 0];
      image.style.display = "inline";
      image.style.width = 79 + "px";
      image.style.height = 120 + "px";

    }
  }
*/



