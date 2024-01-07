/* pictureCards: PictureCards object after cards are picked 
 */
let allPictureCards = [];

/* supply initial array location to add items into it */
function allPictureCardsToArray(allPictureCards) {
  for (let singleCardId in tarotData) {
    //console.log(singleCardId);
    let cardImageArray = [];
    for (let i = 0; i < tarotData[singleCardId].length; i++) {
      cardImageArray.push(tarotData[singleCardId][i]);
    }

    // cardId, cardName, cardImages, description
    let singleCardObj = new PictureCards(singleCardId, tarotData[singleCardId].cardName, cardImageArray, tarotData[singleCardId].description);
    //console.log(singleCardObj);
    allPictureCards.push(singleCardObj);
  }
}

allPictureCardsToArray(allPictureCards);

