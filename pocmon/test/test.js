// ========================
// === GLOBAL VARIABLES ===
// ========================
// counter variable to keep track of the current indext
let currentDivIndex = 0;

// current div element
let $currentDiv = $('.data').children().eq(currentDivIndex);

// number of div
let numOfDivs = $('.data').children().length - 1

console.log('currentDivIndex='+currentDivIndex);
console.log('currentdiv='+$currentDiv);
console.log('numofdivs='+numOfDivs);
// ========================
// === GRABBING THE DIVS ===
// ========================
const $next = $('.next');
const $previous = $('.previous');

// ========================
//  EVENT LISTENER/HANDLER
// ========================
$next.on('click', () => {
  $currentDiv.hide()
  if (currentDivIndex < numOfDivs) {
    currentDivIndex++;
    console.log('currentDivIndex='+currentDivIndex);
    console.log('currentdiv='+$currentDiv);
    console.log('numofdivs='+numOfDivs);
  }
  else {
    currentDivIndex = 0;
  }
  $currentDiv = $('.data').children().eq(currentDivIndex)
  $currentDiv.show();
})

$next.on('click', () => {
  $currentDiv.hide()
  if (currentDivIndex > numOfDivs) {
    currentDivIndex--;
    console.log('currentDivIndex='+currentDivIndex);
    console.log('currentdiv='+$currentDiv);
    console.log('numofdivs='+numOfDivs);
  }
  else {
    currentDivIndex = numOfDivs;
  }
  $currentDiv = $('.data').children().eq(currentDivIndex)
  $currentDiv.show();
})
