const readLine = require('readline');

let level = 1;

let point = 0;

let n = 2;

const gameOn = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

gameOn.question(`please, enter your username\n`, (username) => {
  console.log(`welcome to the numberGuesser game ${username}`);

  start(Math.floor((Math.random() * n) + 1));

});

function start(random) {
  gameOn.question(`i'm holding a number between 1 and ${n}, can you guess what that number is?\n`, (answer) => {
    if (answer.trim() == random) {
      correct();
    }
    else {
      gameOn.setPrompt('Oops,wrong answer try again\n');
      gameOn.prompt();
      gameOn.on('line', (answer) => {
        if (answer.trim() == random) {
          correct();
        } else {
          gameOn.setPrompt('Oops,wrong answer try again\n');
          gameOn.prompt();
        }

      })

    }
  })


};

function correct() {
  level = level + 1;
  n = n + 1;
  point = point + 1;
  console.log(`you guessed correctly!!!, you are now on level: ${level}\n total points: ${point}\n`);
  goOn();
}

function goOn() {
  gameOn.question(`would you like to contine? (yes/no)`, (res) => {
    if (res == 'yes') {
      start(Math.floor((Math.random() * n) + 1));
    }
    else if (res == 'no') {
      console.log('thanks for playing');
      gameOn.close();
    } else {
      console.log(`${res} is an invalid response, try again`);
    }
  })
}




