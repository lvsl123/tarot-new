    /* PictureCards 
    * - represents individual card item
    * - Values with underscore are meant to be "private"
    * - Those that start with a letter are public
    */

    class PictureCards {

        /* static areas. Access by PictureCards.valueName  */ 
        // Note: we just pretend that there are private variables   
        static _allCards = [];
        static _length = 0;
        static available(value) {
            // laziest search in the world
            try {
                for (let currentCard of PictureCards._allCards) {
                    if (currentCard._cardId == value) return false;
                }
            } catch (err) {
                console.log(err);
            }
            return true; // value is a new one
        }

        static getAllCards() { // Shallow copy!!! Modifying the object via setters, dot notation etc will modify the object if it's also in somewhere else. Consider a real copy from head to toe instead if you need one
            return PictureCards._allCards.map(input => input);
        }
        static get length() {return PictureCards._allCards.length;}

        //////////////////////////////
        /* start individual objects */  

        constructor(cardId, cardName, cardImages = [], description = "test description") {
            try {
                let isAvailable = PictureCards.available(cardId);
                //console.log("isAvailable = " + isAvailable);

                if (isAvailable == false) {
                    console.log("isAvailable = " + isAvailable);
                    let message = "cardId " + cardId + " is taken. Please redefine another unique id";
                    this._description = message;
                    throw new Error(message);
                }
                    
                // cards basic
                // - the whole object's location saved in the static array
                PictureCards._allCards.push(this); 
                this._cardId = cardId;
                this._cardName = cardName
                this._cardImages = cardImages;
                this._description = description;
                this._currentClass = this;
                
            } catch (err) {
                console.log(err);
            }
        }

        get cardId() {return this._cardId;}
        get cardName() {return this._cardName;}
        get cardImages() {return this._cardImages.map(input => input);} // copy array
        get description() {return this._description;}

        set cardName(input) {this._cardName = input;}
        set cardImages(input) {this._cardImages = input;}
        set description(input) {this._description = input}


        toString() {
            return "{" + this._cardId + ", " + this._cardName + ", " + 
                this._cardImages + ", " + this._description + "}";
        }
    }
    /*
    // test code
    console.log ("---- Start PictureCards testing ----") ;
    try {
        let testCard = new PictureCards("000", "Fool", ["/abc.gif", "/def.gif"]);
        
        let testCard2 = new PictureCards("000", "Magician", ["/mage.gif", "/mage2.gif"]);

        console.log("All cards: ", PictureCards.getAllCards());

        console.log(testCard);
        console.log(testCard2);
    } catch (err) {
        console.log(err);
    }

    */





















