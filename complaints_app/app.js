
//when user clicks on borough, the name should be input on end of ajax url.

//when user enters number, the value should be in the $limit value

const resolutionArray = [];



const retrieveData = (event) => {
  event.preventDefault();
  let $numEntries = $('input[type="text"]').val();
  if ($numEntries == "") {
    $numEntries = 10;
  }
  else {
    $numEntries = $('input[type="text"]').val();
  }
  let borough = $(event.currentTarget).val();
  console.log(borough);
  $.ajax({
      //when user clicks on borough, borough name should be 'input'
      url: "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=" + borough,
      //"https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=",
      type: "GET",
      data: {
        "$limit" : $numEntries,
      }
    })
    .done(
      (data)=>{
          console.log("Retrieved records from the dataset!");
          console.log(data.resolution);
          for (let i = 0; i <= $numEntries; i++) {

            const $div1 = $('<div>').addClass('div1')
            $('.data').append($div1);

            const $div2 = $('<div>').addClass('div2')
            $div1.append($div2);

            const $descriptor = $('<p>').html(data[i].descriptor);
              $descriptor.text(data[i].descriptor);
              $descriptor.addClass('descriptor');
              $div2.append($descriptor);

            const $button = $('<button>').text("What did police do?")
              $button.attr('id', 'button');
              $div2.append($button);

            const $resolution = $('<p>')
              $resolution.text(data[i].resolution_description);
              $resolution.attr('id', 'resolution').addClass('hidden')
              $div1.append($resolution);

            $button.on('click', () => {
              $resolution.toggleClass("hidden");
            });
          }
      },
      (error)=>{
          console.log('bad request');
      });
}
$('input[type="submit"]').on('click', retrieveData);
// const $formButton = $('button');
// const $Brooklyn = $('#Brooklyn');
// const $Manhattan = $('#Manhattan')
// const $Queens = ;
// const $Bronx = ;
// const $Staten = ;

// const whichButton = (event) => {
//   if ($(event.currentTarget) === $Brooklyn) {
//     console.log('it worked Brooklyn');
//     // $('form').submit(retrieveData);
//   }
  // else if ($(event.currentTarget) === $Manhattan){
  //   console.log('it worked Manhattan');
  //   // $('form').submit(retrieveData);
  // }
//}
