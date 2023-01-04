wordList= ["Abuse","Adult","Agent","Anger","Apple","Award","Basis","Beach","Birth","Block","Blood","Board","Brain","Bread","Break","Brown","Buyer","Cause","Chain","Chair","Chest","Chief","Child","China","Claim","Class","Clock","Coach","Coast","Court","Cover","Cream","Crime","Cross","Crowd","Crown","Cycle","Dance","Death","Depth","Doubt","Draft","Drama","Dream","Dress","Drink","Drive","Earth","Enemy","Entry","Error","Event","Faith","Fault","Field","Fight","Final","Floor","Focus","Force","Frame","Frank","Front","Fruit","Glass","Grant","Grass","Green","Group","Guide","Heart","Henry","Horse","Hotel","House","Image","Index","Input","Issue","Japan","Jones","Judge","Knife","Laura","Layer","Level","Lewis","Light","Limit","Lunch","Major","March","Match","Metal","Model","Money","Month","Motor","Mouth","Music","Night","Noise","North","Novel","Nurse","Offer","Order","Other","Owner","Panel","Paper","Party","Peace","Peter","Phase","Phone","Piece","Pilot","Pitch","Place","Plane","Plant","Plate","Point","Pound","Power","Press","Price","Pride","Prize","Proof","Queen","Radio","Range","Ratio","Reply","Right","River","Round","Route","Rugby","Scale","Scene","Scope","Score","Sense","Shape","Share","Sheep","Sheet","Shift","Shirt","Shock","Sight","Simon","Skill","Sleep","Smile","Smith","Smoke","Sound","South","Space","Speed","Spite","Sport","Squad","Staff","Stage","Start","State","Steam","Steel","Stock","Stone","Store","Study","Stuff","Style","Sugar","Table","Taste","Terry","Theme","Thing","Title","Total","Touch","Tower","Track","Trade","Train","Trend","Trial","Trust","Truth","Uncle","Union","Unity","Value","Video","Visit","Voice","Waste","Watch","Water","While","White","Whole","Woman","World","Youth"]


function pickWord(){
var guessThis = wordList[Math.floor(Math.random()*wordList.length)];
console.log(guessThis);
return guessThis;
};
var btn = document.querySelector(".btn");



container.addEventListener("click", function(event) {
    var element = event.target;

if (element.matches(".btn")){
    var state = element.getAtribute
}

//Diem's pseudocode:
// declare wordBlank, win, lose, timer, startButton (use querySelector)

//declare variables 

//create arrays used to create blanks and letters on screen

//create array of words the user will guess. 

//create an init function which will be called when the page loads 
//example:
// function init(){
//     getWins();
//     getLosses();
// }

//create a startGame function which is called when the start button is clicked.

//create winGame function which will be called when the win conditions are met. 

//create loseGame function which will be called when timer reaches 0

//create setTimer function which starts and stops the timer and triggers winGame() and loseGame()
//use SetInterval and clearInverval for this

//create a function that creates blanks on screen
//use math.floor that randomly picks word from words array. 
//use loop to push blanks to blankLetters array
//use (.join) to convert blankLetters array into a string and render it to the screen. 

//create function to update win count on screen and save win count to local storage

//create a function to update lose count on screen and save to local storage 

//create getWins() and getLosses() functions to get stored value from local storage if it exists.  If stored value does not exist, set winCounter to 0. If stored value is retrieved from local storage, update win count to that value.

//create function to test if guessed letter is in the word and renders it to the screen

//attach event listener to document to listen to key event

//attach event listener to start button to call startGame function on click 

//call the init() function so that it fires when page opens

//bonus: add reset button. 
//create resetGame() function which resets win and loss counts as well as renders win and loss counts and set them into client storage. 
//attach event listener to button. 