// ========================
// === GLOBAL VARIABLES ===
// ========================
// counter variable to keep track of the current index
let currentDivIndex = 0;

// current div element
let $currentDiv = $('.data').children().eq(currentDivIndex);

// number of divs
let numOfDivs = $('.data').children().length - 1





    // ========================
    //       MAIN FUNCTION
    // =======================
    const retrieveData = (event) => {
      // clears out character input form
      event.preventDefault();

      let $abilites = $('.div1').children();
      let $items = $('.div2').children();
      let $moves = $('.div3').children();
      let $type = $('.div4').children();

      // clears all the previous entries out
      $abilites.remove();
      $items.remove();
      $moves.remove();
      $type.remove();

      // user input saved to variable which will be plugged into the api url
      let $character = $('input[type="text"]').val() || $(event.currentTarget).val()

      $.ajax({
          //user input is plugged in and searches for that character
          url: "https://pokeapi.co/api/v2/pokemon/" + $character,
        })
        .done(
          (data)=>{
              console.log("Retrieved records from the dataset!");
              // takes the 'sprites' data and creates <p> and appends to .div4
              //for (let i = 0; i <= 1; i++) {
                  const $sprites1 = $('<img>').attr('src', data.sprites.front_default);
                    $('.div4').append($sprites1);
                  const $sprites2 = $('<img>').attr('src', data.sprites.back_default);
                    $('.div4').append($sprites2);
                  // const $sprites3 = $('<img>').attr('src', data.sprites.front_shiny);
                  //   $('.div4').append($sprites3);
                  // const $sprites4 = $('<img>').attr('src', data.sprites.back_shiny);
                  //   $('.div4').append($sprites4);
                    // $sprites.attr('id', 'sprites');

              //}

              // takes the 'moves' data and creates <p> and appends to .div2
              for (let i = 0; i < 9; i++) {
                  const $moves = $('<p>')
                    $moves.text(data.moves[i].move.name);
                    $moves.attr('id', 'moves');
                    $('.div3').append($moves);
              }
              // takes the 'abilities' data and creates <p> and appends to .div1
              for (let i = 0; i <= [data.abilities].length; i++) {
                if (data.abilities == undefined) {
                  continue;
                }
                else {
                const $ability = $('<p>')
                  $ability.text(data.abilities[i].ability.name);
                  $ability.attr('id', 'ability');
                  $('.div1').append($ability);
                }
              }

              // if there are no results for 'items' it will create a <p> tag and return 'NO ITEM'
              if (data.held_items == false) {
                const $item = $('<p>').text("NO ITEM")
                  $item.attr('id', 'item');
                  $('.div2').append($item);
              }
              // if there are results create a <p> and append to .div3
              else {
                for (let i = 0; i <= [data.held_items].length; i++) {
                  const $item = $('<p>').text(data.held_items[i].item.name)
                    $item.attr('id', 'item');
                    $('.div2').append($item);
                }
              }



                // $button.on('click', () => {
                //   $resolution.toggleClass("hidden");
                // });

          },
          (error)=>{
              console.log('bad request');
          });
    }
$('input[type="submit"]').on('click', retrieveData);

//====================================
//=======     CAROUSEL     ===========
//====================================

// ========================
// === GRABBING THE DIVS ===
// ========================
const $next = $('.next');
const $previous = $('.previous');
console.log($previous);
// ========================
//  EVENT LISTENER/HANDLER
// ========================
$next.on('click', () => {
  $currentDiv.hide()
  if (currentDivIndex < numOfDivs) {
    currentDivIndex++;
  }
  else {
    currentDivIndex = 0;
  }
  $currentDiv = $('.data').children().eq(currentDivIndex)
  $currentDiv.show();
})

$previous.on('click', () => {
  $currentDiv.hide()
  if (currentDivIndex > 0) {
    currentDivIndex--;
  }
  else {
    console.log(numOfDivs);
    currentDivIndex = numOfDivs;
  }
  $currentDiv = $('.data').children().eq(currentDivIndex)
  $currentDiv.show();
})



    // $('form').on('submit', (event)=>{
    //
    //         event.preventDefault();
    //
    //         const userInput = $('input[type="text"]').val();
    //         console.log(userInput);
    //         // if ($numEntries == "") {
    //   $numEntries = 10;
    // }
    // else {
    //   $numEntries = $('input[type="text"]').val();
    // }
    // let borough = $(event.currentTarget).val();
    //
    //
    //         $.ajax({
    //             url: "https://pokeapi.co/api/v2/pokemon/" + userInput,
    //         }).then(
    //             (data)=>{
    //                 console.log(data);
    //             },
    //             ()=>{
    //                 console.log('bad');
    //             }
    //         );
    //     })
