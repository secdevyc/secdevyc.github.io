$('form').on('submit', (event)=>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val();
        console.log(userInput);


        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + userInput,
        }).then(
            (data)=>{
                console.log(data);
            },
            ()=>{
                console.log('bad');
            }
        );
    })

    const retrieveData = (event) => {
      event.preventDefault();
      let $character = $('input[type="text"]').val();
      // if ($numEntries == "") {
      //   $numEntries = 10;
      // }
      // else {
      //   $numEntries = $('input[type="text"]').val();
      // }
      // let borough = $(event.currentTarget).val();
      $.ajax({
          //when user clicks on borough, borough name should be 'input'
          url: "https://pokeapi.co/api/v2/pokemon/" + $character,
        })
        .done(
          (data)=>{
              console.log("Retrieved records from the dataset!");

              for (let i = 0; i <= [data.abilities].length; i++) {
                const $ability = $('<p>')
                  $ability.text(data.abilities[i].ability.name);
                  $ability.attr('id', 'ability');
                  $('.div1').append($ability);
              }

              for (let i = 0; i <= [data.held_items].length; i++) {

                  const $item = $('<p>').text(data.held_items[i].item.name)
                    $item.attr('id', 'item');
                    $('.div2').append($item);
              }

              for (let i = 0; i <= [data.moves].length; i++) {
                  const $moves = $('<p>')
                    $moves.text(data.moves[i].move.name);
                    $moves.attr('id', 'moves');
                    $('.div3').append($moves);

                // $button.on('click', () => {
                //   $resolution.toggleClass("hidden");
                // });
              }
          },
          (error)=>{
              console.log('bad request');
          });
    }
    $('input[type="submit"]').on('click', retrieveData);
