document.addEventListener("DOMContentLoaded", function() {

var frog1 = document.createElement('img');
frog1.src = 'https://drive.google.com/uc?export=view&id=1wU6Pqx6hxOSdPTQvvJs9rwr47o5uKun6';
document.body.appendChild(frog1);

frog1.style.width = '150px';
frog1.style.height = '150px';

frog1.style.position = 'absolute';
frog1.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
frog1.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';

setInterval(function() {
  if (frog1.offsetLeft < 0 || frog1.offsetLeft > window.innerWidth ||
      frog1.offsetTop < 0 || frog1.offsetTop > window.innerHeight) {
    frog1.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    frog1.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
  }
}, 100);

document.body.style.overflow = 'hidden';

var frogSpeed = {
  x: Math.floor(Math.random() * 10) + 5,
  y: Math.floor(Math.random() * 10) + 5
};

function moveFrog() {
  frog1.style.left = (parseInt(frog1.style.left) + frogSpeed.x) + 'px';
  frog1.style.top = (parseInt(frog1.style.top) + frogSpeed.y) + 'px';
}

setInterval(moveFrog, 100);

setInterval(function() {
  frog1.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
  frog1.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
}, 1800);

var frog2 = document.createElement('img');
frog2.src = 'https://drive.google.com/uc?export=view&id=1wU6Pqx6hxOSdPTQvvJs9rwr47o5uKun6';
document.body.appendChild(frog2);

frog2.style.width = '150px';
frog2.style.height = '150px';

frog2.style.position = 'absolute';
frog2.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
frog2.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';

setInterval(function() {
  if (frog2.offsetLeft < 0 || frog2.offsetLeft > window.innerWidth ||
      frog2.offsetTop < 0 || frog2.offsetTop > window.innerHeight) {
    frog2.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    frog2.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
  }
}, 100);

var frog2Speed = {
  x: Math.floor(Math.random() * 10) + 5,
  y: Math.floor(Math.random() * 10) + 5
};

function moveFrog2() {
  frog2.style.left = (parseInt(frog2.style.left) + frog2Speed.x) + 'px';
  frog2.style.top = (parseInt(frog2.style.top) + frog2Speed.y) + 'px';
}

setInterval(moveFrog2, 100);

setInterval(function() {
  frog2.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
  frog2.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
}, 700);

frog2Speed.x = 0.5 * frogSpeed.x;
frog2Speed.y = 0.9 * frogSpeed.y;

var knife = document.createElement('img');
knife.src = 'https://drive.google.com/uc?export=view&id=11VC5tDfzqKNXx2DV93Ma9tAtB2h6WqVs';
document.body.appendChild(knife);

knife.style.width = '100px';
knife.style.height = '100px';

knife.style.position = 'absolute';
knife.style.left = window.innerWidth / 2 + 'px';
knife.style.top = window.innerHeight / 2 + 'px';

setInterval(function() {
  if (knife.offsetLeft < 0 || knife.offsetLeft > window.innerWidth ||
      knife.offsetTop < 0 || knife.offsetTop > window.innerHeight) {
    knife.style.left = window.innerWidth / 2 + 'px';
    knife.style.top = window.innerHeight / 2 + 'px';
  }
}, 100);

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 37) {
    knife.style.left = (parseInt(knife.style.left) - 10) + 'px';
  } else if (e.keyCode == 38) {
    knife.style.top = (parseInt(knife.style.top) - 10) + 'px';
  } else if (e.keyCode == 39) {
    knife.style.left = (parseInt(knife.style.left) + 10) + 'px';
  } else if (e.keyCode == 40) {
    knife.style.top = (parseInt(knife.style.top) + 10) + 'px';
  }
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 32) {
    knife.style.top = (parseInt(knife.style.top) - 10) + 'px';
  }
});

frogSpeed.x = 0.5 * frogSpeed.x;
frogSpeed.y = 0.5 * frogSpeed.y;

var score = 0;
var scoreLabel = document.createElement('div');
scoreLabel.innerHTML = 'Score: ' + score;
scoreLabel.style.position = 'absolute';
scoreLabel.style.right = '10px';
scoreLabel.style.top = '10px';
document.body.appendChild(scoreLabel);

setInterval(function() {
  score--;
  scoreLabel.innerHTML = 'Score: ' + score;
}, 60000);

var isOverlapping = false;

setInterval(function() {
  if (frog1.offsetLeft < knife.offsetLeft + knife.offsetWidth &&
      frog1.offsetLeft + frog1.offsetWidth > knife.offsetLeft &&
      frog1.offsetTop < knife.offsetTop + knife.offsetHeight &&
      frog1.offsetTop + frog1.offsetHeight > knife.offsetTop) {
    isOverlapping = true;
  } else {
    isOverlapping = false;
  }
}, 10);

var wasOverlapping = false;

setInterval(function() {
  if (isOverlapping && !wasOverlapping) {
    score++;
    scoreLabel.innerHTML = 'Score: ' + score;
    var message = document.createElement('div');
    message.innerHTML = 'Yummy +1';
    message.style.position = 'absolute';
    message.style.left = frog1.offsetLeft + 'px';
    message.style.top = frog1.offsetTop + 'px';
    message.style.color = 'green';
    document.body.appendChild(message);
    setTimeout(function() {
      document.body.removeChild(message);
    }, 1000);
  }
  wasOverlapping = isOverlapping;
}, 10);

var startTime = new Date().getTime();
var hasWon = false;

document.body.style.background = '#e6e6ff';

setInterval(function() {
  if (score == 13 && !hasWon) {
    hasWon = true;
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    var endTime = new Date().getTime();
    var time = (endTime - startTime) / 1000;
    var message = document.createElement('div');
    message.innerHTML = 'You won! It took you ' + time + ' seconds. All the Best for your date!';
    message.style.position = 'absolute';
    message.style.left = window.innerWidth / 2 + 'px';
    message.style.top = window.innerHeight / 2 + 'px';
    message.style.color = 'green';
    document.body.appendChild(message);
  }
}, 10);

var rules = document.createElement('div');
rules.innerHTML = 'Rules: Use the arrow keys to move the Knife. Kill 13 frogs for dinner!';
rules.style.position = 'absolute';
rules.style.left = '30px';
rules.style.bottom = '30px';
rules.style.color = 'gray';
document.body.appendChild(rules);

var gameName = document.createElement('div');
gameName.innerHTML = 'Date Night';
gameName.style.position = 'absolute';
gameName.style.left = '30px';
gameName.style.top = '30px';
gameName.style.color = 'Black';
document.body.appendChild(gameName);


});