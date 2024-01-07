/* Main tarot database. Refer to about.html for details */

/* For programmers the below will make sense but this is also
 * for others
 * - please use quotation marks for places that had them 
 * - keys like "000", "001" etc must be unique
 * - Image urls: 
 *    - if you add or removed something please specify its 
 *      new length.
 *    - Image url numbering always starts with 0
 *    - don't forget the comma
 * - names such as "cardName", "length", "description" are 
 *   case sensitive. Please do not change them
 * - Description:
 *   - they are html text and you are free to manipulate it
 *     and add your own style, format, or even images
 *   - to shift to a new line use the tag <br> 
 */

let tarotData = {
  "000": { 
    "cardName": "Fool",
    0: "https://lvslprogramming.files.wordpress.com/2023/10/fool.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/fool.webp", 
    "length": 2,
    "description": `The only card that has absolute nothing. "The world was without order and in chaos..."<br><br>Tree of Life - ${treeOfLifeData['000']}`
    },
  "001": { 
    "cardName": "Magician",
    0: "https://lvslprogramming.files.wordpress.com/2023/10/magus.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/magus.webp", 
    "length": 2,
    "description": ` 0 -> 1, zero as in nothing, to one as to having *something*, Creator of the universe, therefore like magic (genesis)<br><br>Tree of Life - ${treeOfLifeData['001']}}` 
    },
  "002": { 
    "cardName": "Priestess",
    0: "https://lvslprogramming.files.wordpress.com/2023/10/priestess.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/priestess.webp", 
    "length": 2,
    "description": ` "The world was without order and in chaos..." and therefore creation, ie mother nature, the gods<br><br>Tree of Life - ${treeOfLifeData['002']}` 
    },
  "003": { 
    "cardName": "Empress",
    0: "https://lvslprogramming.files.wordpress.com/2023/10/empress.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/empress.webp",
    "length": 2, 
    "description": `"emperor" on earth, taking care of the earth, the concept of earth, above the earth, heaven<br><br>Tree of Life - ${treeOfLifeData['003']}` 
    },
  "004": { 
    "cardName": "Emperor",
    0: "https://lvslprogramming.files.wordpress.com/2023/10/emperor.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/emperor.webp", 
    "length": 2,
    "description": `(Repeat 3 upside down tri) - government body, the actual ground of the universal execution of all concepts above it. Therefore consist of only one body<br><br>Tree of Life - ${treeOfLifeData['004']}` 
    },
  "005": { 
    "cardName": "Hierophant", 
    0: "https://lvslprogramming.files.wordpress.com/2023/10/hierophant.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/hierophant.webp", 
    "length": 2,
    "description": `Spiritual fulfillment and unfilfillment, bonded dogmatic rule and restricted thoughtflow, spiritual concept being put in use and also challenged <br><br>Tree of Life - ${treeOfLifeData['005']}` 
      },
  "006": { 
    "cardName": "Lovers", 
    0: "https://lvslprogramming.files.wordpress.com/2023/10/lovers.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/lovers.webp", 
    "length": 2,
    "description": `(Repeat 1 upside down tri) - perfection and essense like the light of the sun, both the spiritual light and the physical body coming into a harmony<br><br>Tree of Life - ${treeOfLifeData['006']}` 
    },
  "007": { 
    "cardName": "Chariot", 0: "https://lvslprogramming.files.wordpress.com/2023/10/chariot.webp", 1: "https://lvslprogramming.files.wordpress.com/2023/10/chariot.webp", "length": 2,
    "description": `(Repeat 3 link to Lovers as no1)- physical tool for travelling and taking the action of going somewhere else. Also an attempt to avoid being stuck<br><br>Tree of Life - ${treeOfLifeData['007']}` 
    },
  "008": { 
    "cardName": "Adjustment/Justice", 
    0: "https://lvslprogramming.files.wordpress.com/2023/10/adjustment.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/adjustment.webp", 
    "length": 2,
    "description": `(Repeat 2 link to Lovers as no1)- adjustment that is need to be made in the mental layer. Due to some kind of change from the outside.<br><br>Tree of Life - ${treeOfLifeData['008']}`
    },
  "009": { 
    "cardName": "Hermit", 0: "https://lvslprogramming.files.wordpress.com/2023/10/hermit.webp", 1: "https://lvslprogramming.files.wordpress.com/2023/10/hermit.webp", "length": 2,
    "description": `(Upside down 1) - the dark aspect of earthly divine. Psychic and occult abilities. Down right to the unknown in action and its grinding and chewing up. Somehow resembles the dark side of a Magician (no1)<br><br>Tree of Life - ${treeOfLifeData['009']}` 
    },
  "010": { 
    "cardName": "Wheel of Fortune", 0: "https://lvslprogramming.files.wordpress.com/2023/10/fortune.webp", 1: "https://lvslprogramming.files.wordpress.com/2023/10/fortune.webp", "length": 2,
    "description": `(0 and 1, 10 in Tree of life) - the first and a very harsh judgement of our own deeds but not exactly the earthly saying of "karma". Instead it is whatever effort or shortcomes we put into that became the fruit. From light entering into the dark (darkness, emptiness)<br><br>Tree of Life - ${treeOfLifeData['010']}` 
    },
  "011": { 
    "cardName": "Lust", 0: "https://lvslprogramming.files.wordpress.com/2023/10/lust.webp", 1: "https://lvslprogramming.files.wordpress.com/2023/10/lust.webp", "length": 2,
    "description": `(1 inside 10 ie fortune) - the most raw and unchanging push that drives all mundane creations, but in a quite unsatisfactory way. Also represents the constant thriving of the human race perhaps for nothing but an ego<br><br>Tree of Life - ${treeOfLifeData['001']}` 
    },
  "012": { 
    "cardName": " Hanged Man", 0: "https://lvslprogramming.files.wordpress.com/2023/10/hanged.webp", 1: "https://lvslprogramming.files.wordpress.com/2023/10/hanged.webp", "length": 2,
    "description": ` - (2 in 10) spiritual suffocation and a lot of trials. The middle road of spiritual fulfillment and needs not being met.<br><br>Tree of Life - ${treeOfLifeData['002']}` 
    },
  "013": {
    0: "https://lvslprogramming.files.wordpress.com/2023/10/death.webp",
    1: "https://lvslprogramming.files.wordpress.com/2023/10/death.webp",
    "length": 2,
    "cardName": "Death",
    "description": `(3 in 10) being physically 'dead' due to spiritually exhaused. Something that reducing to nothing and the failure of holding what was there previously, as if everything is falling apart<br><br>Tree of Life - ${treeOfLifeData['003']}`
    },
  "014": { 
    "cardName": "Art/Temperance", 
    0: "https://lvslprogramming.files.wordpress.com/2023/10/art.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/art.webp", 
    "length": 2,
    "description": `repeat 3 in 10) The attempt of pasting and putting things together in a random way. A color of mess that resembles the rainbow in an attempt to strike balance and harmony (negative card on its own, but sometimes diagram of the deck will dilute its negativity)<br><br>Tree of Life - ${treeOfLifeData['004']}` 
    },
  "015": { 
    "cardName": "Devil", 
    0: "https://lvslprogramming.files.wordpress.com/2023/10/devil.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/devil.webp", "length": 2,
    "description": `(repeat 2 in 10) The mind being tempted by different things, contradictions and contradictory theories and practices that do not always want to fit with each other<br><br>Tree of Life - ${treeOfLifeData['005']}` 
    },
  "016": { 
    "cardName": "Tower", 
    0: "https://lvslprogramming.files.wordpress.com/2023/10/tower.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/tower.webp", "length": 2,
    "description": `(repeat 1 upside down in 10) the beauty of falling apart condensed in the physical world. But the intense pain that also follows with it. Like heaven but down to hell<br><br>Tree of Life - ${treeOfLifeData['006']}` 
    },
  "017": { 
    "cardName": "Star", 
    0: "https://lvslprogramming.files.wordpress.com/2023/10/star.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/star.webp", 
    "length": 2,
    "description": `Seeing "heaven" in its raw form, appreciating the world and seeing the beauty that one cannot really reach<br><br>Tree of Life - ${treeOfLifeData['007']}` 
    },
  
  "018": { 
    "cardName": "Moon", 0: "https://lvslprogramming.files.wordpress.com/2023/10/moon.webp", 1: "https://lvslprogramming.files.wordpress.com/2023/10/moon.webp", "length": 2,
    "description": `The part where things are always "like how it was suppose to be". A compliment that comes from the inside of the person. Something that "reflects" the Earth at all times no matter what. Probably cardname it Earth<br><br>Tree of Life - ${treeOfLifeData['008']} ` 
    },
  "019": { 
    "cardName": "Sun", 0: "https://lvslprogramming.files.wordpress.com/2023/10/sun.webp", 1: "https://lvslprogramming.files.wordpress.com/2023/10/sun.webp", "length": 2,
    "description": `The complete unification of the world as sun is looked as the source of everything including time. The complexity of all understandings condensed into a fire ball that is so powerful that it lights up everything<br><br>Tree of Life - ${treeOfLifeData['009']}` 
    },
  "020": { 
    "cardName": "Aeon/Judgement", 0: "https://lvslprogramming.files.wordpress.com/2023/10/aeon.webp", 1: "https://lvslprogramming.files.wordpress.com/2023/10/aeon.webp", "length": 2,
    "description": `(Number 0 in Universe) the darkest aspect of creator and creation. Therefore judgement is like going back to where we were and looking back at the present. Feels like the baby God looking back <br><br>Tree of Life - ${treeOfLifeData['010']}` 
    },
  "021": { 
    "cardName": "Universe", 
    0: "https://lvslprogramming.files.wordpress.com/2023/10/universe.webp", 
    1: "https://lvslprogramming.files.wordpress.com/2023/10/universe.webp", 
    "length": 2,
    "description": `(Number 1 in Universe) Universe as it should be and always should be. We want 1s and not 0s <br><br>Tree of Life - ${treeOfLifeData['001']}` 
    }     
}






