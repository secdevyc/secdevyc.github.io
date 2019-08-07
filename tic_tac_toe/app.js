const $box = $('.box');
let clicks = 0;

const $box1 = $('#box1');
const $box2 = $('#box2');
const $box3 = $('#box3');
const $box4 = $('#box4');
const $box5 = $('#box5');
const $box6 = $('#box6');
const $box7 = $('#box7');
const $box8 = $('#box8');
const $box9 = $('#box9');

const xWin = () => {
  alert('X wins!');
}
const oWin = () => {
  alert('O wins!');
}

const checkWin = () => {
  if ($box1.hasClass('x') === true && $box2.hasClass('x') === true && $box3.hasClass('x') === true) {
    xWin();
  }
  else if ($box1.hasClass('o') === true && $box2.hasClass('o') === true && $box3.hasClass('o') === true) {
    oWin();
  }
  else if ($box4.hasClass('x') === true && $box5.hasClass('x') === true && $box6.hasClass('x') === true) {
    xWin();
  }
  else if ($box4.hasClass('o') === true && $box5.hasClass('o') === true && $box6.hasClass('o') === true) {
    oWin();
  }
  else if ($box7.hasClass('x') === true && $box8.hasClass('x') === true && $box9.hasClass('x') === true) {
    xWin();
  }
  else if ($box7.hasClass('o') === true && $box8.hasClass('o') === true && $box9.hasClass('o') === true) {
    oWin();
  }
  else if ($box1.hasClass('x') === true && $box4.hasClass('x') === true && $box7.hasClass('x') === true) {
    xWin();
  }
  else if ($box1.hasClass('o') === true && $box4.hasClass('o') === true && $box7.hasClass('o') === true) {
    oWin();
  }
  else if ($box2.hasClass('x') === true && $box5.hasClass('x') === true && $box8.hasClass('x') === true) {
    xWin();
  }
  else if ($box2.hasClass('o') === true && $box5.hasClass('o') === true && $box8.hasClass('o') === true) {
    oWin();
  }
  else if ($box3.hasClass('x') === true && $box6.hasClass('x') === true && $box9.hasClass('x') === true) {
    xWin();
  }
  else if ($box3.hasClass('o') === true && $box6.hasClass('o') === true && $box9.hasClass('o') === true) {
    oWin();
  }
  else if ($box1.hasClass('x') === true && $box5.hasClass('x') === true && $box9.hasClass('x') === true) {
    xWin();
  }
  else if ($box1.hasClass('o') === true && $box5.hasClass('o') === true && $box9.hasClass('o') === true) {
    oWin();
  }
  else if ($box3.hasClass('x') === true && $box5.hasClass('x') === true && $box7.hasClass('x') === true) {
    xWin();
  }
  else if ($box3.hasClass('o') === true && $box5.hasClass('o') === true && $box7.hasClass('o') === true) {
    oWin();
  }
}


const changeSign = (event) => {
  if ($(event.currentTarget).hasClass('x') === true || $(event.currentTarget).hasClass('o') === true) {
    alert("This box is full");
  } else {
    if (clicks % 2 === 0) {
      $box.empty();
      $(event.currentTarget).css('background-image', 'url(imgs/x.png)').addClass('x');
      clicks++;
      checkWin();
    } else {
      $box.empty();
      $(event.currentTarget).css('background-image', 'url(imgs/o.png)').addClass('o');
      clicks++;
      checkWin();
    }
  }
}

$box.on('click', changeSign)
